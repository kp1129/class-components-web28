import React from 'react';

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
                    <input id="add-todo" name="add-todo" type="text" placeholder="add todo" value={this.state.userInput} onChange={this.handleChange}/>
                </label>
                <button type="submit">Add Todo</button>
            </form>
                <button type="text" onClick={this.props.clear}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;