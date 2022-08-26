import logo from '../../img/logo.jpeg'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img width={'150px'} height={'100px'} src={logo} alt='logo' />
            </div> 
            <div>
                <ul>
                    <li>
                        <a href='#'>Inicio</a>
                    </li>
                    <li>
                        <a href='#'>Products</a>
                    </li>
                    <li>
                        <a href='#'>Contacto</a>
                    </li>
                </ul>
            </div>
            
            <CartWidget />
            
            <div>
                <button>Ingresar</button>
            </div> 
        </div>
    )
}

export default NavBar;