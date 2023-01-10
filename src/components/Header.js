import React from 'react'; 
import Button from './Button'; 

const Header = ({title, onAddForm}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text="Open" color="darkblue" onAddForm={onAddForm} />
        </header>
    )
}

export default Header;