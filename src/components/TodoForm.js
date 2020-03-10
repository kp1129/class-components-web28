import React from 'react';
import {ButtonToggle, Input} from 'reactstrap';
import './TodoForm.css';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            userInput: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state.userInput);
        this.setState({userInput: ""})
    }

    handleChange = (e) => {
        this.setState({userInput: e.target.value});
    }

    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="add-todo">
                    <Input id="add-todo" name="add-todo" type="text" placeholder="add todo" value={this.state.userInput} onChange={this.handleChange}/>
                </label>
                <ButtonToggle color="success" type="submit">Add Todo</ButtonToggle>
            </form>
                <ButtonToggle color="warning" type="text" onClick={this.props.clear}>Clear Completed</ButtonToggle>
            </div>
        )
    }
}

export default TodoForm;