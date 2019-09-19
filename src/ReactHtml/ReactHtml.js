import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import ReactHtmlStyled from "./ReactHtmlStyled";
import { Button } from "@hbsis.uikit/react";

class ReactHtml extends Component {
  state = { align: "center", opacity: 0 };

  componentDidMount() {
    this.setState({ opacity: 1 });
  }

  alignLeft = () => {
    this.setState({ align: "flex-start" });
  };

  render() {
    const { align, opacity } = this.state;
    return (
      <Fragment>
        <ReactHtmlStyled align={align} opacity={opacity}>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <Button className="button" width="200px" onClick={this.alignLeft}>
                Align Left
              </Button>
            </div>
          </div>
        </ReactHtmlStyled>
      </Fragment>
    );
  }
}

export default ReactHtml;
