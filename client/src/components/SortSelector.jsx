import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class SortSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Recent',
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(e) {
    const { value } = e.target;
    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="sortSelector">
        <Select
          className="selector"
          value={value}
          inputProps={{
            name: 'sort',
            id: 'sort-select',
          }}
          onChange={this.handleValueChange}
        >
          <MenuItem value="Recent">Récent</MenuItem>
          <MenuItem value="Top">Top</MenuItem>
        </Select>
      </div>
    );
  }
}

export default SortSelector;
