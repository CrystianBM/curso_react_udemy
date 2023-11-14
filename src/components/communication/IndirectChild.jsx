
export function IndirectChild(props) {

    return (
        <div>
            <div>
                Child
            </div>
            <button onClick={ e => props.onClick("Jhon", 43, true) }>
                Send info to Parent
            </button>
        </div>
    )
}