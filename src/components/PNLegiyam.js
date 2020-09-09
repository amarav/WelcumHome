import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import {
  ThreeDayMarundhu,
  PoonduLegiyam,
  PrasavaLegiyam,
} from "./PNIngredients.js";

function PNLegiyam() {
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
            <BreadcrumbItem active>Legiyam</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">legiyam</h3>
            <h3 className="section-subheading text-muted">
              The complete postpartum legiyam diet
            </h3>
            <div className="col-md-8 offset-md-2 text-left">
              <h4
                id="kadugulegiyam"
                className="page-section section-subheading"
              >
                Kadugu Legiyam
              </h4>
              The following ingredients need to be grinded and taken for the
              first 3 days after delivery. This helps to clean the uterus. After
              taking the marundhu, water should not be taken for half an hour,
              otherwise it may lead to stomach upset.
              <br />
              <br />
              <ThreeDayMarundhu />
              <h4 className="page-section section-subheading">
                Poondu Legiyam
              </h4>
              In Ginger juice extract, garlic pods should be boiled.Once
              boiled,karupatti should be mixed with it along with ghee.This
              should be taken for the first 3 days after delivery. This helps to
              clean the uterus. After taking the marundhu, water should not be
              taken for half an hour, otherwise it may lead to stomach upset.
              <br />
              <br />
              <PoonduLegiyam />
              <h4 className="page-section section-subheading">
                Prasava Legiyam
              </h4>
              <PrasavaLegiyam />
              All the above ingredients need to be dry fried and grinded finely
              to prepare the marundhu podi.In ginger juice extract,cashews
              should be boiled and then the skin and seeds should be
              separated.Old karupatti should be added to this and heated well.
              This mixture should be filtered and after it reaches Ilam Paagu
              stage, the grinded marundhu podi should be added to this and mixed
              well until legiyam padham is reached. This is the stage to turn
              off the stove. Add 100 gm ghee to this and kept in an air-tight
              container.Everyday after dinner this legiyam should be consumed at
              night ( one agappai quantity ). Water should not be taken for 1/2
              hour after taking legiyam.
              <h4 className="page-section section-subheading">Sukku Legiyam</h4>
              Sukku should be dried well and then finely grinded without any
              coarse particles. Karupatti should be mixed with water and
              filtered and kept in medium heat. The dried powder should be mixed
              little by little along with ghee and prepared like a paste to get
              the legiyam consistency
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

export default PNLegiyam;