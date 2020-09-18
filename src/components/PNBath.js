import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import {HerbalBath,AfterBath,
    AfterBathBaby,KuzhiyalPodi,Pugai
} from "./PNIngredients.js";

function PNBath() {
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
            <BreadcrumbItem active>Pathiya Kuzhiyal</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Pathiya Kuzhiyal</h3>
            <h3 className="section-subheading text-muted">
              The bath procedure
            </h3>
            <div className="col-md-8 offset-md-2 text-left">
            <h4 className="page-section section-subheading">Kuzhiyal Podi/Herbal Bath powder</h4> 
              The below ingredients should be finely powdered and used for bathing by the mother
              <KuzhiyalPodi/>
              <h4 className="page-section section-subheading">The 16 day bath procedure</h4> 
              The below ingredients should be well boiled in water the previous night.Again it should be boiled
              before bathing the next day. Normal water should not be mixed with this water. Even for taking headbath,
              only hot water should be used.
              <HerbalBath/>
              <br/><br/>
              <h4 className="page-section section-subheading">The 16 day after-bath procedure</h4> 
              The below ingredients should be grinded and mixed with honey and consumed
              <AfterBath/>
              <h4 className="page-section section-subheading">Dhristi for baby after bathing</h4> 
              The below ingredients should be used for dhristi for baby after bathing
              <AfterBathBaby/>
              <h4 className="page-section section-subheading">Pugai Poduthal</h4>
              The following ingredients need to be placed in cup sambrani and shown for mother and baby's hair after
              head bath
              <Pugai/>
             
            
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

export default PNBath;
