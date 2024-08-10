


const heading = React.createElement("div", {}, [React.createElement("h1", { id: "hey" }, "This is h1 tag")])
const root = ReactDOM.createRoot(document.getElementById("root"));

/* const Combined = () => {
    return (
        <div>
            {heading}
            <Headings />
        </div>
    );
};
 */
const jsxHeading = <h1>This is</h1>
console.log(h);
root.render(heading);
// console.log(ReactDOM);