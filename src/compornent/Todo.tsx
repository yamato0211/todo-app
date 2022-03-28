import React from "react";


type Props = {
    todoValue: string
}

const Todo: React.FC<Props> = (props) => {
    return (
        <div>
            <p>{props.todoValue}</p>
        </div>
    )
}

export default Todo