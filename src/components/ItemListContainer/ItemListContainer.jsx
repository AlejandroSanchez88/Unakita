
import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import {useParams} from 'react-router-dom'


const articulos = [
  {Id: 1, img: '../../img/tortaKinder.jpeg', title: 'Torta', precio: 2200, category: 'torta'},
  {Id: 2, img: '../../img/bombones.jpeg', title: 'Bombon', precio: 500, category: 'bombones'},
  {Id: 3, img: '../../img/desayunoInfantil_PowPatrol.jpeg', title: 'Desayuno', precio: 1700, category: 'desayuno'},
]

export const ItemListContainer = ({greeting='Hola'}) => {

  const [data, setData] = useState([])

  const {categoriaId} = useParams()

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(articulos);
      }, 1000)
    })
    if (categoriaId) {
      getData.then(res => setData(res.filter(desayuno => desayuno.category === categoriaId)))
    } else {
      getData.then(res => setData(res))
    }

  }, [categoriaId])

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