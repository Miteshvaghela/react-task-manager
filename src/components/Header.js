import React from 'react'; 
import Button from './Button'; 

const Header = ({title, onAddForm, showAddForm}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text={showAddForm?'Close':'Open'} color={showAddForm?'red':'darkblue'} onAddForm={onAddForm} />
        </header>
    )
}

export default Header;