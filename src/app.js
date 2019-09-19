import React, { Fragment } from "react";
import { ThemeProvider, DefaultTheme, GlobalStyle } from "@hbsis.uikit/react";
import "@hbsis.uikit/react/dist/uikit.css";

import ReactHtml from "./ReactHtml/ReactHtml";
import DataTableUsage from "./DataTable/DataTable";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Fragment>
        <GlobalStyle />

        <ReactHtml />
        <DataTableUsage />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
