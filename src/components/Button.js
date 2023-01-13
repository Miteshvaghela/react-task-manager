import React from 'react' 

const Button = ({text, color, showAddTaskForm}) => {
    return (
        <button className="btn" style={{backgroundColor:color}} onClick={showAddTaskForm}>
            {text}
        </button>
    )
}

export default Button;