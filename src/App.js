
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Cart from './Cart';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
     <header>
      <button onClick={()=>navigate('/')}>Home</button>
      <button onClick={()=>navigate('/cart')}>Cart</button>
     </header>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
    </div>
  );
}

export default App;
