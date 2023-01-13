import React from 'react'; 
import Button from './Button'; 

const Header = ({title, showForm, showAddTaskForm}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text={showForm?'Close':'Open'} color={showForm?'red':'darkblue'} showAddTaskForm={showAddTaskForm} />
        </header>
    )
}

export default Header;