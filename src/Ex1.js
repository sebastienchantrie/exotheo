import React, { Component } from 'react';

class Ex1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {compt: 0};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        compt:  state.compt + 1
      }));
    }
  
    render() {
      return (
        <div>
          Nombre de click = {this.state.compt} 
          <div>
            <button onClick={this.handleClick}>
              click me
            </button>
          </div>
        </div>
      );
    }
  }

export default Ex1;
