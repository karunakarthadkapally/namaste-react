import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="title">Namaste React Using JSX with component composition</h1>
);

// component composition  ==> composing two component in one another is called component composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional component.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
