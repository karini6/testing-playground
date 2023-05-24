
type ButtonProps = {
    buttonText: string;
    handleClick: (e: any) => void
}

function Button({buttonText, handleClick}: ButtonProps) {
    return (
        <button onClick={handleClick}>{buttonText}</button>
    )
}

export default Button