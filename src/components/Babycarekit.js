import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

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
            <BreadcrumbItem active>Baby care kit</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
          <h3 className="section-heading text-uppercase">BABY CARE KIT</h3>
            <h3 className="section-subheading text-muted">The complete newborn baby care
            </h3>
            <div className="col-md-8 offset-md-2 text-left">
              
              <div className="col-md-8 offset-md-3">
            {" "}
           
          </div>
          
          <div className="col-md-8 offset-md-2">
                      <div className="card">
                        <img className="card-img-top" src={require("../assets/img/kit/babycarekit.jpg")}  width="350" height="350" alt=""/>                        <div className="card-body">
                          <h4 className="card-title">Baby care kit</h4>
                          <p className="card-text">
                            <ul>
                                <li>Urai maathirai</li>
                                <li>Vasambu sutta saambal</li>                                
                                <li>Vasambu for hands</li>
                                <li>Karuvelangai pottu</li>
                                <li>Jaathikkai</li>
                                <li>Maasikkai</li>
                                <li>Ucchi Podi</li>
                            </ul>  
                            </p>
                           </div>
                        <div className="card-footer">
                        <Link to='/contactus'  className="btn btn-success">BUY NOW</Link>
                        </div>
                      </div>
                    </div>
              <br/><br/>
              <h5>1. Urai maathirai</h5>
              Urai maathirai is a siddha medicine that boosts up the immune system of the baby. Children who took
              this stay free from health issues like respiratory infections, gas trouble, common cold and cough.
              A pinch of it is advised to be given for babies after bath.
              <br></br> 
              <div className="text-center">
             
              </div>
            <br></br>
              <h5>2.Vasambu sutta saambal</h5>
             Vasambu, the traditional name for it is "Pillai valarppaan".This is given for babies to boost immunity,
             improve digestion,relieve constipation and prevents colic in babies.This is important for the healthy growth
             of the baby..
                    <br></br>  <div className="text-center">
             
              </div> <br></br>
              <h5>3. Vasambu for hands </h5>              
              Vasambu is tied in hands of the baby once the baby is born. Even the smell of it reduces the baby spitting up.
              Babies bite it since its in their hands and its said even small amounts of it helps baby grow up healthy.
               <br></br>   <div className="text-center">
             
              </div><br></br>
              <h5>4. Karuvelangai pottu</h5>              
             The traditional way of keeping bindi/pottu for babies is using Vengai paal pottu. This is made out of the 
             milk or serum of tree named Vengai. This does not have any side effects or skin allergy.
             <br></br> 
              <div className="text-center">
             
              </div>
               <br></br>
              <h5>5. Jaathikkai</h5>              
              Jaathikai prevents stomach-upset in babies. It prevents colic in babies and a pinch of it will stop 
              diarrhoea for babies.
              <br></br>  <div className="text-center">
             
              </div><br></br>
              <h5>6. Maasikkai</h5>
              Maasikaai helps to regulate the urine output.It also improves the digestion in babies.<br></br> 
              <div className="text-center">
             
              </div>
               <br></br>
              <h5>7. Ucchi Podi</h5>
               Ucchi podi/Rasnadi chooranam is applied on baby's crown after head bath. It absorbs all the moisture
               and prevents headache,cold and cough for babies<br></br> 
               <div className="text-center">
             
              </div> <br></br>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Babycarekit;
