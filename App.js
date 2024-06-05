
/*<div id = "parent">
        <div id = "child">
             <h1>This is heading 1<h1/>
             <h2>This is heading 2</h2>
        </div>
   </div>
*/


const parent = React.createElement("div",
  { id: "parent" },
  React.createElement("div",
  { id: "child" },
  [React.createElement("h1", {}, " This is headign 1"), React.createElement("h2", {}, "This is heading 2")] ));
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);