// import './itemList.css'
import Item from '../Item/Item'

const ItemList = ({data = []}) => {
    return (
        data.map(articulos => <Item key={articulos.id} info={articulos} />)
    )
}

export default ItemList
 