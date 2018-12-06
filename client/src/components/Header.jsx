import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../index.css';

class Header extends Component {
  render() {
    return (
      <Link to="/">
        <div className="flexiflex">
          <h1>
            <span className="h1Fake">Fake</span> <span className="h1News">News</span> <span className="h1Generator">Generator</span>
          </h1>
        </div>
      </Link>
    );
  }
}

export default Header;
