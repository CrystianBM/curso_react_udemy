import "./Card.css"

export function Card(props) {

    const cardStyle = {
        backgroundColor: props.color || "salmon",
        borderColor: props.color || "salmon"
    }

    return (
        <div className="card" style={cardStyle}>
            <h2 className="title">{props.title}</h2>
            <p className="content">{props.children}</p>
        </div>
    )
}