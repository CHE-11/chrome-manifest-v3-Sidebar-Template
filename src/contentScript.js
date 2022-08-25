'use strict';

console.log("side-panel script loaded");

// Set the toggleStatus to false at loading of the site
let toggleStatus = false;

// This listener waits for the user to click on the extension to activate the sidebar
chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "toggle" && toggleStatus == false){
        console.log("message received");
        //  If Sidebar doesnt exist, create it
        let sidebarParentExists = document.getElementById('sidebarParent');
        if (sidebarParentExists){
        }else{
          wrapBody();
          createSidebar();
        }
        toggleSidebar();

        // Set the toggleStatus to true to indicate that the sidebar is open
        toggleStatus = true
    }else if(msg == "toggle" && toggleStatus == true){
        toggleSidebar();
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// #TODO: You need to set this variables to the width limitation you want for your sidebar.
var bodyWidth = "75%"; /* set to your desired initial width of the main body */
var maxBodyWidth = "85%"; /* set to your desired max width of the main body */
var minBodyWidth = "60%"; /* set to your desired min width of the main body */

var sidebarWidth = "25%"  /* 1 - bodyWidth DON'T CHANGE */
var maxSidebarWidth = "15%" /* 1 - maxBodyWidth; DON'T CHANGE */
var minSidebarWidth = "300px"; /* set to your desired min width of the sidebar */

//////////////////////////////////////////////////////////////////////////////////////////////////
// Wrap the body of the website
function wrapBody(){
    console.log("Wrapping Body")
    let wrap = document.createElement("div");
    wrap.id = "wrap";
    let windowHeight = window.innerHeight;
    wrap.style.height = windowHeight;
    wrap.style.width = bodyWidth;
  
    // Move the body's children into this wrapper
    while (document.body.firstChild)
    {
        wrap.appendChild(document.body.firstChild);
    }
    // Append the wrapper to the body
    document.body.appendChild(wrap);
}

function toggleSidebar(){
    let sidebarParent = document.getElementById('sidebarParent');
    let wrap = document.getElementById('wrap');

    if(toggleStatus == false){
        //  Set the main body size
        wrap.style.width = bodyWidth;
        wrap.style.minWidth = minBodyWidth;

        //  Set the sidebar size
        sidebarParent.style.width = sidebarWidth;
        sidebarParent.style.minWidth = minSidebarWidth;
        // let windowHeight = window.innerHeight
        sidebarParent.style.height = "100%";

        toggleStatus = true

    } else if (toggleStatus == true){
        sidebarParent.style.width = "0px";
        sidebarParent.style.minWidth = "0px";
        wrap.style.width="100%";
        wrap.style.minWidth = "100%";
        toggleStatus = false
    }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sidebar Resizer Events
const mouseDownHandler = function (e) {
  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
}

const mouseMoveHandler = function (e) {
  e.preventDefault();
  let bodyWidth = document.body.getBoundingClientRect().width;

  let sidebarParentQuery = document.getElementById('sidebarParent');
  sidebarParentQuery.style.maxWidth = document.body.getBoundingClientRect().width - 990 + "px";

  let wrappedCalendar = document.getElementById('wrap');
  wrappedCalendar.style.minWidth = "990px";
  wrappedCalendar.style.maxWidth = document.body.getBoundingClientRect().width - 300 + "px";
  
  let newSidebarWidth = bodyWidth - e.clientX + "px";
  let newSidebarWidthInt = bodyWidth - e.clientX
  let newCalendarWidth = e.clientX + "px"
  sidebarParentQuery.style.width = newSidebarWidth
  sidebarParentQuery.style.minWidth = "300px";
  wrappedCalendar.style.width = newCalendarWidth

  let sidebarQuery = document.getElementById('sidebar');
  sidebarQuery.style.width = newSidebarWidthInt - 20 + "px";

}

const mouseUpHandler = function (e) {
  e.preventDefault();
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createSidebar(){
  // create parent div
  console.log("Sidebar Created")
  let sidebarParent = document.createElement('div');
  sidebarParent.id = 'sidebarParent';
  sidebarParent.style.height = "100%";
  sidebarParent.style.width = "0px";
  sidebarParent.style.minWidth = "300px";
  sidebarParent.style.display = "flex";
  sidebarParent.style.flexDirection = "row";
  sidebarParent.style.position = "fixed";
  sidebarParent.style.top = "0px";
  sidebarParent.style.right = "0px";
  sidebarParent.style.zIndex = "9000000000000000000";
  document.body.appendChild(sidebarParent);


  // create resizer
  let resizer = document.createElement('div');
  resizer.id = 'resizer';
  resizer.style.width = "5px";
  resizer.style.backgroundColor = "black";
  resizer.style.cursor = "col-resize";
  resizer.style.height = "100%";
  resizer.style.right = "0px";
  resizer.style.top = "0px";
  resizer.style.padding = "5px 0px 5px 0px";
  resizer.setAttribute("draggable", "true");
  resizer.addEventListener("mousedown", mouseDownHandler);
  sidebarParent.appendChild(resizer);


  //  Create Sidebar
  let sidebar = document.createElement('div'); 
  sidebar.id = "sidebar";
  sidebar.style.height = "100%";
  sidebar.style.flex = "99";
  sidebar.style.border = "0px"; 
  sidebar.style.backgroundColor = "#484848";
  sidebar.style.display = "flex";
  sidebar.style.flexDirection = "column";
  sidebar.style.padding = "5px";
  sidebarParent.appendChild(sidebar);


//////////////////////////////////////////////////////////////////////////////////////////////////
//  #TODO: Create the rest of your sidebar here











//////////////////////////////////////////////////////////////////////////////////////////////////
};
