import React, {Component} from 'react';

class ChangeColorButton extends Component{

    constructor(props){
        super();

    }
    render(){
        return(
            <button onClick={this.props.clickHandler}>
                I don't like {this.props.currentColor}
            </button>
        );
    }
}

export default ChangeColorButton;