import React from "react";
import { useState } from 'react'
import { Todo } from '../App'

type Props = {
    todosValue: Todo[]
    setTodosValue: Dispatch<Todo[]>
}

type Dispatch<A> = (value: A) => void;

const InputForm: React.FC<Props> = ({ todosValue, setTodosValue }) => {
    const [inputValue, setInputValue] = useState<string>("")
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setTodosValue([...todosValue, {
            text: inputValue,
            id: todosValue.length
        }])
        setInputValue('')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        console.log(inputValue)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputValue} />
            <button>+</button>
        </form>
    )
}

export default InputForm