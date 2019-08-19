import React from "react";
import ReactDOM from "react-dom";
import Link from "./atom/Link";
import CheckBox from "./atom/Checkbox";
const Application = () => {
  return <h1>Hello world!</h1>;
};
ReactDOM.render(
  <div>
    <Application />
    <Link>リンクだよ</Link>
    <CheckBox />
  </div>,
  document.getElementById("app")
);
