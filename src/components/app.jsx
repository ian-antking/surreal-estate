import React from 'react';
import NavBar from './nav-bar';
import '../styles/app.scss';
import '../styles/nav-bar.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default App;
