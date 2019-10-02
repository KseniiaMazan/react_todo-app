import React from 'react';
import { NewTodoProps } from '../PropTypes/PropTypes';

const _ = require('lodash');

class NewTodo extends React.Component {
  state = {
    titleOfTodo: '',
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      titleOfTodo: target.value,
    });
  }

  handleInputTodo = (event) => {
    event.preventDefault();
    const { addNewTodo } = this.props;
    const { titleOfTodo } = this.state;

    addNewTodo({
      title: titleOfTodo,
      id: _.uniqueId('id_'),
      completed: false,
    });

    this.setState({
      titleOfTodo: '',
    });
  }

  render() {
    const { titleOfTodo } = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.handleInputTodo}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.handleChangeInput}
            value={titleOfTodo}
          />
        </form>
      </header>
    );
  }
}

NewTodo.propTypes = NewTodoProps;

export default NewTodo;