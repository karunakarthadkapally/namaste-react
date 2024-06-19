import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element : </span>;

// React element inside element
const title = (
  <h1 className="title">
    {elem}
    Namaste React Using JSX with React element inside component
  </h1>
);

// we can use component also inside element by using {}

// putting React element in side component using curlie brackets
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional component.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
