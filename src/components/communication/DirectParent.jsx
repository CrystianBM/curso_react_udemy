import { DirectChild } from "./DirectChild";

export function DirectParent(props) {
    return (
        <div>
            <DirectChild name="Child 1" number={12} bool={true} />
        </div>
    )
}