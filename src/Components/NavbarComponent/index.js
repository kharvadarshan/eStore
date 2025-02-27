import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavbarComponent =()=>{
    return (
        <Navbar collapseOnSelect expand="lg"
                className="bg-black">
            <Container  className='d-flex flex-row' fluid>
                <Navbar.Brand href="#home"  className='justify-content-start me-3 '>
                        <h1 className='text-primary'> eStore </h1>
                </Navbar.Brand>
                
                   <Nav className="me-3 text-primary justify-content-start ">
                    <NavDropdown  className='text-primary' title={<span className='btn btn-success'>Category</span>}
                            id="collapsible-nav-dropdown"  >
                            <NavDropdown.Item href="#action/3.1" >
                               Men
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Women
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Kids
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='justify-content-start ms-xxl-3 me-3 col-5'>
                        <form className='form-inline  d-flex flew-row align-items-center mt-2'>
                           <div className='form-group mx-sm-3 mb-2'>
                           <input className='form-control mr-2 ' type='search' placeholder='Search' aria-label='Search'/>
                           </div>
                             <button type='submit' className='btn btn-warning mb-2'>
                             <i className='fa fa-search'></i>
                               </button>
                        </form>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-white text-secondary ' />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end col-4'>
                    
                    <Nav className=''>
                        <Nav.Link href="#contactus" className=' text-primary fs-3 me-3 '>
                            Sign In 
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#community" className='text-primary align-text-center fs-3'>
                           <i className='fa fa-user-circle text-white align-text-center'></i> Register 
                        </Nav.Link>
                        <Nav.Link href="#contactus" className=' text-primary align-text-center fs-3 me-3 '>
                                <i className='fa fa-heart '></i>
                        </Nav.Link>
                        <Nav.Link href="#contactus" className=' text-primary  align-text-center fs-3 me-3 '>
                                <i className='fa fa-shopping-cart '></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;