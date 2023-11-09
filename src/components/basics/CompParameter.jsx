
export function CompParameter(props) {
    const status = props.grade >= 7 ? "Approved!" : "Failed!"
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                <strong>{props.student} </strong>
                got grade
                <strong> {props.grade}</strong> <br></br>
                <strong>{ status }</strong>
            </p>
        </div>
    )
}