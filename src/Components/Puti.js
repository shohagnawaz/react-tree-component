import React, { Component } from 'react';

class Puti extends Component {
    render () {
        return (
            <div>
                <h1>Md. Shah Nawaz Shohag</h1>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default Puti;