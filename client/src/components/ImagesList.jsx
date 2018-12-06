import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class ImagesList extends Component {
  render() {
    return (
      <div className="imagesList">
        <GridList cols={4} className="gridImages">
          <GridListTile key="paella1.jpg" className="gridImage">
            <img src="/assets/paella.jpg" alt="First" />
          </GridListTile>

          <GridListTile key="paella2.jpg" className="gridImage">
            <img src="/assets/paella.jpg" alt="First" />
          </GridListTile>

          <GridListTile key="paella3.jpg" className="gridImage">
            <img src="/assets/paella.jpg" alt="First" />
          </GridListTile>

          <GridListTile key="paella4.jpg" className="gridImage">
            <img src="/assets/paella.jpg" alt="First" />
          </GridListTile>
        </GridList>
      </div>
    );
  }
}

export default ImagesList;
