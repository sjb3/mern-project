'use strict';

import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };
  componentDidMount() {

  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList contests={this.stats.contests} />
      </div>
    );
  }
}

export default App;
