/**
 *<div id="parent">
 *    <div id="child1">
 *       <h1> Heading 1</h1>
 *       <h2> Heading 2</h2>
 *    </div>
 *    <div id="chil2">
 *       <h1> Heading 1</h1>
 *       <h2> Heading 2</h2>
 *    </div>
 *</div>
 *
 */
const parent =React.createElement("div", {id:"parent"},[   
        React.createElement("div", {id:"child1"},[
                React.createElement("h1", {}, "Heading 1"),
                React.createElement("h1", {}, "Heading 2")
            ]),
        React.createElement("div",{id:"child2"},[
                React.createElement("h1", {}, "Heading 1"),
                React.createElement("h1", {}, "Heading 2")
            ])
    ]);


const header = React.createElement(
    "h1",
    {id:"header", xyz:"abc"},
    "Hello World using React!"
);

console.log(header);  //Object


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
