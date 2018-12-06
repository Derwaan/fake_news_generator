import React, { Component } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

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
          <Link to="/new">
            <Fab color="primary" size="large">
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
