
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Cart from './Cart';

function App() {
  
  return (
    <div className="App">
     <header>
<NavLink to={'/'}>Home</NavLink>
<NavLink to={'/cart'}>Cart</NavLink>

      
     </header>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
    </div>
  );
}

export default App;
