
export function DirectChild(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.number}</p>
            <p>{props.bool ? "True" : "False"}</p>
        </div>
    )
}