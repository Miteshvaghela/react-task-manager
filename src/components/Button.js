import React from 'react'; 

const Button = ({title, color, showAddForm}) => {
    return (
        <button style={{backgroundColor:color}} className="btn" onClick={showAddForm}>{title}</button>
    )
}

export default Button;