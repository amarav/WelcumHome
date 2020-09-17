import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function PNIncmilk() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/blog">Blog</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Top 10 tips to increase breast milk secretion</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
           
            <div className="col-md-8 offset-md-2 text-left">
              <h4 className="page-section section-subheading">
              Top 10 tips to increase breast milk secretion
              </h4>
              <div className="col-md-8 offset-md-3">
            {" "}
            <img
              className="img-fluid"
              src="/assets/img/blog/milksecrete.jpg"
              width="350"
              height="350"
              alt=""
            />
          </div>
              <br></br>
                <h5>1. Frequent nursing.</h5>
Nursing frequently increases breast milk secretion.The more the baby sucks,more the milk.Particularly,night feeding
increases prolactin levels.Milk at night are richer in fat content and are tastier for babies. This makes them to 
suck more.Night feedings are important for your baby to gain weight too.
<br></br><br/>
<h5>2. Deal with stress</h5>
Endless feeding sessions,pee and poop is all new to new mothers.However,Stress and prolactin levels are inversely proportional. The more stressful you are, the less milk you secrete.
Find ways to deal with dress by listening to music or doing your favorite activity.Nurse in a calm environment
which makes you feel good.Look at your baby while nursing.The more happier you are,more the milk.
<br/><br/>
<h5>3. Warm shower in the evening</h5>
Some mothers feel that their milk quantity reduces in the evening.Fatty milk during late afternoon and evening may
make your breast feel less fuller and giving you the illusion that you are not secreting enough.Exclusive pumping 
mothers will be able to relate to this. A warm shower in the evening makes you feel relaxed and lessens the fatigue
of your long day.
<br/><br/>
<h5>4. Lukewarm liquids before feeding</h5>
Consuming lukerwarm liquids like milk,soup,water ten minutes before feeding really helps.
<br/><br/>
<h5>5. Warm compress</h5>
Using warm compress over breasts removes any block in the milk flow.It also helps in engorged breasts.
In the initial days of feeding, its recommended to use a warm compress before feeding.If you are pumping milk,
you will be able to feel the difference in the flow.
<br/><br/>
<h5>6. Beetle leaf</h5>Beetle leaf should be shown in slight flame and then tied around the breast works wonders.This is the traditional
way of tamizh mothers to increase secretion.
<br/><br/>
<h5>7. Lactation boosters</h5>
<Link to="/lactation">Lacatation boosting foods</Link> should be included as part of diet. There are supplements in sidda medicine which boost 
milk secretion. <Link to="/PNLegiyam"> Legiyam</Link> and <Link to="/PNPathiyaDiet"> post-natal diet </Link>play a vital role in this.Check out the <Link to="/LactationDietChart">diet routine</Link> to follow during breastfeeding.
<br/><br/>
<h5>8. Massage</h5>Massaging and tingling breasts before feeding signals to the brain that your baby is ready to feed.
Once your supply establishes well, you will notice that once you just tingle the breasts,milk will start to leak.Flat nipples may cause you to improperly latch.Gently stimulating the nipple and pulling it
outward makes it erect.
<br/><br/>
<h5>9. Well-supportive bra</h5>
Breasts should be firm for good secretion.A well supportive bra which is neither too tight nor too loose should be worn.
Nursing pads are useful in the initial weeks if breasts leak. A well fitting bra ensures that while feeding on one 
side doesnt make the other breast to leak.
<br/><br/>
<h5>10. Sleep</h5>Day time naps can make you feel relaxed. Most mothers swear that breasts feel fuller after
they wake up from sleep. Relaxation,rest and sleep is the key.
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default PNIncmilk;
