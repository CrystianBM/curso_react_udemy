export function If(props) {
    // Gets the first {Else} child present inside the {If} component
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === "Else"
    })[0]
    
    // Gets every other child other than the {Else} child
    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if(props.test) {
        return ifChildren
    } else if(elseChild){
        return elseChild
    } else {
        return false
    }
}

export const Else = props => props.children