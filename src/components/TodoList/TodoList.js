import React from "react";
import PropTypes from "prop-types";

import "./TodoList.style.scss";

const TodoList = props => {
  const { todos, onTodoClick } = props;

  const handleTodoClick = todo => () => {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  };

  return (
    <div className="todo-list">
      <h3 style={{
        textAlign: 'center',
      }}>Todo list</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={handleTodoClick(todo)}>
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null
};

export default TodoList;
