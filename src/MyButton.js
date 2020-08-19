import React, { Component } from 'react';

var counter = 0;
class MyButton extends Component {
    constructor() {
        super();
        this.state = {
            buttonText: "Click Me"
        };
        this.buttonClick = this.buttonClick.bind(this);
        this.resetMyButton = this.resetMyButton.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    buttonClick() {
        this.setState({
            buttonText: "Thank You!"
        });

    }

    resetMyButton() {
        clearInterval(this.intervalID);
        this.setState({
            buttonText: "Click Me"
        });
        
    };

    countDown(){
        this.setState({
            buttonText: "Resetting in " + counter--
        })
    }

    componentDidUpdate() {
        if (this.state.buttonText === "Thank You!") {
            this.timeoutID = setTimeout(
                this.resetMyButton,
                4000
            );
            counter = 3;
            this.intervalID = setInterval(
                this.countDown,
                1000
            );
        }
    }

    render() {
        return (
            <button onClick={this.buttonClick}>
                {this.state.buttonText}
            </button>
        )
    }
}

export default MyButton;