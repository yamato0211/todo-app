import React, { useState } from "react";
import Title from "./components/Title"
import InputForm from "./components/InputForm"
import TodosList from "./components/TodosList"
import './App.css'

export type Todo = {
  text: string,
  id: number
}

const App: React.FC = () => {
  const [todosValue, setTodosValue] = useState<Todo[]>([])
  return (
    <div className="todo-wrapper">
      <Title />
      <InputForm todosValue={todosValue} setTodosValue={setTodosValue} />
      <TodosList todosValue={todosValue} setTodosValue={setTodosValue} />
    </div>
  )
}

export default App