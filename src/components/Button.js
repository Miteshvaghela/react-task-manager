const Button = ({text, color, showBtnAction}) => {
    return (
        <button className="btn" style={{backgroundColor:color}} onClick={showBtnAction}>
            {text}
        </button>
    )
}

export default Button;