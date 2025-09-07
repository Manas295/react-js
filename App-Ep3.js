import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste react 🚀"
// );

//USING JSX
//JSX is a syntactic sugar over React.createElement()
//Babel converts JSX to React.createElement() calls behind the scenes
//Also if jsx is written in multiple lines then it should be wrapped in ( ... )
/*
    (<h1 id="jsx-heading" className="head">
        Hello from JSX
    </h1>)
*/
//JSX is not HTML. It is similar to HTML but not same as HTML
//In JSX class is written as className because class is reserved keyword in JS
//JSX=> Babels transforms it to React.createElement() ==> ReactElement - JS Object => HTMLElement (DOM) - innerHTML
//ReactElement is a lightweight description of what to be rendered on the screen
//ReactDOM takes this ReactElement and creates actual DOM and puts it on the screen
//ReactDOM.createRoot() is new way of rendering in React 18 and above
//In React 18 and above we use createRoot() instead of ReactDOM.render()
const jsxHeading = (
  <h1 id="jsx-heading" className="head">
    Hello from JSX Heading
  </h1>
);

//React Component
/*
Class Based Component -- OLD
Functional Component -- NEW
*/

//React Functional Component -- Is a normal javascript function which returns React Element (JSX)
//Component name should start with capital letter otherwise it will be treated as HTML tag
//Functional component is also called as Stateless component or Dumb component because it does not have state
const HeadingComponent1 = () => {
  return <h1>Hello from Functional Component</h1>;
};
const HeadingComponent2 = () => (
  <h1 className="heading">Hello from Functional Component 2</h1>
);

const Title = () => (
  <h1 className="head" tabIndex={"5"}>
    Hello from JSX
  </h1>
);
//NEsted example if we want to wrap it inside div element
const HeadingComponent3 = () => (
  <div id="container">
    <Title /> {/* Using Title component inside HeadingComponent3 */}
    <Title></Title>
    {Title()}
    {/* Calling Title as a function as at the end everything is javascript*/}
    <h2>{100 + 200}</h2> {/* JS expression inside JSX */}
    <h3>{console.log("Console Log inside jsx component")}</h3>
    {jsxHeading} {/* Using jsxHeading inside HeadingComponent3 */}
    <h1 className="heading">Hello from Functional Component 3</h1>
  </div>
);
const createRoot = ReactDOM.createRoot(document.getElementById("root"));
//createRoot.render(heading);
//createRoot.render(jsxHeading1);

//To render react functional component
//We need to use JSX syntax <ComponentName />
createRoot.render(<HeadingComponent3 />);
