import React from "react";
import "./Pages.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function Yap() {
  return (
    <div className="background">
      <div className="Page_header">Yapılacaklar Listesi</div>
      <i class="fas fa-cloud"></i>
      <div className="App">
        <AddTodo />
        <div className="small_header">Yapılacaklar:</div>
        <TodoList />
      </div>
    </div>
  );
}

export default Yap;
