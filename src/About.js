import React, { Component } from 'react'

export class About extends Component {
    state={'fname':'anuj'};
    handleChange= (event)=>
     {
        this.setState({fname: event.target.value});
      }
    render() {
        return (
            <div>
                <h1>About us</h1>
            Name : <input type="text" value={this.state.fname} onChange={this.handleChange}/>{this.state.fname}
            </div>
        )
    }
}

export default About
