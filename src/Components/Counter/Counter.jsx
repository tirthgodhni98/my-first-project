import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super()
        this.state = {
            name: props.name,
            count: 0
        }
        this.addition = this.addition.bind(this);
        this.subsctract = this.subsctract.bind(this);
         
    }
    subsctract(){
        this.setState({count: this.state.count - 1, name: "vainik"})
    }
    addition(){
        this.setState({count : this.state.count + 1, name: "tirth"})
    }  
    
    
    render() {
        
    console.log();
        return (
            <div>
                {this.state.name}
                <button onClick={this.addition}>+</button>
                {this.state.count}
                <button onClick={this.subsctract}>-</button>
            </div>
        );
    }
}

export default Counter;