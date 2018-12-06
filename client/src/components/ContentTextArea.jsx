import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class ContentTextArea extends Component {
  render() {
    return (
      <TextField
        id="standard-multiline-static"
        label="Article"
        fullWidth
        multiline
        rows="4"
        defaultValue="Contenu de l'article"
        margin="normal"
        variant="outlined"
      />
    );
  }
}

export default ContentTextArea;
