import React from 'react'; 

const Button = ({color, text, onAddForm}) => {
    return (
        <button className="btn" onClick={onAddForm} style={{backgroundColor:color}}>{text}</button>
    )
}

export default Button;