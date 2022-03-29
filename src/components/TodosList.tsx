import React from "react";
import { Todo } from "../App"

type Props = {
    todosValue: Todo[]
    setTodosValue: Dispatch<Todo[]>
}

type Dispatch<A> = (value: A) => void;


const TodosList: React.FC<Props> = ({ todosValue, setTodosValue }) => {
    const hancleClick = (index: number) => {
        const newTodos = [...todosValue]
        newTodos.splice(index, 1)
        setTodosValue(newTodos)
    }
    return (
        <div className="todos-wrapper">
            {todosValue.map((todo, index) => {
                return (
                    <div className="todo" key={index}>
                        <div className="todos-item">
                            <p className="todo-text">{todo.text}</p>
                            <button className="task-btn" onClick={() => hancleClick(index)}>完了</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodosList