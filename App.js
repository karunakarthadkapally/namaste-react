import React from "react";
import ReactDOM from "react-dom/client";

//React element
const header = (
  <h1 className="header">Namaste React Using JSX with multiple line</h1>
);

//React component 2 types
// 1. Class based component  ==> OLD way of writing components
// 2. Functional component  ==> NEW way of writing components

// functional based component is a javascript function which return JSX piece of code.

// components in React, first letter is Capital letter.

// React Functional component.
const HeadingComponent = () => {
  return <h1>Namaste React using Functional component.</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// we should use < component />  while render the react components
root.render(<HeadingComponent />);
