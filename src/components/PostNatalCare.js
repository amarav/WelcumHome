import React from 'react'
import { Breadcrumb, BreadcrumbItem, } from 'reactstrap';    
import { Link } from 'react-router-dom';
import IngredientsKuzhambuPodi,{ThreeDayMarundhu,PoonduLegiyam,PrasavaLegiyam,VendayaKazhi,HerbalBath,AfterBath,
    AfterBathBaby,DhristiSapadu,ParuppuPodi,KaruveppilaiPodi,KuzhiyalPodi,RubiAmla,PalaThailam,SittramuttiThailam,
    MilaguPodiKuzhambu,PathiyaRasam,PoonduKuzhambu,Pugai,AvoidFoods} from './PNIngredients.js'
import PNPortfolio from './PNPortfolio'


function PostNatalCare()
{
    return(
    <div>
     
     <div className="container">
          <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Postnatal Care</BreadcrumbItem>
                </Breadcrumb> 

               
               </div>
               <div className="col-10 col-md m-1"> 
               <section className="page-section bg-light" >
            
            <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Post-natal diet</h3>
            <h3 className="section-subheading text-muted">The complete postpartum care
            </h3>
            </div></div>
            </section>
                <div className = "col-md-8 offset-md-4">        <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/postpartumbaby.jpg")}
                    width="350" height="350" alt=""
                  />
                  </div>
                  
            <div className = "col-md-8 offset-md-2">
            <br/>
            Post-partum is the phase after delivery and usually termed as the Fourth trimester. After nine months 
            of pregnancy journey and a tough delivery,a new mother's body has undergone significant and drastic changes.
            Meeting the demands of a newborn and taking care of herfself is indeed a difficult phase for a new mother.
            During this transition of motherhood, its important to remember that this phase will pass and do not miss out
            on taking care and improving your health.
            <br></br><br></br>
            With proper diet and supplements, its possible to regain your strength quickly. Its much required for your body to heal quicker and completely.
            This phase is important so that you stay fit for long term and not to feel exhausted for your next pregnancy if your planning.
            Your body and especially uterus takes time to heal and its recovery needs to be supported.
            <br></br><br></br>
            
            </div>

            <div className="col-10 col-md m-1"> 
               
               <PNPortfolio/>
               </div>

            <div className = "col-md-4 offset-md-2">
                      <div className="card h-100">
                        <div className="card-body">
                          <h4 className="card-title">Buy our Post-natal kit</h4>
                          <p className="card-text text-center">
                              <ul>
                                  <li>Garlic legiyam</li>
                                  <li>Dried ginger legiyam</li>
                                  <li>Mustard legiyam</li>                                  
                                  <li>Prasava legiyam</li>
                                  <li>Milagu Podi</li>
                                  <li>Vendhaya Kazhi Podi</li>
                                  <li>Marundhu kuzhambu Podi</li>
                              </ul>
                          </p>
                        </div>
                        <div className="card-footer">
                        <Link to='/PNLegiyam'  className="btn btn-success">BUY NOW</Link>
                        </div>
                      </div>
            <section className="page-section bg-light" >
            
            <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Post-natal diet</h3>
            <h3 className="section-subheading text-muted">The complete postpartum care
            </h3>
           
              <div className = "col-md-8 offset-md-2 text-left">
                                           
             
              
              <h4 className="page-section section-subheading">Rubi Amla</h4>  
              The below ingredients 
              <RubiAmla/>
              <h4 className="page-section section-subheading">Palaa Thailam</h4> 
              <PalaThailam/> 
              <h4 className="page-section section-subheading">Sitraamutti Thailam</h4> 
             <SittramuttiThailam />
              <div className = "col-md-8  offset-md-2  text-left">
             <br/><br/>
             <h5>DISCLAIMER</h5>
             All these information are based on the traditions followed in our family and are no way responsible
             for illness or harm caused to you or your baby.Always seek advice from doctor,siddha doctor,lactation consultant and pediatrician.
             This is followed for normal labour only and for c section mothers it is advised to take only after surgical wounds
             are healed. Please consult to siddha doctor before taking any of these.
             </div>
              </div>
            
              </div> 
              </div>
              </section>
              
            </div>
            
            </div>
    </div>
    </div>
    );
}

export default PostNatalCare;