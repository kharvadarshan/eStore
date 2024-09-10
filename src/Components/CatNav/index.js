

import { useDispatch, useSelector, } from 'react-redux';
import SideNavbar from '../SideNavbar';
import './_cat-nav.scss';
import categorySlice from '../../Redux/Category/categorySlice';
import { useEffect } from 'react';
import { getCategories } from '../../Redux/Category/actions';
import React,{ cloneElement } from 'react';
import axios from 'axios';
import { useState } from 'react';
const CatNav = ()=>{
    
    // const categories=useSelector(state=>state.categoryReducer.categories);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (!categories.length) {  
    //         dispatch(getCategories());
    //     }
    // }, [categories,dispatch]);
    
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5001/productCategories')
        .then(response=>{
            setData(response.data);
        })
        .catch(error =>{
            console.error('Error fetching data:',error);
        });
    },[]);
    const CategoryItem = ({item}) =>{
        const element = <li className='nav-item me-3 ms-3 pl-4' key={item.id}>
                                    <a href='#' className='link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' >{item.category}</a>
                                </li>;
        if(!item.parent_category_id){
        return React.cloneElement(element);
        }
    }
    
    return(
       <>
          <div className='navbar navbar-expand-sm bg-dark navbar-light p-2 pb-3'>
              <ul className='navbar-nav fs-4'>
                  
                  {
                    data.map(item =>(
                        <CategoryItem key={item.id} item={item}/>     
                    ))
                  }
              </ul>
          </div>
       </>
    )
}


export default CatNav;