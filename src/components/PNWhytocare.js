import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function PNWhytocare() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/Postnatalcare">Post-natal care</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Why Postnatal care?</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
            <div className="col-md-8 offset-md-2 text-left">
              <h4 className="page-section section-subheading">
                Why Postnatal care is important?
              </h4>
              <div className="col-md-8 offset-md-3"> </div>
              <br />
              <br />
              <h5>1. Gain strength </h5>
              Labour is a tough journey for both mother and baby.This transition
              period is important for the mother to gain strength and meet the
              demands of the newborn as well as sustain her wellness. 
              <Link to="/PNLegiyam">Legiyam</Link> is
              loaded with ant-oxidants,vitamins and micro-nutrients and little
              quantity of it will reduce the body pain and reduces fatigue.<Link to ="/Pathiya kuzhiyal"></Link> should be followed 
              to get rid of the hospital smell and  rejuvenate the body.
              <br></br>
              <div className="text-center"></div>
              <br></br>
              <h5>2. Regain pre-pregnancy body</h5>
              During pregnancy, almost all of the body functions have changed to
              adapt the baby's growth in womb. After delivery, all these dynamic
              functions need to revert to the original state and meet the
              physiological conditions. Slowly getting back to normal is good for the mother.
              <Link to="/PNPathiyaSapadu">Pathiya sapadu</Link> should be followed for the first 28 days to speedup the recovery <br></br>{" "}
              <div className="text-center"></div> <br></br>
              <h5>3. Support lactation</h5>
              Healthy lifestyle and nutrition is important to achieve optimum
              breastfeeding. Breast milk is the ideal food for babies upto six
              months.<Link to="/lactation">Lactation boosters</Link> should be included as part of diet to sustain
              milk production. <br></br> <div className="text-center"></div>
              <br></br>
              <h5>4. Boost immunity</h5>
              Women in the early neo-natal period is at high risk of infections
              including breast-infections which may cause harm to mother and the
              baby. Hence, it is vital to support the mother with essential
              nutrients and a well balanced <Link to="/LactationDietChart">lactation diet</Link><br></br>
              <div className="text-center"></div>
              <br></br>
              <h5>5. Improve digestion</h5>
              Improperly digested food will cause harm to both mother and
              baby.Well digested food helps baby gain weight, prevents colic for
              babies. For mother, it relieves constipation in the initial weeks
              after delivery and releases the gas.
              <Link to="/PNPathiyaDiet">Pathiyam diet</Link> should be followed in the initial weeks<br></br>{" "}
              <div className="text-center"></div>
              <br></br>
              <h5>6. Infant care </h5>
              Infants wholely depend on their mother for immunity.Within the
              womb,baby received all the protection required from maternal
              antibodies and was defended from all the harmful infections. After
              birth, baby depends on breast milk and colustrum(secreted in first
              3 days after delivery) which give the natural protection and
              prevent infection in newborn.To support the immunity of the baby
              and help the immune system to develop, <Link to="/PNPathiyaDiet">postnatal diet</Link> and 
              <Link to="/Babycarekit">baby care</Link> is very
              critical<br></br>
              <div className="text-center"></div>
              <br></br>
              <h5>7. Balance hormones</h5>
              Pregnancy is a roller coster of hormonal changes and after
              delivery post partum changes in the body creates an imbalance in
              hormones and thats why most women suffer from thyroid issues after
              delivery. Post partum depression is one of the side effects too.
              To regulate hormones, rich nutrients are necessary which are found
              in  <Link to="/PNLegiyam">Legiyam</Link> and <Link to="/PNMarundhuPodi">marundhu podi</Link> .<br></br>{" "}
              <div className="text-center"></div> <br></br>
              <h5>8. Cleanse uterus</h5>
              Some amount of lochia(discharge) is common in the neonatal
              period.Detoxification of the debris from the uterus should be
              complete,otherwise it will lead to
              polycysts,preeclampsia,excessive bleeding and other uterus related
              issues.  <Link to="/PNLegiyam">Mustard legiyam</Link> helps with this.<br></br>{" "}
              <div className="text-center"></div> <br></br>
              <h5>9. Cope up anaemia</h5>
              During delivery, there is lots of blood loss from where the
              placenta was attached to the mother’s uterus.This may leae the
              mother aneamic.To prevent post-partum haemorrhage within 7 days of
              delivery is very important. Karupatti(Palm jageery) which is an
              important ingredient in jagerry is rich in iron and helps to cope
              up with anaemia.<br></br> <div className="text-center"></div>{" "}
              <br></br>
              <h5>10. Prevent long term complications</h5>
              Taking proper care during the neonatal period lessens breast
              infections,uterine issues and other diseases including breast and
              ovarian cancer.Proper care also ensures the body regains to
              original state and support body for next pregnancy to be healthy
              and safe. <Link to="/PNLegiyam">Prasava legiyam</Link> along with <Link to="/PNPathiyaDiet">pathiya diet</Link>  is important for this<br></br> <div className="text-center"></div> <br></br>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PNWhytocare;
