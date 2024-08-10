import React from "react"
import ReactDom from "react-dom/client"

const jsxHeading = <div id="he">
    hey
    {/* <h1>hey this jsx heading</h1> */}
    {/* <h2>
        This is child
    </h2> */}
</div>
console.log(jsxHeading);
ReactDom.createRoot(document.getElementById("root")).render(jsxHeading)