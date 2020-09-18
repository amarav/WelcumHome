import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { PNKitDietChart } from "./PNDietChart";

function Babycarekit() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/buynow">Buy Now</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Post-natal kit</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
          <h3 className="section-heading text-uppercase">POST-NATAL KIT</h3>
            <h3 className="section-subheading text-muted">The complete newborn baby care
            </h3>
            <div className="col-md-8 offset-md-2 text-left">
              
              <div className="col-md-8 offset-md-3">
            {" "}
           
          </div>
          
          <div className="col-md-8 offset-md-2">
                      <div className="card">
                        <img className="card-img-top" src={require("../assets/img/kit/postnatalkit.jpg")}  width="350" height="350" alt=""/>                        <div className="card-body">
                          <h4 className="card-title">Post-natal kit</h4>
                          <p className="card-text">
                            <ul>
                            <li>Garlic legiyam</li>
                                  <li>Dried ginger legiyam</li>
                                  <li>Mustard legiyam</li>                                  
                                  <li>Prasava legiyam</li>
                                  <li>Marundhu kuzhambu Podi</li>                                                                      
                                  <li>Herbal bath powder for mother</li> 
                            </ul>  
                            </p>
                           </div>
                        <div className="card-footer">
                        <Link to='/contactus'  className="btn btn-success">BUY NOW</Link>
                        </div>
                      </div>
                    </div>
              <br/><br/>
              
             
               <div className="text-center">
             
              </div> <br></br>
              </div>
            </div>
          </div>  <div className="col-md-9 offset-md-2">
                     
                     <PNKitDietChart />
                     <br/>
                     <br/>
                     <h5>Herbal bath powder</h5>
                     <hr/>
                     This powder should be mixed with water and made like a paste.This should be used 
                     by mother during bath.It ensures mother is protected from infections and to get rid 
                     of hospital and delivery debris smell. Refer <Link to="/PNBath">here</Link> for the ingredients used 
                     <br/>
                     <br />
                     <br />
                     <div className="text-left">
                       <h5>DISCLAIMER</h5>
                       <hr/>
                       All these information are based on the traditions followed in
                       our family and are no way responsible for illness or harm caused
                       to you or your baby.Always seek advice from doctor,siddha
                       doctor,lactation consultant and pediatrician. This kit is
                       advised for normal labour only and for c section mothers it is
                       advised to take only after surgical wounds are healed. Please
                       consult to siddha doctor before taking any of these.
                     </div>
                   </div>
      </section>
    </div>
  );
}

export default Babycarekit;
