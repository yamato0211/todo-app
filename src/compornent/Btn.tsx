import React from "react"

type Props = {
    btnValue: string,
    id: string
}

const Btn: React.FC<Props> = (props) => {
    return (
        <div className="btn-wrapper">
            <button id={props.id}>{props.btnValue}</button>
        </div>
    )
}
export default Btn