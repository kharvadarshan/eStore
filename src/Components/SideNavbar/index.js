import React, { useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Accordion } from "react-bootstrap";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";


const SideNavbar=()=>{
  const [expanded, setExpanded] = useState(false);
  const [categoryExpanded, setCategoryExpanded] = useState(false);

    const toggleCategory = () => {
        setCategoryExpanded(!categoryExpanded);
    };
    return(
        <div>
            <SideNav expanded={expanded} 
    
            onToggle={() => setExpanded(!expanded)} className=''
            style={{marginTop:'142px'}}>
          <SideNav.Toggle/>
        <SideNav.Nav defaultSelected="home" className='d-flex flex-column'>
          <NavItem className='home'>
          <NavIcon>
            <i className='fa-solid fa-home'></i>
          </NavIcon>
          <NavText >Home</NavText>
          </NavItem>
          <NavItem className=''>
          <NavIcon>
            <i className='fa-solid fa-user'></i>
          </NavIcon>
          <NavText >User</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
        </div>
    )
}




















// const SideNavbar=()=>{
//   const [expanded, setExpanded] = useState(false);
//   const [categoryExpanded, setCategoryExpanded] = useState(false);

//     const toggleCategory = () => {
//         setCategoryExpanded(!categoryExpanded);
//     };
//     return(
//         <div>
//             <SideNav expanded={expanded} 
//             style={{zIndex: '-1',paddingTop:'135px'}}
//             onToggle={() => setExpanded(!expanded)}>
//           <SideNav.Toggle/>
//         <SideNav.Nav defaultSelected="home">
//           <NavItem eventKey="home">
            
//             <NavText onClick={toggleCategory} ><span className='fs-3 ms-3 me-3'>Men
//             <span style={{ float: 'right',fontSize:'35spx',marginRight:'20px' }}>
//                {categoryExpanded ? '-' : '+'}
//                 </span>
//             </span>
            
//             </NavText>
//           </NavItem>
          
//           {categoryExpanded && (
//           <NavItem>
//               <NavText>
//                <div className='accordion accordion-body'>
//                      {/* <div className='accordion-item'>
//                         <div className='accordion-header'>
//                           <button className='accordion-button'>
//                             <a href="#">Men</a>
//                           </button>
//                         </div>
//                      </div> */}
//                      <div className='accordion-collapse collapse show'>
//                           <div className='accordion-body'>
//                             <ul className=''>
//                               <li className='sub-items list-unstyled '>
//                                 <a href='#' className='text-black fs-3 link-underline link-underline-opacity-0' >Jeans</a>
//                               </li>
//                               <li className='sub-items list-unstyled '>
//                                 <a href='#' className='text-black fs-3 link-underline link-underline-opacity-0'>Jeans</a>
//                               </li>
//                               <li className='sub-items list-unstyled'>
//                                 <a href='#' className='text-black fs-3 link-underline link-underline-opacity-0'>Jeans</a>
//                               </li>
//                             </ul>
//                           </div>
//                      </div>
//                </div>
//                </NavText>
//           </NavItem>
//           )}
         
//           <NavItem>
//             <NavIcon>
//               <i className='fa-solid fa-fa-home'></i>
//             </NavIcon>
//             <NavText>
//             <span className='fs-3 ms-3 me-3'>Home</span>
//             </NavText>
//           </NavItem>
          
//         </SideNav.Nav>
        
//       </SideNav>
//         </div>
//     )
// }



export default SideNavbar;