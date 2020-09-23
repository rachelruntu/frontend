import React, {Component} from 'react';


class Button extends Component {
    // state = {
    render() {
        return (
        <button className={this.props.classname} onClick={this.props.funcpencet}>
        	{this.props.children}
        </button>    
      );
    }
  }

export default Button