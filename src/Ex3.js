import React, { Component } from 'react';

class Ex3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {compt: 0};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      compt: state.compt + 1
    }));
    
  }

  render() {
    let compt = this.state.compt;
    let realcompt = this.state.compt;
    if (compt === 0) {
        compt = "Cliquez sur le bouton"
    }
    else if (compt >= 2) {
        
      compt = `Il y a eu ${this.state.compt} Clicks`
    }
    else {
      compt = `Il y a eu ${this.state.compt} Click`
    }
    return (
      <div>
         {compt}
        <div>
          <button onClick={this.handleClick}>
            click me
          </button>
        </div>
      </div>
    );
  }
}

export default Ex3;