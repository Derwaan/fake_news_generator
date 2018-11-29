import React, { Component } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Header from './Header';
import SortSelector from './SortSelector';
import FakeNewsList from './FakeNewsList';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Header />
        <SortSelector />
        <FakeNewsList />
        <div className="fab">
          <Fab color="primary" size="large">
            <AddIcon />
          </Fab>
        </div>
      </div>
    );
  }
}

export default Home;
