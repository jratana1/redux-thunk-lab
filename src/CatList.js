// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

  renderCatList = () => this.props.catPics.map((catPic,id) => <div key={id}><img src={catPic.url} /></div>)

  render() {
    return(
      <div>
        {this.renderCatList()}
      </div>
    );
  }
};

export default (CatList);