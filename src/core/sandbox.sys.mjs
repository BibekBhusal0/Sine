// Temporary function before I figure out to load sandbox script with chrome path
// I know cosmo will remove this
function chromePathToAbsPath(chromePath) {
  const prefix = "chrome://sine/content/";
  const scriptPath = chromePath.startsWith(prefix)
    ? chromePath.slice(prefix.length)
    : "";
  const file = Services.dirsvc.get("ProfD", Ci.nsIFile);
  file.append("chrome");
  file.append("sine-mods");
  for (const part of scriptPath.split("/")) {
    file.append(part);
  }
  return file.path
}

function makeServicesProxy(permissions = []) {
  const allowed = new Set(permissions);

  return new Proxy(Services, {
    get(target, prop, receiver) {
      if (prop === "prefs" || prop === "pref") {
        if (allowed.has("pref")) {
          return Services.prefs;
        }
        console.warn("DEBUGPRINT[108]: sandbox.sys.mjs:26 : services.pref is not allowed")
        return undefined;
      }

      return Reflect.get(target, prop, receiver);
    },

    has(target, prop) {
      if (prop === "prefs" || prop === "pref") {
        return allowed.has("pref");
      }
      return Reflect.has(target, prop);
    },

    set(target, prop, value, receiver) {
      if ((prop === "prefs" || prop === "pref") && !allowed.has("pref")) {
        console.warn("DEBUGPRINT[109]: sandbox.sys.mjs:42 : services.pref is not allowed")
        return false;
      }
      return Reflect.set(target, prop, value, receiver);
    },
  });
}

export default {
  async unload_script(){
    // TODO: Maybe change global function like event listeners and dom modification functions and track it's chagnes and revert them.
  },

  async run_in_sandbox(path, process, permissions) {
    const proxy = makeServicesProxy(permissions)
    try {
      const Cu = Components.utils;
      const sandbox = Cu.Sandbox(process, {
        sandboxPrototype: process,
        wantXrays: false,
      });

      sandbox.Services = proxy;

      console.warn("DEBUGPRINT[103]: sandbox.sys.mjs:69: path=", chromePathToAbsPath(path))
      const data = await IOUtils.readUTF8(chromePathToAbsPath(path));
      Cu.evalInSandbox(data, sandbox);
    } catch (err) {
      console.error("DEBUGPRINT[104]: sandbox.sys.mjs:60: path=", path)
      console.error("DEBUGPRINT[97]: manager.sys.mjs:249: err=", err);
    }
  },
};
