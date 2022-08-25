
# ![icon_32](https://user-images.githubusercontent.com/57516026/186784204-13ae3b03-bde1-4fe1-b08c-87b0ce3034e8.png) Sidebar Template
Manifest V3 Sidebar template. Most chrome extensions are popup based but the best use of extensions is often a sidebar. To make development easier, I made this template for MV3 to quickly start development of a sidebar extension that compiles content script modules into a single content script for cleaner code and easier development. 

## Use 
First, clone this repo using ```git clone https://github.com/CHE-11/chrome-manifest-v3-Sidebar-Template```

Then run ```npm install```to install dependencies.

After cloning and install dependencies, go to the manifest in the public folder and make any changes neccasery for your extension. For the sidebar, almost all of your HTML and CSS will be injected thru a content script. Since you cannot require or import other scripts at runtime, you need to bundle at compilation. Put all of your content script modules into the src/content-scripts folder and require the neccessary modules in the src/contentScript.js file. Webpack will bundle everything for you. 

## Credit
I used [this template](https://github.com/sidehustlelab/chrome-manifest-v3-webpack-hotreload-template) as a start for building this template. Thanks sidehustlelab!

## Contribution
Please feel free to submit issues. Suggestions and pull requests are also welcome!
