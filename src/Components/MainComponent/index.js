
 import { Container,Row,Col } from 'react-bootstrap';

const MainComponent=()=>{

     const productData = [
         { pName:'Watch',
          price:300,
          img:'product-6.jpg'
         },
         { pName:'Tablet',
          price:1500,
          img:'p3.jpg'
         },
         { pName:'Phone',
          price:2000,
          img:'p2.jpg'
         },
         { pName:'Speaker',
          price:700,
          img:'p5.jpg'
         },
         { pName:'Mouse',
          price:800,
          img:'p6.jpg'
         }
     ]


    return (
         <div>

       <Container fluid >
            <Row className='d-flex flex-row flex-wrap justify-content-between p-3'>
            {
               productData.map((product,key)=>{
                     return(
                     <Col  id="page-content-wrapper " className='col-4 border border-2 border-black ms-3 me-3 d-flex flex-column align-items-center mt-4 mb2 shadow-lg' style={{width:'300px',height:'350px'}}>
                          <Container style={{width:'200px',height:'200px'}}>
                             <img src={require('../../assets/img/'+product.img)}  className='img mt-2 mb-2' style={{width:'100%',height:'100%'}}></img>
                          </Container>
                          <div className='d-flex flex-column mt-2'>
                          <h3><a href='#' className='link-underline link-underline-opacity-0'>{product.pName}</a></h3>
                          <h4>${product.price}</h4>
                          </div>
                          <div className='mt-3  fs-4 text-warning'>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                              <i className='fa fa-star'></i>
                          </div>
                     </Col>
                     )
               })
            }
                
            </Row>
        </Container>  
        {/* <div className='container mt-4 bg-light fluid'  >
            
                
                 <div className='row  align-items-start justify-content-start'  >
                 <SideNavbar></SideNavbar>
                 </div>
             <div className='row  align-items-start justify-content-start'  >
                   <div className='col-2  me-3'>
                     <img src={require('../../assets/img/p2.jpg')}></img>
                     <div className='d-flex flex-column'>
                          <h3><a href='#' className='link-underline link-underline-opacity-0'>Mobile</a></h3>
                          <h4>$2000</h4>
                     </div>
                   </div>
                   <div className='col-2  me-3'>
                     <img src={require('../../assets/img/p3.jpg')}></img>
                     <div className='d-flex flex-column'>
                          <h3><a href='#' className='link-underline link-underline-opacity-0'>Tablet</a></h3>
                          <h4>$1000</h4>
                     </div>
                   </div>
                   <div className='col-2  me-3'>
                     <img src={require('../../assets/img/p3.jpg')}></img>
                     <div className='d-flex flex-column'>
                          <h3><a href='#' className='link-underline link-underline-opacity-0'>Tablet</a></h3>
                          <h4>$1000</h4>
                     </div>
                   </div>
                   
             </div>
        </div> */}
              
        </div> 
        
    )
}

export default MainComponent;