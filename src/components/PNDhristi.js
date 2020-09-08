import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import {
    AfterBathBaby,DhristiSapadu
} from "./PNIngredients.js";

function PNDhristi() {
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
            <BreadcrumbItem active>Dhristi kalippu</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Dhristi kalippu</h3>
            <h3 className="section-subheading text-muted">
              The bath procedure
            </h3>
            <div className="col-md-8 offset-md-2 text-left">
            <h4 className="page-section section-subheading">Aarathi for baby</h4>
              <ul>
                  <li>Neem leaf</li>
                  <li>Turmeric</li>
                  <li>Chunnambu</li>
                  <li>Thiri</li>
              </ul>  
             
              <h4 className="page-section section-subheading">Dhristi for baby after bathing</h4> 
              The below ingredients should be used for dhristi for baby after bathing
              <AfterBathBaby/>
              <h4 className="page-section section-subheading">Dhristi Sapadu</h4> The below ingredients need to be
              dry fried without adding oil dnd should NOT temper with mustard and then powdered finely.This should be 
              mixed in rice along with ghee and consumed. This should be given to mother
              on the 16th day. Interesting this about this is, when mother takes one handful and brings near mouth,it
              should be grabbed from her hands and circled over mothers head for 3 times and given to dog.Important thing
              to note is, crow should not consume this dhristi food.
              <DhristiSapadu/>

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

export default PNDhristi;
