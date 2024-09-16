import { Container,Row,Col,Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

const EmptyCart=()=>{
    return (
        <Container className="mt-4 p-3 align-text-center justify-content-center w-75">
        <Row> 
           <Col className=" d-flex flex-column align-items-center W-50">
           <span className="fs-2   "> The Empty Cart </span>
           <span className=" w-50"><hr/></span>
           <Link to='/'>
           <Button className=" border-warning bg-warning  text-black  m-1 fw-bolder">Conitnue Shopping</Button>
           </Link>
           </Col>
        </Row>
        </Container>
    )
}

export default EmptyCart;