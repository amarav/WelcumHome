import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import {
  ThreeDayMarundhu,
  PoonduLegiyam,
  PrasavaLegiyam,
  SukkuLegiyam
} from "./PNIngredients.js";
import IngredientsKuzhambuPodi from "./PNIngredients.js";

function PNPostnatalkit() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/Buynow">Buy now</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Post-natal kit</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">legiyam</h3>
            <h3 className="section-subheading text-muted">
              The complete postpartum diet kit
            </h3>
            <div className="col-md-8 offset-md-2 text-left">
              <h4
                id="kadugulegiyam"
                className="page-section section-subheading"
              >
                Mustard Legiyam
              </h4>After 28 days of delivery,for three days Kadugu legiyam should be consumed. If taken,the next day morning, ginger must be taken compulsory.Water should be taken only 1/2 after taking legiyam
              otherwise it may lead to stomach upset.
              <h4 className="page-section section-subheading">
                Garlic Legiyam
              </h4> 
              For the first 3 days after delivery, at night around 10:30pm, Poondu legiyam should be taken.If taken,the next day morning, ginger must be taken compulsory.Water should be taken only 1/2 hour after taking legiyam
              otherwise it may lead to stomach upset.
             
              <h4 className="page-section section-subheading">
                Prasava Legiyam
              </h4>
              <PrasavaLegiyam />
              Everyday after dinner this 10gms of this legiyam should be consumed at
              night. Water should not be taken for 1/2 hour after taking legiyam.
              <h4 className="page-section section-subheading">Dried ginger Legiyam</h4>
              For the first 3 days after delivery,at night around 11pm, Sukku/Dried ginger legiyam should be taken.Water should be taken only 1/2 after taking legiyam
              
              <h4 className="page-section section-subheading">Marundhu Kuzhambu podi</h4>
              This podi needs to be used for preparing kuzhambu for mother for the first 28 days after delivery.
              The following are the ingredients used and grinded.
              <IngredientsKuzhambuPodi />
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

export default PNPostnatalkit;
