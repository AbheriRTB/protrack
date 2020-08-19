import React, {Component} from 'react';


class Clock extends Component{
    constructor(prop){
        super(prop);
        this.state = 
        {
            time: new Date().toLocaleString()
        };
        this.tick = this.tick.bind(this);
    }
    componentDidMount(){
        this.intervalID=setInterval(
            this.tick,
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    tick(){
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    render(){
        return(
            <p>
                Current time is {this.state.time}
            </p>
        )

    }
}

export default Clock;