import React, { Component } from 'react';
import ChangeColorButton from './ChangeColorButton';

class ColoredBlock extends Component {
    constructor(props) {
        super();
        this.state = {
            backColor: "red"
        };
        this.changeDivColor = this.changeDivColor.bind(this);
    }

    changeDivColor() {
        //Do this as setState function that takes state argument could be asynchronous for performance reasons
        this.setState((prevState, props) => {
            let newColor = prevState.backColor === "red" ? "blue" : "red";
            return {
                backColor: newColor
            }
        });
    }
    changeDivColorSimple(){
        let newColor = this.state.backColor === "red"? "blue" : "red";
        this.setState(
            {
                backColor: newColor
            }
        );
    }
    render() {
        return (

            <div style={{ height: "200px", width: "200px", backgroundColor: this.state.backColor }}>
                <ChangeColorButton clickHandler={this.changeDivColor} currentColor={this.state.backColor} />
            </div>
        );

    }
}

export default ColoredBlock;