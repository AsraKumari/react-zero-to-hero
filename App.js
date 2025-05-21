/**
 * 
 * HOT MODULE RELOADING  (HMR)
 * File Watcher Algorithms - written in C++
 * BUNDLING
 * MINIFY
 * Cleaning Our Code
 * Dev and production build
 * Super fast build algorithm
 * Image Optimization
 * Caching while development
 * Compressess files
 * Compatible with older version of browser
 * HTTPS on dev
 * Port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * 
*/

import React from "react"; //core package
import ReactDOM from "react-dom/client" // package, which is used for manipulating DOM



//-------------------Using Pure React To Print Heading-------------------//

//create h1 tag and writing text inside heading
const heading = React.createElement(
        "h1", 
        {

        id: "title", //what we are passing over here will goes into my heading above
         key:"h1"   //"key" helps identifying each elements to have a uniquely in a list, it make update faster and avoids UI bugs.
    }, 

    "Heading1" //inside h1  //simply it means <h1 id:"title"> Heading1</h1>
);

//create h2 tag
const heading2 = React.createElement(
        "h2", 
        {

        id: "title", //what we are passing over here will goes into my heading above
        key:"h2",    //"key" helps identifying each elements to have a uniquely in a list, it make update faster and avoids UI bugs.
    }, 

    "Heading2"
);

console.log(heading);

//want to put in heading 1 and heading 2
const container = React.createElement(
    "div",                               //-------------name of the tag
     {                                  // -----------this object take props like color , style, className

    id: "container", 
                     //----------core-attribute name(props)

}, [heading, heading2 ]             //-----------This h1 ,h2 is React Elements (Object )
);                                 //--------------To put multiple headings/Values (called childrens in React)use Array

console.log(heading);

 //-------------------To Put above "h1" tag inside root---------------
 const root = ReactDOM.createRoot(document.getElementById("root"));

//-------------------passing a react element inside the root--------------------------
//root.render(heading); //print heading hello world

//This will Overwrite(Div root)
root.render(container); // printing h1 h2 which is inside our container tag.