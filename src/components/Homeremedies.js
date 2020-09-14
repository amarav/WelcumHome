import React from 'react'
import { Breadcrumb, BreadcrumbItem, } from 'reactstrap';    
import { Link } from 'react-router-dom';
import PNPortfolio from './PNPortfolio'


function Homeremedies()
{
    return(
    <div>
     
     <div className="container">
          <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Home remedies</BreadcrumbItem>
                </Breadcrumb> 

               
               </div>
               <div className="col-10 col-md m-1"> 
               <section className="page-section bg-light" >
            
            <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Home remedies</h3>
            <h3 className="section-subheading text-muted">Health & wellness
            </h3>
            </div></div>
            </section>
                <div className = "col-md-8 offset-md-4">        <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/postpartumbaby.jpg")}
                    width="350" height="350" alt=""
                  />
                  </div>
                  
            <div className = "col-md-8 offset-md-2">
            <br/>
            Traditional home remedies for the most common problems and ailments are listed. Drugs can be avoided 
            if these ailments work well. 
            <br></br><br></br>
            
            </div>

            <div className="col-10 col-md m-1"> 
               
               <PNPortfolio/>
               </div>

            <div className = "col-md-8 offset-md-2">
           
            <section className="page-section bg-light" >
            
            <div className="container-fluid">
       
           
              <div className = "col-md-8 offset-md-2 text-left">
                                           
             
              
             
              <div className = "col-md-8  offset-md-2  text-left">
             <br/><br/>
            
             </div>
              </div>
            
              </div>
              </section>
              
            </div>
            
            </div>
    </div>
    </div>
    );
}

export default Homeremedies;