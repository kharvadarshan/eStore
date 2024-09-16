import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { deleteCartItem, updateItemQuantity } from "../../../Redux/Cart/cartSlice";

const FilledCart=()=>{

    const cart = useSelector(state=>state.cartReducer);
    const dispatch=useDispatch();
    
    const quantityHandler=(e,item,key)=>{
        const payload ={
            operator:e.target.innerText,
            key,
            item
        }
         dispatch(updateItemQuantity(payload));
    }
    
    const deleteHandler=(item)=>{
          dispatch(deleteCartItem(item));
    }



    // const quantityHandlerMinus=(e,item,key)=>{
    //     console.log("q-1");
    // }

    return(
       <div>
            <Container className="w-75 ">
                <Row className="d-flex flex-row justify-content-around">
                    <Col className="m-4 " xs={7}>
                       {
                        cart.cartItems.map((item,key)=>{
                            return(
                               <Container className="border border-1 border-black m-2 p-2 bg-light rounded">
                                <Row className="d-flex flex-row align-items-center justify-content-between">
                                    <Col>
                                        <img src={require("../../../assets/img/"+item.product_img)} alt="Image" style={{width:200,height:200}}></img>
                                    </Col>
                                    <Col className="d-flex flex-column">
                                        <Container>
                                        <Row>
                                        
                                        <Col className="mt-1 d-flex flex-row justify-content-between">
                                            <div className="d-flex flex-column">
                                             
                                             <span className="fs-4">{item.product_name}</span>
                                             <div className=" mb-1 fs-6 text-warning">
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                             </div>
                                             </div>
                                            <span className="fs-4">${item.price}</span>
                                        </Col>
                                        <Col><span><hr/></span></Col>
                                        <Col className="d-flex flex-row">
                                        <div className="d-flex flex-row text-black  align-items-center">
                                            <Button className="m-1 " onClick={(e)=>quantityHandler(e,item,key)} value="+" ><span className="">+</span></Button>
                                            <div className="m-1">{item.quantity}</div>
                                            <Button className="m-1 " onClick={(e)=>quantityHandler(e,item,key)} value="-"><span className="">-</span></Button>
                                        </div>  
                                        <div className=" m-2">
                                            <Button className="mt-2 mb-2 btn-warning text-black" onClick={()=>deleteHandler(item)}><span><i className="fa fa-trash"/>    Remove Item</span></Button>
                                        </div>
                                        </Col>
                                        </Row>
                                        </Container>
                                    </Col>
                                </Row>
                               </Container>
                            )
                        })
                       }
                    </Col>
                    <Col className="border border-1 border-black  h-50   ml-4 mt-4 rounded bg-light">
                            
                             <Container className="m-2">
                                    <h2>Summary</h2>
                                <Row className="d-flex flex-column">
                                    <Col><span className="text-dark fs-5">Cart Total :<span className="text-black fw-bold"> ${cart.totalItemsPrice}</span></span></Col>
                                    <Col><span className="text-dark fs-5">Shipping Charges :<span className="text-black fw-bold">Free</span> </span></Col>
                                    <Col><span><hr/></span></Col>
                                    <Col className="text-dark  fs-5">Total : <span className="text-black fw-bold">${cart.totalItemsPrice}</span></Col>
                                    <Col>
                                    <Button className="w-50 mt-3 mb-3">Checkout</Button>
                                    </Col>
                                </Row>
                             </Container>
                    </Col> 
                </Row>
            </Container>
       </div>
    )
}

export default FilledCart;