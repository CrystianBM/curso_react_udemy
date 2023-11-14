import { IndirectChild } from "./IndirectChild";

export function IndirectParent(props) {

    let name = "-";
    let age = 0;
    let working = false;

    function sendInfo(nameP, ageP, workingP) {
        name = nameP;
        age = ageP;
        working = workingP;
        console.log(name, age, working);
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age} </strong></span>
                <span>{working ? "already working" : "not working yet"}!</span>
            </div>

            <IndirectChild onClick={sendInfo} />
        </div>
    )
}