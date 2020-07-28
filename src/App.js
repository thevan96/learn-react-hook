import React, { useState, useEffect } from "react";
import "./App.scss";

import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import PostList from "./components/PostList/PostList";

const uuid = () => {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
};

const App = () => {
  const [todoList, setTodoList] = useState(() =>
    JSON.parse(localStorage.getItem("newTodos") ?? "[]")
  );

  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = "http://localhost:3001/posts?_page=3&_limit=3";
        const response = await fetch(url);
        const posts = await response.json();
        setPostList(posts);
      } catch (e) {
        console.log("error", e);
      }
    };
    fetchPosts();
  }, []);

  const handleOnClick = todo => {
    const indexTodo = todoList.findIndex(e => e.id === todo.id);
    if (indexTodo >= 0) {
      const todos = [...todoList];
      todos.splice(indexTodo, 1);
      setTodoList(todos);
      localStorage.setItem("newTodos", JSON.stringify(todos));
    }
  };

  const handleOnSubmit = value => {
    const newTodos = [...todoList, { id: uuid(), name: value }];
    setTodoList(newTodos);
    localStorage.setItem("newTodos", JSON.stringify(newTodos));
  };

  return (
    <div className="app">
      <h1>Learn react hook</h1>
      <TodoForm onSubmit={handleOnSubmit} />
      <TodoList todos={todoList} onTodoClick={handleOnClick} />
      <PostList postList={postList} />
    </div>
  );
};

export default App;
