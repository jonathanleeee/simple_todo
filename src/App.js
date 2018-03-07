import React, { Component } from 'react';
import './App.css';

const TodoItem = ({text}) => ( // also can put props and props.text
  <li>{text}</li>
); // In Arrow functions () => () return right away

// object desturing 
/*
var props = {
  text: 'dick'
};

var {text} = props;

console.log(text);

var f = (n) => (console.log(n));

f(text);
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [], // store an arrya of todos
      newTodo: '' // store the value in input
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }
  render() {
    const {newTodo} = this.state; // object destructuring again, newTodo equal this.state.newTodo
    const todos = this.state.todos.map((t, i) => (
      <TodoItem key={i} text={t} /> // passing the props
    ));
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}
        >
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newTodo"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => this.setState({[e.target.name]: e.target.value})} //arrow function on one line, must omit the return keyword as well as the curly braces
                                          // es6 computed property Names
          />
          <button
            type="submit"
            className="save-button"
          >SAVE</button>
        </form>
        <div className="todo-content">
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;















