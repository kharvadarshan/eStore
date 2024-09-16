import { Container,Row,Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addCartItem } from "../../Redux/Cart/cartSlice";


const ProductDetails=()=>{
    const location=useLocation();
    const dispatch=useDispatch();
    const addToCart=()=>{
         dispatch(addCartItem(location.state));
    }
    return(
        <div>
            <Container className="border border-2 rounded-2 mt-4 w-50">
                <Row >
                    <Col>
                          <img src={require('../../assets/img/'+location.state.product_img)} className='p-2' style={{width:380,height:380}}></img>
                    </Col>
                    <Col className="d-flex flex-column mt-2 mb-2 p-2 pl-3">
                        <span className="fs-3 fw-bolder">{location.state.product_name}</span>
                        <div className="mt-3  fs-4 text-warning">
                           <i className='fa fa-star '/>
                           <i className='fa fa-star'/>
                           <i className='fa fa-star'/>
                           <i className='fa fa-star'/>
                           <i className='fa fa-star'/>
                        </div>
                        <div className="fs-5 mt-3  d-flex flex-column">
                             <div>
                            MRP : <span className="fs-3 fw-bold">${location.state.price}</span>
                            </div>
                            <div> Inclusive of all taxes. </div>
                        </div>
                        <div className="mt-4  text-black p-1 fw-bold fs-5 ">
                            <span className="">    Some Product Description Given Here.... </span>
                        </div>
                        <Button className="mt-4 w-50 fs-5" onClick={addToCart}>
                            <span><i className="fa fa-shopping-cart"></i> Add To Cart </span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetails;