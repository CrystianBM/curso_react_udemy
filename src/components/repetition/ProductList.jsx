import React from "react"

export default props => {

    const list = props.list.map((product) => {
                    return <li>{product.id}) {product.name} - R${product.price}</li>
                })

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}