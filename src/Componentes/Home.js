import React from 'react';
import "@hbsis.uikit/react/dist/uikit.css";
import HomeStyled from "./HomeStyled";
import Content from "./Content"


// import AppStyled from "./AppStyled";
// import Dash from './components/Dash';
// import Nav from './components/Nav';
// import Header from './components/Header';
// import Menu from './components/Menu';
// import Panel from './components/Panel';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HomeStyled>
        <Content />
      </HomeStyled>
    );
  }
}

export default Home;
