const Button = ({ func, text }) => {
    return <button onClick={func} className="cursor-pointer">
        {text}
    </button>
}

export default Button