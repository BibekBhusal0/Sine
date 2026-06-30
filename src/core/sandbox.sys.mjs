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

export default {
  async unload_script(){
    // TODO: Maybe change global function like event listeners and dom modification functions and track it's chagnes and revert them.
  },

  async run_in_sandbox(path, process, permissions) {
    console.warn("DEBUGPRINT[102]: sandbox.sys.mjs:44: process=", process);
    try {
      const Cu = Components.utils;
      const sandbox = Cu.Sandbox(process, {
        sandboxPrototype: process,
        wantXrays: false,
      });

      console.warn("DEBUGPRINT[103]: sandbox.sys.mjs:69: path=", chromePathToAbsPath(path))
      const data = await IOUtils.readUTF8(chromePathToAbsPath(path));
      Cu.evalInSandbox(data, sandbox);
    } catch (err) {
      console.error("DEBUGPRINT[105]: sandbox.sys.mjs:60: process=", process)
      console.error("DEBUGPRINT[104]: sandbox.sys.mjs:60: path=", path)
      console.error("DEBUGPRINT[97]: manager.sys.mjs:249: err=", err);
    }
  },
};
