import React from 'react'
import ReactDOM from "react-dom"
import "./Item.css"

function Item(props){
    const items = props.items.map(item => <h1 key={item}>{item}</h1>)
    return (
        <div class="items-container">{items ? items : "ADD ITEMS!"}</div>
    )
}

export default Item