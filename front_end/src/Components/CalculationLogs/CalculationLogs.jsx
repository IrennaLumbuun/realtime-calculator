import React, { Component } from 'react';

export default class CalculationLogs extends Component {
    render() {
        if (this.props.logs.length === 0){
            return (
                <p>Uh, very empty. Try the calculator!</p>
            )
        }
        return(
            <ul id="calculationLog" className="list-group">
                {this.props.logs.reverse().map(log => 
                    <li class="list-group-item">{log}</li>
                    )}
            </ul>
        )
    }
}
