import React from "react";
import ReactDOM from "react-dom/client";

//React element
const header = (
  <h1 className="header">Namaste React Using JSX with multiple line</h1>
);

// if we add function to React element for te above it can be React component.

const Title = () => (
  <h1 className="title">Namaste React Using JSX with multiple line</h1>
);

// JSX can be nested
const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Namaste React using Functional component.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// we should use < component />  while render the react components but for REact element we can us directly
//root.render(header);  //for React element
root.render(<HeadingComponent />); // for functional component
