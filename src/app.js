import React, { Fragment } from "react";
import { ThemeProvider, DefaultTheme, GlobalStyle } from "@hbsis.uikit/react";
import "@hbsis.uikit/react/dist/uikit.css";
import Home from "./Componentes/Home"
import ReactHtml from "./ReactHtml/ReactHtml";


function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Fragment>
        <GlobalStyle />
        <Home />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
