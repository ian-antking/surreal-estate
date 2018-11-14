import React from 'react';
import NavBar from './nav-bar';
import { Switch, Route } from 'react-router-dom';
import Properties from './properties';
import AddProperties from './add-properties';
import '../styles/app.scss';
import '../styles/nav-bar.scss';
import '../styles/alert.scss';

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
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/addProperties" component={AddProperties} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
