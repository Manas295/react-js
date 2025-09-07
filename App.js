/*
HOW to create this structure through react
    <div id ="parent">
        <div id="child">
            <h1>This is h1 tag</h1> 
            <h2>This is h2 tag</h2> // this is sibling means 2 childs of same parent i.e sibling 
                //i.e array of children
        </div>
        <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
    </div>
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child',key:"child1"},[
            /*BELOW CODE IS VALID FOR REACT 18 but
              React 19 discourages passing arrays of children directly unless 
              each child has a stable key.
            */
            //React.createElement('h1',{id:"sibling1"},'This is h1 tag'),
            //React.createElement('h2',{id:"sibling2"},'This is h2 tag')
            //REACT 19 WAY-----------------------------
            React.createElement('h1',{id:"sibling1", key:"h1"} ,'This is Namaste React 🚀'),
            React.createElement('h2',{id:"sibling2", key:"h2"} ,'by Akshay Saini')
        ]),
    React.createElement('div',{id:'child2',key:"child2"},[
            React.createElement('h1',{id:"sibling3", key:"h3"},'I\'m h1 tag'),
            React.createElement('h2',{id:"sibling4", key:"h4"},'I\'m h2 tag')
        ])
]);

//console.log(parent);//Object    

const heading = React.createElement(
    'h1',
    {id:'heading'},
    'Hello World from React'
);
//console.log(heading);//Object         
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(heading);
root.render(parent);

/**
This code snippet demonstrates how to render a 
simple React element onto a web page using the
React and ReactDOM libraries. It starts by creating 
a React element called heading using React.createElement. 
This function takes three arguments: the type of element or tag name
to create ('h1' for a heading), an object containing 
properties for the element ({id:'heading'} 
assigns an ID to the element), and the content 
to display inside the element ('Hello World from React').

Next, the code selects a DOM node with the ID root using 
document.getElementById('root'). It then creates a React 
root using ReactDOM.createRoot, which is the modern way 
to initialize a React application in React 18 and above. 
Finally, it renders the heading React element into the 
root DOM node by calling root.render(heading). This 
process replaces the content of the root element in 
the HTML with the newly created React heading, 
displaying "Hello World from React" on the page.

This approach is a fundamental example of how React 
can be used to dynamically generate and manage UI 
elements within a web application, leveraging the 
virtual DOM for efficient updates. 
 */