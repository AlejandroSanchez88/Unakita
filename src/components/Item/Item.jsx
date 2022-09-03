import './Item.css'

const Item = ({info}) => {
    return (
        <a href="" className='articulo'>
            <img src={info.img} alt="" />
            <p>{info.title}</p>
            <p>Precio ${info.precio}</p>
        </a>
    )
}

export default Item