
import React from 'react'
import ItemCount from './ItemCount/ItemCount'

const ItemListContainer = ({greeting='Hola'}) => {
  
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  }

  return (
    <>
    <div>
      <h2>{greeting}</h2>
      <h4>Listado de productos</h4>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
    </>
  )
}

export default ItemListContainer