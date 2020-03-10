import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    render(){
        return (
        <p className={this.props.data.completed ? "todo completed" : "todo"} onClick={() => this.props.toggle(this.props.data.id) }>{this.props.data.task}</p>
        )
    }
}

export default Todo;