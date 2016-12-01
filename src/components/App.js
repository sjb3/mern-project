'use strict';

import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';

class App extends React.Component{
  state={
    pageHeader: 'Naming Contests',
    contests: []
  }
  componentDidMount(){
    this.setState({
      contests: data.contests
    });
  }
  componentWillUnmount(){

  }
  //everytime use .map u should provide key with .id
  render(){
    return (
      <div className="App">
        <Header message = {this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}
export default App;
