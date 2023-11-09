
export function RandomNumber(props) {
    const random = Math.ceil(Math.random() * (props.max - props.min) + props.min);
    return (
        <div>
            <h2>Random Number</h2>
            <p>Your random number this time is <strong>{ random }</strong>.</p>
        </div>
    )
}