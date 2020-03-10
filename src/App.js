import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import SearchForm from './components/SearchForm';
import {Jumbotron} from 'reactstrap';

class App extends React.Component {
  constructor(){
    super();
    this.state = {  
      todos: [],
      query: ""
    } //end of state
  } // close constructor

  handleSearch = (e) => {
    this.setState({query: e.target.value});
  }

  toggleCompleted = (clickedTodo) => {
    let toggled = this.state.todos.map(each => {
      if(each.id === clickedTodo){
        return {...each, completed: !each.completed};
      } else {
        return each;
      }
    });
    window.localStorage.setItem('myList', JSON.stringify(toggled) );
    this.setState({todos: [...toggled] })
  }

  addTodo = (newTask) => {
    let newTodo = {
      task: newTask,
      id: Date.now(),
      completed: false
    }

    let added = [...this.state.todos, newTodo];
    window.localStorage.setItem('myList', JSON.stringify(added));
    this.setState({todos: added});
  }

  clearCompleted = () => {
    let cleared = this.state.todos.filter(each => !each.completed);
    window.localStorage.setItem('myList', JSON.stringify(cleared));
    this.setState({todos: [...cleared]})
  }

  componentDidMount(){
    const list = window.localStorage.getItem('myList');
    return list ? this.setState({todos: JSON.parse(list)}) : this.setState({todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ]})
  }

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <Jumbotron>
  
          <h1 className="display-3">Welcome to your Todo App!</h1>
   
        </Jumbotron>

        <SearchForm handleSearch={this.handleSearch}/>

        <TodoList query={this.state.query} toggle={this.toggleCompleted} todos={this.state.todos}/>

        <TodoForm add={this.addTodo} clear={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
