import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import '../index.css';

class TitleText extends Component {
  render() {
    return (
      <div>
        <TextField
          id="titleText"
          label="Titre"
          placeholder="Écrivez un tritre insolite ici"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    );
  }
}

export default TitleText;
