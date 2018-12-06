import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

class Tags extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteChip = this.handleDeleteChip.bind(this);
  }

  handleDeleteChip() {
    console.log('Do nothing');
  }

  render() {
    return (
      <div>
        <div className="tag">
          <Chip label="Basic Chip" onDelete={this.handleDeleteChip} />
        </div>
        <div className="tag">
          <Chip label="Basic Chip" onDelete={this.handleDeleteChip} />
        </div>
        <div className="tag">
          <Chip label="Basic Chip" onDelete={this.handleDeleteChip} />
        </div>
      </div>
    );
  }
}

export default Tags;
