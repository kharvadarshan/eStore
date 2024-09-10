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
import { filterProducts,setProducts } from '../../Redux/Product/productSlice';

const SideBar = () => {
  const [data,setData]=useState([]);
  const [products,setProducts] = useState([]);
  const dispatch = useDispatch();

    useEffect(()=>{
        axios.get('http://localhost:5001/productCategories')
        .then(response=>{
            setData(response.data);
            dispatch(setProducts(data));
        })
        .catch(error =>{
            console.error('Error fetching data:',error);
        });
    },[data,dispatch]);

;
    
  
    const filterData = (selectedCategory)=>{
      //console.log(products);
      const payload = {selectedCategory,products};
      dispatch(filterProducts(payload));
    }


    const getSubCategories = (parentId) => {
      return data.filter(item => item.parent_category_id === parentId);
    };
  



    const CategoryItem = ({item}) =>{
        const element =  <Accordion.Item eventKey={item.id}>
        <Accordion.Header className=''>{item.category}</Accordion.Header>
            <Accordion.Body>
            {getSubCategories(item.id).map(subItem => (
            <li key={subItem.id} className='list-unstyled  m-2' onClick={()=>filterData(subItem.category)} >
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
            
           
          

         
  
    </div>
  );
};

export default SideBar;



