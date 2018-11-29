import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ShareIcon from '@material-ui/icons/Share';

class FakeNews extends Component {
  render() {
    return (
      <Card className="fakeNewsCard">
        <div className="fakeNewsCardContent">
          <CardContent>
            <h1>Titre</h1>
            <p>Article Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor natus officiis velit dolore totam tempora culpa quae officia veniam ea laboriosam, temporibus autem, laborum aperiam odio eligendi, alias ex animi?</p>
          </CardContent>
        </div>
        <div className="fakeNewsCardMedia">
          <CardMedia
            className="cardImage"
            image="/assets/paella.jpg"
            title="Paella dish"
          />
          <div className="fakeNewsCounters">
            <p><RemoveRedEyeIcon /> 192</p>
            <p><ShareIcon /> 192 </p>
          </div>
        </div>
      </Card>
    );
  }
}

export default FakeNews;
