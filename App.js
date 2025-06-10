
  const parent =React.createElement(
    "div",{id:"parent"},
   [ React.createElement(
        "div",
        {id:"child"},
       [ React.createElement("h1",{},"Hero"),
        React.createElement("h2",{},"Hero"),
    ]), React.createElement(
        "div",
        {id:"child"},
       [ React.createElement("h1",{},"Hero"),
        React.createElement("h2",{},"Hero"),
    ]),React.createElement(
        "div",
        {id:"child"},
       [ React.createElement("h1",{},"Hero"),
        React.createElement("h2",{},"baba"),
    ]),
   ]);
  console.log(parent);
  
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);

