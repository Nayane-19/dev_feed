import "./Button.scss"

export function Button({variant, children, className}) {
    return (
        <button className={`Button ${className} ${variant === "transparent" ? "transparent" : "full"}`}>
            {children}
        </button>
    )
}   