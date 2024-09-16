import React, { useState ,cloneElement,dispatch} from 'react';
import {Accordion,Card ,Button} from 'react-bootstrap';
import { NavLink ,NavItem,NavText,NavIcon} from 'react-router-dom';
import WomanIcon from '@mui/icons-material/Woman';
import { useEffect } from 'react';
import { getCategories } from '../../Redux/Category/actions';
import { Collapse } from 'react-collapse';
import { useSelector,useDispatch } from 'react-redux';
import categorySlice from '../../Redux/Category/categorySlice';
import axios from 'axios';
import { filteredProducts,setProducts,filterByPrice } from '../../Redux/Product/productSlice';

const SideBar = () => {
  const [data,setData]=useState([]);
 const [products,setProduct]=useState([]);
 const [minPriceLimit,setMinPriceLimit]=useState(10);
 const [maxPriceLimit,setMaxPriceLimit]=useState(130);
  const dispatch = useDispatch();

    useEffect(()=>{
        axios.get('http://localhost:5002/productCategories')
        .then(response=>{
            setData(response.data);
            axios.get('http://localhost:5002/getProducts').then(productResponse => {
              dispatch(setProducts(productResponse.data));
              setProduct(productResponse.data);
            });
        })
        .catch(error =>{
            console.error('Error fetching data:',error);
        });
    },[dispatch]);
    
  
    const filterData = (selectedCategory)=>{
      //console.log(products);
      const payload = {selectedCategory,products};
      dispatch(filteredProducts(payload));
    }
    const getSubCategories = (parentId) => {
      return data.filter(item => item.parent_category_id === parentId);
    };

    const setPriceLimit = (e,stateFlag)=>{
      if(stateFlag === "max")
      {
        setMaxPriceLimit(e.target.value);
      }
      else if(stateFlag==="min")
      {
        setMinPriceLimit(e.target.value);
      }
    }
  
    const applyPriceFilter = ()=>{
       const payload = { products,minPriceLimit,maxPriceLimit};
       //console.log(payload);
       dispatch(filterByPrice(payload));
    }


    const CategoryItem = ({item}) =>{
        const element =  <Accordion.Item eventKey={item.id}>
        <Accordion.Header className=''>{item.category}</Accordion.Header>
            <Accordion.Body>
            {getSubCategories(item.id).map(subItem => (
            <li key={subItem.id} className='list-unstyled  m-2' onClick={()=>filterData(subItem.id)} >
                <a href='#' className='link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-5' >{subItem.category}</a>
            </li>
          ))}
            </Accordion.Body>
     </Accordion.Item>
        if(!item.parent_category_id){
        return React.cloneElement(element);
        }
    }
    
  return(
    <div className='d-flex flex-column justify-content-start border border-2 rounded-2 p-4 m-2 bg-dark '>
           <h1 className='text-primary mb-4'>Category</h1>
           <Accordion>
           {
               data.map(item=>(
               <CategoryItem key={item.id} item={item}/>     
              ))
             }
          </Accordion>
            
           <div className='d-flex flex-column justify-content-center border border-1 bg-white p-2 mt-3 rounded-2'>
                  <div>
                  <h4> Filter By Price </h4>
                  </div>
                  <div className='d-flex flex-column mt-2'>
                    <label className=' fs-5'>Min : {minPriceLimit} </label>
                    <input type='range' min={10} max={130} step={10} onChange={(e)=>setPriceLimit(e,"min")} className='form-range mt-1 mb-1'></input>
                  </div>
                  <div className='d-flex flex-column mt-2'>
                    <label className=' fs-5'>Max : {maxPriceLimit} </label>
                    <input type='range' min={10} max={130} step={10} onChange={(e)=>setPriceLimit(e,"max")} className='form-range mt-1 mb-1'></input>
                  </div>
                  <Button className='mt-2 mb-1' onClick={applyPriceFilter}>Apply Filter</Button>   
           </div>
    </div>
  );
};

export default SideBar;



