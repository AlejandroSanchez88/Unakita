
import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

const articulos = [
  {id: 1, img: '../../img/tortaKinder.jpeg', title: 'Torta', precio: 2200},
  {id: 2, img: '../../img/bombones.jpeg', title: 'Bombon', precio: 500},
  {id: 3, img: '../../img/desayunoInfantil_PowPatrol.jpeg', title: 'Desayuno', precio: 1700},
]

export const ItemListContainer = ({greeting='Hola'}) => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(articulos);
      }, 2000)
    })
    getData.then(res => setData(res))

  }, [])

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  }

  return (
    <>
    <div>
      <h2>{greeting}</h2>
      <h4>Listado de productos</h4>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      <ItemList data={data} />
    </div>
    </>
  )
}

export default ItemListContainer