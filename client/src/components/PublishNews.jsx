import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import Header from './Header';
import TitleText from './TitleText';
import ContentTextArea from './ContentTextArea';
import Tags from './Tags';
import ImagesList from './ImagesList';

class PublishingNews extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Header />
        <TitleText />
        <Tags />
        <ImagesList />
        <ContentTextArea />
        <div className="flexiflex">
          <Button variant="contained" color="primary" className="flexiflex">
            Publish
          </Button>
        </div>
      </div>
    );
  }
}

export default PublishingNews;
