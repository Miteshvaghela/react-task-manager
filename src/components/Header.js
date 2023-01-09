import React from 'react'; 
import Button from './Button';

const Header = ({title, addTask, showTaskForm}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showTaskForm?'red':'darkblue'} text={showTaskForm?'Close':'Open'} addTask={addTask}/>
        </header>
    )
}

export default Header;