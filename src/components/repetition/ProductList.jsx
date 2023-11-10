import React from "react"
import "./ProductList.css"

export function ProductList(props) {

    const borderTR = {borderTopRightRadius: "15px"};
    const borderTL = {borderTopLeftRadius: "15px"};

    const list = props.list.map((product, i) => {
                    return <tr key={product.id} className={i % 2 === 0 ? "even" : "odd"}>
                        <td>{product.id})</td>
                        <td className="productName">{product.name}</td>
                        <td>R${product.price.toFixed(2).replace(".", ",")}</td>
                    </tr>
                })

    return (
        <div>
            <table className="productTable">
                <tr>
                    <th style={borderTL}>
                        Id
                    </th>
                    <th>
                        Name
                    </th>
                    <th style={borderTR}>
                        Price
                    </th>
                </tr>
                {list}
            </table>
        </div>
    )
}