
export function IndirectChild(props) {
    const ageMin = 30;
    const ageMax = 60;
    const ageGen = () => parseInt(Math.random() * (ageMax - ageMin)) + ageMin;
    const isWorking = () => Math.random() > 0.5;

    return (
        <div>
            <div>
                Child
            </div>
            <button onClick={ e => props.onClick("Jhon", ageGen(), isWorking()) }>
                Send info to Parent
            </button>
        </div>
    )
}