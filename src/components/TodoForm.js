import React from 'react';
import {ButtonToggle, Input} from 'reactstrap';
import './TodoForm.css';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            userInput: "",
            error: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.userInput.trim() !== ""){
            this.setState({error: false});
            this.props.add(this.state.userInput);
            this.setState({userInput: ""})
        } else {
            this.setState({error: true});
        }
       
    }

    handleChange = (e) => {
        this.setState({userInput: e.target.value});
    }

    render(){
        return (
            <div className="add-form">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="add-todo">
                    <Input id="add-todo" name="add-todo" aria-label="add new todo" type="text" placeholder="add todo" value={this.state.userInput} onChange={this.handleChange}/>
                </label>
                <ButtonToggle color="success" type="submit">Add Todo</ButtonToggle>
            </form>
            {this.state.error && <p>Can't add empty tasks!</p>}
                <ButtonToggle color="warning" type="text" onClick={this.props.clear}>Clear Completed</ButtonToggle>
            </div>
        )
    }
}

export default TodoForm;