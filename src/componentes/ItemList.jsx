import React from "react"
import Item from "./Item"



export const ItemList = ( {productos} ) => {
  productos.map(productos => <Item productos={productos}/>)
}

