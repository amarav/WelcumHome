import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { MilaguPodiKuzhambu,PathiyaRasam,PoonduKuzhambu,VendayaKazhi} from "./PNIngredients.js";

function PNPathiyaSapadu() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/PostNatalCare">PostNatalCare</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Pathiya Sapadu</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Pathiya Sapadu</h3>
            <h3 className="section-subheading text-muted">Kuzhambu varieties</h3>
            <div className="col-md-8 offset-md-2 text-left">
            <h4 className="page-section section-subheading">Milagu Podi Kuzhambu</h4>
              Pepper and Jeera need to be fried and grinded. It can be used while preparing kuzhambu.
              Kuzhambu preparation:<br></br>
              Fry one large size tomato in ghee. Add a tumbler of water and add one spoon of the prepared powder.
              This should be used with rice and consumed.The same kuzhambu should be used as sidedish for idly.
              <MilaguPodiKuzhambu/>

               <h4 className="page-section section-subheading">Poondu Kuzhambu</h4>  
              The below ingredients need to be grinded and stored in air-tight container.
              While preparing kuzhambu,this podi needs to be added                                      
              <PoonduKuzhambu/>  
              <h4 className="page-section section-subheading">Pathiya Rasam</h4>  
              The below ingredients should be boiled in water. Tamarind should not be added and 
              rasam should NOT be tempered with mustard and red chilly
              <PathiyaRasam/>  
              <h4 className="page-section section-subheading">Vendhaya Kazhi</h4>          
              <VendayaKazhi />                                                     
             
              
               <div className="col-md-8  offset-md-2  text-left">
                <br />
                <br />
                <h5>DISCLAIMER</h5>
                All these information are based on the traditions followed in
                our family and are no way responsible for illness or harm caused
                to you or your baby.Always seek advice from doctor,siddha
                doctor,lactation consultant and pediatrician. This is followed
                for normal labour only and for c section mothers it is advised
                to take only after surgical wounds are healed. Please consult to
                siddha doctor before taking any of these.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PNPathiyaSapadu;
