import React, { Component } from 'react';

import FakeNews from './FakeNews';

class FakeNewsList extends Component {
  render() {
    return (
      <div>
        <FakeNews />
        <FakeNews />
        <FakeNews />
        <FakeNews />
        <FakeNews />
      </div>
    );
  }
}

export default FakeNewsList;
