const root = ReactDOM.createRoot(document.getElementById("root"));

const header = React.createElement(
  "h1",
  { id: "title" },
  "Hello World from React !",
);
console.log("It is a react element: ", header);

const intro = React.createElement("p", {}, "My name is Abhay Singh Jadaun !");

const parent = React.createElement("div", { id: "root-child" }, [
  header,
  intro,
]);

// ReactElement (object) ==> HTMLElement
root.render(parent);

// Yes there is pain in this architecture, that's why JSX exists !
