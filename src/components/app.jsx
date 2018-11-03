import React from 'react';
import NavBar from './nav-bar';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch, Route } from 'react-router';
import Properties from './properties';
import AddProperties from './add-properties';
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
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/addProperties" component={AddProperties} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
