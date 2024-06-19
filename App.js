import React from "react";
import ReactDOM from "react-dom/client";

//React element
const header = (
  <h1 className="header">Namaste React Using JSX with multiple line</h1>
);

// React Functional component.
const HeadingComponent1 = () => {
  return <h1>Namaste React using Functional component.</h1>;
};

// In arrow functions in javascript, we can skip the return key if we want to return only one line. like below
// if we want to return more line we can use () as shown in below.

const HeadingComponent2 = () => (
  <h1>Namaste React using Functional component.</h1>
);

// JSX can be nested
const HeadingComponent = () => (
  <div id="container">
    <h1 className="header">Namaste React using Functional component.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// we should use < component />  while render the react components
root.render(<HeadingComponent />);
