/**
 *<div id="parent">
 *    <div id="child">
 *       <h1> Heading 1</h1>
 *    </div>
 *</div>
 *
 */
const parent =React.createElement(
    "div",{id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {},
            "Heading 1"
        )
    )
);


const header = React.createElement(
    "h1",
    {id:"header", xyz:"abc"},
    "Hello World using React!"
);

console.log(header);  //Object


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
