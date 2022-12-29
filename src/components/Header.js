import React from 'react'; 
import Button from './Button';

const Header = ({title, showAddForm, showForm}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button title={showForm?'Close':'Show'} color={showForm?'red':'green'} showAddForm={showAddForm}/>
        </header>
    )
}

export default Header;