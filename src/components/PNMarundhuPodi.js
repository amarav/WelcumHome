import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import IngredientsKuzhambuPodi, {
  ParuppuPodi,
  KaruveppilaiPodi,
} from "./PNIngredients.js";

function PNMarundhuPodi() {
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
            <BreadcrumbItem active>Marundhu Podi</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Marundhu podi</h3>
            <h3 className="section-subheading text-muted">Podi varities</h3>
            <div className="col-md-8 offset-md-2 text-left">
              <h4 className="page-section section-subheading">Kuzhambu podi</h4>
              The following ingredients should be fried and ground.This podi should be used for Kuzhambu
              preparation.
              <IngredientsKuzhambuPodi />
              <h4 className="page-section section-subheading">Paruppu Podi</h4>
              Toor dal should be fried until golden brown and grinded along with
              pepper and cumin seeds. It should be mixed in rice along with ghee
              and consumed
              <ParuppuPodi />
              <h4 className="page-section section-subheading">
                Karuvepillai Podi
              </h4>
              Curry leaves should be dry fried and powdered.This podi should be
              taken along with rice and ghee
              <KaruveppilaiPodi />
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

export default PNMarundhuPodi;
