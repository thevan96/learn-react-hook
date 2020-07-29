import React, { useState, useEffect } from "react";
import "./App.scss";

// import TodoList from "./components/TodoList/TodoList";
// import TodoForm from "./components/TodoForm/TodoForm";

import PostList from "./components/PostList/PostList";
import Pagination from "./components/Pagination/Pagination";
import { objectQueryStringParameter } from "./Utils";

const App = () => {
  // const [todoList, setTodoList] = useState(() =>
  //   JSON.parse(localStorage.getItem("newTodos") ?? "[]")
  // );

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 4
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const queryString = objectQueryStringParameter(pagination);
        console.log("queryString", queryString);
        const url = `http://localhost:3001/posts?${queryString}`;
        const response = await fetch(url);
        const posts = await response.json();
        setPostList(posts);
      } catch (e) {
        console.log("error", e);
      }
    };
    fetchPosts();
  }, [pagination]);

  const handleOnChangPage = newPage => {
    setPagination({
      ...pagination,
      _page: newPage
    });
  };

  // const handleOnClick = todo => {
  //   const indexTodo = todoList.findIndex(e => e.id === todo.id);
  //   if (indexTodo >= 0) {
  //     const todos = [...todoList];
  //     todos.splice(indexTodo, 1);
  //     setTodoList(todos);
  //     localStorage.setItem("newTodos", JSON.stringify(todos));
  //   }
  // };

  // const handleOnSubmit = value => {
  //   const newTodos = [...todoList, { id: uuid(), name: value }];
  //   setTodoList(newTodos);
  //   localStorage.setItem("newTodos", JSON.stringify(newTodos));
  // };

  return (
    <div className="app">
      <h1>Learn react hook</h1>
      {/* <TodoForm onSubmit={handleOnSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleOnClick} /> */}
      <PostList postList={postList} />
      <Pagination pagination={pagination} onChangePage={handleOnChangPage} />
    </div>
  );
};

export default App;
