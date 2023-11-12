
export function EvenOrOdd(props) {
    const isEven = props.number % 2 === 0;

    return <div>Did you know {props.number} is an {isEven ? <strong> even </strong> : <strong> odd </strong>} number?</div>
}