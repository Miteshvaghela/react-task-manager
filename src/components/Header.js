import Button from './Button'; 

const Header = ({title, showForm, showBtnAction}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text={showForm?'Close':'Show'} color={showForm?'red':'darkblue'} showBtnAction={showBtnAction}/>
        </header>
    )
}
export default Header;