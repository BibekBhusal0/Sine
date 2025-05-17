<div align="center">
  <img src="https://github.com/user-attachments/assets/e31cd6a9-6487-439d-9a67-0ea12911fdc1" alt="Sine logo" width="240">
</div>

<div align="center">
  <a href="https://github.com/CosmoCreeper/Sine/releases"><img src="https://img.shields.io/badge/version-1.1.2-e57b5e?labelColor=lightgray"/></a>
  <a href="https://github.com/CosmoCreeper/Sine/stargazers"><img src="https://img.shields.io/badge/Star%20our%20repository-★-e57b5e?style=flat&logo=github&labelColor=lightgray"/></a>
</div>

###

<div align="center">
    <a href="https://zen-browser.app/">
        <img width="120" alt="zen-badge-dark" src="https://github.com/user-attachments/assets/d6ab3ddf-6630-4062-92d0-22497d2a3f9a" />
    </a>
</div>

###

<div align="center">
  <img src="https://github.com/user-attachments/assets/992b5ae4-3ce7-4378-a453-e977e2b2c3c1" width="800">
</div>


###

<h2><img src="https://github.com/user-attachments/assets/973321b7-8f9a-4098-95d7-c20367b07ace" width="20"> What is Sine?</h2>
<p>Sine is the replacement for Zen Mods made by the community, for the community. The intent of Sine is to be a better, faster, user-friendly, and compatible alternative to Zen Mods.</p>

<h2>⚙️ How does Sine work?</h2>
Sine is built with fx-autoconfig and manipulates the inner workings of Zen Mods to
provide a clean, intuitive, and sturdy system that makes getting the "github version" easy.

<h2>🛠️ Installation</h2>

### 🤖 Automatic (Recommended)
For a simplistic installation of both fx-autoconfig and Sine, you can utilize Sine's automatic installer. In v1.1.1 and on, these installers are included with each release and there are versions for darwin x64 and arm, linux x64 and arm, and windows x64 (no arm support). I do want to point out that these installers do not have the code inside of them and rather the data is fetched from a url meaning that internet is needed even after downloading the installer (and you can't install old versions without manual installation).

Once you have used one of these automatic installers, you will need to clear your startup cache for Zen, which you can do by going to the about:support page in Zen and clicking on the "Clear Startup Cache" button at the top-right.

<details><summary><h3>✋ Manual</h3></summary>

ℹ️ NOTE: *As mentioned earlier, Sine requires fx-autoconfig, making a manual installation more complicated and it is typically recommended to go with an automatic installation instead.*

For those wishing to manually install Sine, you have two options. You may build the auto-installer from source by copying the code from the auto-installers directory and running the .bat or .sh file, resulting in multiple files for each platform that you can use to install Sine, or you can manually install both fx-autoconfig and Sine (instructions below.)

If you wish to manually install fx-autoconfig and Sine, you will have to start by navigating to the installation directory of your Zen Browser and add/replace a config.js file with [the one from the fx-autoconfig repo](https://github.com/MrOtherGuy/fx-autoconfig/blob/master/program/config.js). Once you have done that, navigate to the defaults directory and then the pref directory. Inside of there, there should be a config-prefs.js file. Replace that file with [this one](https://github.com/MrOtherGuy/fx-autoconfig/blob/master/program/defaults/pref/config-prefs.js). Now, you will need to navigate to your profiles directory for Zen which you can access easily by opening up about:support in Zen and finding the "Profile Folder" in one of the sections of the table and clicking on "Open Folder" next to it (assuming you want to install Sine on your current profile.) This will open up the location of your current profile for Zen in which you can navigate to the chrome directory in which you will want to add all of the directories inside of [this directory in the fx-autoconfig repository](https://github.com/MrOtherGuy/fx-autoconfig/tree/master/profile/chrome). Once you have done all of that, you will want to clear your startup cache by going to about:support again and clicking on the "Clear Startup Cache" button at the top-right.

</details>

## ✨ Features
Sine boasts a powerful suite of easy-to-use tools for everyone, technical, or non-technical. Let's look through some of these features:

<details><summary><h3>🛒 A built-in marketplace.</h3></summary>
  
Sine has a marketplace that is built-in to the settings gui for easy access. This marketplace is where the user adds and views Sine-compatible mods.

</details>

<details><summary><h3>💻 Dev nightmares become dreams.</h3></summary>
  
Every dev has that panic when they have to publish their mod to the theme store or have to update it. Sine makes this process simple. All you have to do is add the ID of your mod to the mods.json and map it to your repository. Assuming your project is already Sine-compatible, it'll work just fine. Plus, the developers of Sine are active enough to handle your pull requests in no longer than a day.

**Now what about updating?:** The Zen theme store requires a pull request for not just creating a mod, but updating too. This, combined with painfully long response times makes dev updates a nightmare. Well fear no more, because Sine does not require update requests and pulls them straight from your repository. This means that you will never have to worry about github issues being outdated or have to tell your user to update to the "github version".

</details>

<details><summary><h3>🚀 Add unpublished mods easy.</h3></summary>
  
Sine makes the process of adding unpublished mods easy as long as they are Sine-compatible. You simply type in the name of the repository (folder if needed) and Sine handles the rest.

</details>

<details><summary><h3>🧠 Update management made smart.</h3></summary>
  
In Sine, updates are never what you think they are. Although Sine updates mods on browser restart, you have the power to turn off updating for certain mods or just altogether. This means that you won't have to worry about your mod getting updated to that new version you don't like.

The other powerful safeguard regarding updating is that Sine won't update your mod to the latest every time, only when the updatedAt property is modified. This means that when you are working on your mod locally and testing changes, your work won't be undone. (but if you're worried an update will happen while you are working on it locally, you can turn off updating for that mod.)

</details>

<details><summary><h3>💪 Powerful new preference features.</h3></summary>

Sine comes with a whole new suite of tools regarding preference management. Let's check them out now!:

- **Formatting (all types):** One of the best, new features is text formatting. This means you can now have bold, italic, and underlined letters in your label property. ~ for underline, * for italic, and ** for bold. (You may also use two backslashes to just type a * or ~ sign.)
```json
[
  {
    "type": "checkbox",
    "label": "~My~ *cool* ***checkbox*** ~***with***~ **formatting**! \\*\\*Excluded from formatting\\*\\*"
  }
]
```
- **Size (all types):** You can now use a size property to edit the font size of all sorts of stuff! (Works the same as a font size property)
```json
[
  {
    "type": "text",
    "label": "My text",
    "size": "20px"
  }
]
```
- **Text:** Sine has a standalone text type for additional context and by using the combination of bold formatting and increased font sizes, you can create a header.
```json
[
  {
    "type": "text",
    "label": "**My Header**",
    "size": "20px"
  }
]
```
- **Separators:** And if you thought that headers weren't enough to keep your users on track, we have real separators to help too! These are also compatible with the label property to have text in your separator too.
```json
[
  {
    "type": "separator",
    "label": "Workspace Indicator", <-- Displayed inside of the separator.
    "property": "uc.show-workspace-indicator" <-- Yes, you can use the separator as a type of checkbox.
  }
]
```
- **The border property (string only):** If a user is inputting a color into a string input, usually they have to type it in and then check it out by seeing the usage of it in their browser. Using the border property, the user can type in their color and see it applied on the border around the string input live. Set the border property to value for it to have this behavior, you can also set it to a color to just have a static color.
```json
[
  {
    "type": "string",
    "label": "A string that bases its *border* around your input!",
    "border": "value" <-- Replaceable with #fff, rgb(25, 25, 25), etc.
  }
]
```
- **The margin property (all types):** In order to have advanced formatting and neatness, we have added the margin property. You can set this to 20px, 1rem, 20px 4px 8px 6px, etc. It works just like a normal margin CSS property.
```json
[
  {
    "type": "text",
    "label": "more text for testing!",
    "margin": "0 20px 3px 1px"
  }
]
```
- **The conditions and operator properties (all types):** Isn't it annoying that a setting has to display all the time? What if you could hide it when another setting is not equal to something or is equal to something? Well now you can using the conditions and operator properties! (operator defaults to OR and conditions can be nested):
```json
[
  {
    "type": "string",
    "label": "A hidden setting unless the **uc.essentials.position** setting is set to ~bottom~ and superpins border is set to both or pins",
    "conditions": [
      {"if": {"property":"uc.essentials.position","value":"bottom"}},
      {"not": {"property":"uc.essentials.position","value":"left"}},
      {
        "conditions": [
          {"if": {"property":"uc.superpins.border","value":"both"}},
          {"if": {"property":"uc.superpins.border","value":"pins"}}
        ],
        "operator": "OR"
      }
    ]
    "operator": "AND"
  }
]
```
As you might have guessed, the operator property is the AND or OR condition, so whether or not the conditions should this and that or this or that. (&& or || in JS)\
As for the conditions property, it is an array that contains objects which contain if or not properties so if this or if not that. The conditions property is also nestable so it can have an object which contains more conditions and operator properties. (This is an advanced logical operators system so don't worry if you don't understand it right away.)

</details>

##

### 🔗 Quick Links

- 📚 [Documentation](https://github.com/CosmoCreeper/Sine/wiki)
- 🚀 [Releases](https://github.com/CosmoCreeper/Sine/releases)
- 🤝 [Discussions](https://github.com/CosmoCreeper/Sine/discussions)

### 🙏 Credits

Built with ❤️ by [CosmoCreeper](https://github.com/CosmoCreeper) and some [amazing supporters](https://github.com/CosmoCreeper/Sine/stargazers)!  
Licensed under [GNU General Public License v3.0](https://github.com/CosmoCreeper/Sine/tree/main/LICENSE).

##
