import React, { Component } from 'react';

class Ex2 extends React.Component {
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
    if (compt >= 2) {
      compt = "Clicks"
    }
    else {
      compt = "Click"
    }
    return (
      <div>
        Il y a eu {this.state.compt} {compt}
        <div>
          <button onClick={this.handleClick}>
            click me
          </button>
        </div>
      </div>
    );
  }
}

export default Ex2;