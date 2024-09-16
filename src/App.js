import logo from './logo.svg';
import   './App.css';
import TopNav from './Components/TopNav';
import CatNav from './Components/CatNav';
import MainComponent from './Components/MainComponent';
import SideNavbar from './Components/SideNavbar';

import { Container,Row,Col } from 'react-bootstrap';
import LandingPage from './Components';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
function App() {
  return (
    
    <div className="App">
     <TopNav></TopNav>
     <CatNav></CatNav>
  
     <Routes>
         <Route path='/' element={<LandingPage/>}></Route>
         <Route path='/productDetails' element={<ProductDetails/>}></Route>
         <Route path='/Cart' element={<Cart/>}></Route>
     </Routes>
      </div>
  
  );
}

export default App;
