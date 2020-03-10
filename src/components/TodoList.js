import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render(){
        return (
            <div>
                {this.props.todos
                    .filter(
                        todo => todo.task.toLowerCase().includes(this.props.query.toLowerCase()))
                    .map(todo => <Todo key={todo.id} toggle={this.props.toggle} data={todo}/>)
                    .reverse()}               
            </div>
        )
    }
}

export default TodoList;
