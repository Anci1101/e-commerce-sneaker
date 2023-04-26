import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar.js';
import { ShopContextProvider } from './context/shopContext.js';
import Cart from './pages/Cart.js';
import Shop from "./pages/Shop.js";
import './scss/scss-style.js'

function App() {
  return (
    <>
    <ShopContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
