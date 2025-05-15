 //-------------------Using Pure React To Print Heading-------------------//

//create h1 tag and writing text inside heading
const heading = React.createElement(
        "h1", 
        {

        id: "title", //what we are passing over here will goes into my heading above
    }, 

    "Heading1" //inside h1
);

//create h2 tag
const heading2 = React.createElement(
        "h2", 
        {

        id: "title", //what we are passing over here will goes into my heading above
    }, 

    "Heading2"
);

console.log(heading);

//want to put in heading 1 and heading 2
const container = React.createElement(
    "div", //name of the tag
     { // this object take props like color , style, className

    id: "container",

}, [heading, heading2 ] //This h1 ,h2 is React Elements (Object )
); //To put multiple headings/Values (called childrens in React)use Array

console.log(heading);

 //To Put above "h1" tag inside root---------------
 const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
//root.render(heading); //print heading hello world

//This will Overwrite(Div root)
root.render(container); // printing h1 h2 which is inside our container tag.