import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className='articulo'>
            <img src={info.img} alt="" />
            <p>{info.title}</p>
            <p>Precio ${info.precio}</p>
        </Link>
    )
}

export default Item