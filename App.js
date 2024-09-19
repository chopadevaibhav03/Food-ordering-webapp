
const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement( "div",{id:"child"}, [
            React.createElement("h1",{},"I'm Vaibhav!"),
            React.createElement("h2",{},"I'm h2 tag"),
        ]),
        React.createElement( "div",{id:"child2"}, [
            React.createElement("h1",{},"I'm Vaibhav!"),
            React.createElement("h2",{},"I'm h2 tag"),
        ])
    ]
    
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// const heading = React.createElement(
//     "h1", {id: "heading", xyz : "abc"},"Wellcome to react ! keep learning");

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);