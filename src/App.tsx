import React from "react";
import Btn from './compornent/Btn'
import Todo from "./compornent/Todo"
import './App.css'

const App: React.FC = () => {
  const array = ["宿題をする", "ご飯を作る", "洗濯をする"]
  return (
    <div className="todo-wrapper">
      <h1>ToDo App</h1>
      <div className="addTodos">
        <input type="text" placeholder="タスクを入力してください" id="setTodoValue" />
        <Btn btnValue="add" id="Btn" />
      </div>
      <div className="todos-group">
        <ul className="todos">
          {array.map((index) => {
            return (
              <li className="todos-item" key={index}>
                <Todo todoValue={index} />
                <Btn id="edit" btnValue="編集" />
                <Btn id="destroy" btnValue="完了" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App