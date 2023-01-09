import React from 'react'; 

const Button = ({addTask, color, text }) => {
    return (
        <button className="btn" onClick={addTask} style={{backgroundColor:color}}>
            {text}
        </button>
    )
}

export default Button;