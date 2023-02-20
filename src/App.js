import Home from './components/Home';
import './index.css'
import './product.css'
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Shop from './components/Shop';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
    <Route path="/" element={<Navbar />}>
    <Route index element={<Home />} />
      <Route path='login' element={<Login/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
      <Route path='cart' element={<Cart/>}></Route>
      <Route path='shop' element={<Shop/>}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
