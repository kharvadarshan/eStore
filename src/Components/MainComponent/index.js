
 import { Container,Row,Col,Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import productSlice from '../../Redux/Product/productSlice';
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Product/productAction';
import axios from 'axios';
import React ,{useState} from 'react';
import { addCartItem } from '../../Redux/Cart/cartSlice';
import SideBar from '../SideBar';
import { Link } from 'react-router-dom';
const MainComponent=()=>{

   
    const productData=useSelector(state=>state.productReducer.products);
    const dispatch = useDispatch();
    //console.log(productData);
    const addToCart=(itemData)=>{
        const payload = {...itemData,quantity:1};
        dispatch(addCartItem(payload)); 
    }

       
    const ProductItem = ({item}) =>{
        const element =<Col  id="page-content-wrapper " className='col-5 border border-2 border-black ms-5 me-5 d-flex flex-column align-items-center mt-4 mb-2 shadow-lg' style={{width:'300px',height:'420px'}} key={item.id}>
        <Link to='/productDetails'  state={item}>
        <Container style={{width:'200px',height:'200px'}}>
           <img src={require('../../assets/img/'+item.product_img)}  className='img mt-2 mb-2' style={{width:'100%',height:'100%'}}></img>
        </Container>
        </Link>
        <div className='d-flex flex-column mt-2'>
        <h3><Link to="/productDetails" state={item} className='link-underline link-underline-opacity-0'>{item.product_name}</Link></h3>
        <h4>${item.price}</h4>
        </div>
        <div className='mt-3  fs-4 text-warning'>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
        </div>
        <div>
          <Button className='btn-warning mt-4 ' onClick={()=>addToCart(item)}>
               <i className='fa fa-shopping-cart'><span>  Add to Cart</span></i>
               
          </Button>
        </div>
   </Col> ;
      
        return React.cloneElement(element);
    }


    return (
         <div>
          <Container fluid className='d-flex flex-row h-100' style={{ height:'100%'}}>
          <SideBar className=''></SideBar>
           <Container fluid >
            <Row className='d-flex flex-row flex-wrap justify-content-start p-3'>
            {
               productData.map(item=>(
                    <ProductItem item={item} key={item.id}/>
                ))
            }  
            </Row>
           </Container>
           </Container>     
        </div> 
        
    )
}

export default MainComponent;