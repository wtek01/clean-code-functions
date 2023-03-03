import React from "react";
import ReactDOM from "react-dom";
import { MyComponent } from "./MyComponenet";
import { MyComponent2 } from "./MyComponent2";

import "./styles.css";

function App() {
  const name = "My Component 1";
  const options = {
    style: { color: "red" },
    className: "toto",
    icon: "icon",
    status: "active"
  };

  return (
    <>
      <MyComponent name={name} options={options} />
      <MyComponent2
        name="My Component 2"
        style={{ color: "blue" }}
        className="my-className"
        icon="icon2"
        status="true"
      />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
