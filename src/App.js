import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' elemnt={<ItemListContainer />} />
            <Route path='/categoria' elemnt={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' elemnt={<ItemDetailContainer />} />
            <Route path='/cart' elemnt={<Cart />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
