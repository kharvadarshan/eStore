

import SideNavbar from '../SideNavbar';
import './_cat-nav.scss';

const CatNav = ()=>{
    return(
       <>
          <div className='navbar navbar-expand-sm bg-dark navbar-light p-2 pb-3'>
              <ul className='navbar-nav fs-4'>
                 <li className='nav-item me-3 ms-3 pl-4'>
                     <a href='#' className='link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'> Men</a>
                 </li>
                 <li className='nav-item me-3 ms-3'>
                 <a href='#' className='link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Women</a>
                 </li>
                 <li className='nav-item me-3 ms-3'>
                 <a href='#' className='link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Kids</a>
                 </li>
                 <li className='nav-item me-3 ms-3'>
                 <a href='#' className='link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Best offers</a>
                 </li>
              </ul>
          </div>
       </>
    )
}

export default CatNav;