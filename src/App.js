import logo from './logo.svg';
import   './App.css';

import TopNav from './Components/TopNav';
import CatNav from './Components/CatNav';
import NavbarComponent from './Components/NavbarComponent';
import MainComponent from './Components/MainComponent';
import SideNavbar from './Components/SideNavbar';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
function App() {
  return (
    <Router>
    <div className="App">
     <TopNav></TopNav>
     <CatNav></CatNav>
     <Container fluid className='d-flex flex-row' style={{ height:'100%'}}>
     <SideBar></SideBar>
     
     <MainComponent></MainComponent>
     </Container>
     
    
    
      </div>
    </Router>
  );
}

export default App;
