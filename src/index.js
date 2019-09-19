// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./app";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./app";
 
const renderApp = NextApp => {
 render(
 <AppContainer>
 <NextApp />
 </AppContainer>,
 document.getElementById("root")
 );
};
 
renderApp(App);
 
if (module.hot) {
 module.hot.accept("./app", () => {
 const NextApp = require("./app").default;
 renderApp(NextApp);
 });
}