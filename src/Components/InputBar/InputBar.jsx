import React, { Component } from 'react';
import './InputBar.css'

export default class InputBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            textInput:'',
            operators: [],
            numbers:[],
            errorMessage:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({textInput: event.target.value});
      }

    calculate = () => {
        // step 0: set error message back to ''
        this.setState({errorMessage: ""});
        // step 1: parse index of every operators
        let operators = [];
        for (let i = 0; i < this.state.textInput.length; i++){
            let c = this.state.textInput.charAt(i)
            if (c >= 'A' && c <= 'z'){
                this.setState({errorMessage: "ERROR: Cannot process non-numeric characters"});
                return;
            }
            else if(!((c >= '0' && c <= '9') || c === ' '))
                operators.push(i) // push location of operator
        }

        // if no operators were inputted
        if (operators.length === 0){
            this.setState({errorMessage: "ERROR: No operators were specified"});
            return;
        }

        // step 2: do calculations accordingly
        let current_result = parseInt(this.state.textInput.substring(0, operators[0]))
        for (let i = 0; i< operators.length; i++){
            let index_operator = operators[i]
            let end_index = (i === operators.length - 1 ? this.state.textInput.length : operators[i + 1])
            let next_num = parseInt(this.state.textInput.substring(operators[i] + 1, end_index))

            // check operator
            if (this.state.textInput[index_operator] === '+')
                current_result += next_num
            else if (this.state.textInput[index_operator] === '-')
                current_result -= next_num
            else if (this.state.textInput[index_operator] === '*')
                current_result *= next_num
            else if (this.state.textInput[index_operator] === '/')
                current_result /= next_num
            else {
                this.setState({errorMessage: "ERROR: Unknown operator"});
                return;
            }
        }
        let result_string = this.state.textInput.concat(" = " + current_result)
        this.setState({textInput:result_string});
        
        // step 3: notify server
        this.props.socket.emit('newCalculation', result_string);
    }

    render() {
        return(
            <div id="inputBar">
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="calculationInput" value={this.state.textInput} onChange={this.handleChange} placeholder="1 + 1"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" onClick={() => this.calculate()}>Calculate</button>
                </div>
            </div>
            <p className="text-danger">{this.state.errorMessage}</p>
            </div>
        )
    }
}
