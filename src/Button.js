import "./Button.css"
export const Button = ({onClick, children}) => {
    return <button className="primary-button" onClick={onClick}>{children}</button>
}
