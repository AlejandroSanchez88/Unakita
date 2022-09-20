import logo from '../../img/logo.jpeg'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img width={'150px'} height={'100px'} src={logo} alt='logo' />
            </div> 
            <div>
                <ul>
                    <li>
                        <NavLink to='/'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categoria/:categoriaId'>Desayunos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categoria/:categoriaId'>Postres</NavLink>
                    </li>
                    <li>
                    <NavLink to='/cart'>
                        <CartWidget />
                    </NavLink>
                    </li>
                </ul>
            </div>
            
{/*             
            <div>
                <button>Ingresar</button>
            </div>  */}
        </div>
    )
}

export default NavBar;