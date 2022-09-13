import ItemDetail from '../ItemDetail/ItemDetail'
import React, {useState, useEffect} from 'react'

const articulo2 = [
    {id: 1, img: '../../img/tortaKinder.jpeg', title: 'Torta', precio: 2200}]

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout (() => {
                resolve(articulo2)
            }, 2000);
        })
        getData.then(res => setData(res))
    }, [])


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer