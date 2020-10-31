import React, { Component } from 'react';

export default class CalculationLogs extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         logs: []
    //     }
    // }

    render() {
        return(
            <ul id="calculationLog" className="list-group">
                {this.props.logs.map(log => 
                    <li class="list-group-item">{log}</li>
                    )}
            </ul>
        )
    }
}
