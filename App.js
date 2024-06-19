import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="title">
    Namaste React Using JSX with React Component inside another component
  </h1>
);

// putting React components in side another component 3 different ways we can call another component.
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional component.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
