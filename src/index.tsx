import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

function renderApp() {
  ReactDOM.render(<App />, document.getElementById("app"));
}

renderApp();

if (module.hot) {
  module.hot.accept();
}
