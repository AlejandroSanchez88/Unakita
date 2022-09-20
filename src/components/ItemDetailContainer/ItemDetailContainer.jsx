import ItemDetail from '../ItemDetail/ItemDetail'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const articulos = [
    {Id: 1, img: '../../img/tortaKinder.jpeg', title: 'Torta', precio: 2200, category: 'torta'},
    {Id: 2, img: '../../img/bombones.jpeg', title: 'Bombon', precio: 500, category: 'bombones'},
    {Id: 3, img: '../../img/desayunoInfantil_PowPatrol.jpeg', title: 'Desayuno', precio: 1700, category: 'desayuno'},
  ]
  
// const articulo2 = [
    // {id: 1, img: '../../img/tortaKinder.jpeg', title: 'Torta', precio: 2200}]

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams()

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout (() => {
                resolve(articulos)
            }, 2000);
        })
        getData.then(res => setData(res.find(articulo => articulo.id === parseInt(detalleId))))
    }, [])


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer