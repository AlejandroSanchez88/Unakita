// import './itemList.css'
import Item from '../Item/Item'

const ItemList = ({data = []}) => {
    return (
        data.map(articulo => <Item key={articulo.id} info={articulo} />)
    )
}

export default ItemList
 