import React from 'react'
import { Breadcrumb, BreadcrumbItem, } from 'reactstrap';    
import { Link } from 'react-router-dom';
import IngredientsKuzhambuPodi,{ThreeDayMarundhu,PoonduLegiyam,PrasavaLegiyam,VendayaKazhi,ParuppuPodi,
    MilaguPodiKuzhambu,Pugai} from './PNIngredients.js'

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
                <div className = "col-md-8 offset-md-4">      1      <img
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
            The diet plan for the first three days and first 28 days after delivery is drafted below.
            During this time, along with the diet, legiyam plays a vital role in the process of healing and recovery.
            <br></br><br></br>
            
            <section className="page-section bg-light" >
            <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Post-natal diet</h3>
            <h3 className="section-subheading text-muted">The complete postpartum care
            </h3>
              <div className = "col-md-8 offset-md-2 text-left">
              <h4 className="page-section section-subheading">Kuzhambu podi</h4>
              <IngredientsKuzhambuPodi />              
              <h4 className="page-section section-subheading">The first three-day marundhu</h4> 
              <h4 className="page-section section-subheading">Kadugu Legiyam</h4> 
              The following ingredients need to be grinded and taken for the first 3 days after delivery.
              This helps to clean the uterus. After taking the marundhu, water should not be taken for half an hour,
              otherwise it may lead to stomach upset.<br/><br/>              
              <ThreeDayMarundhu/>              
              <h4 className="page-section section-subheading">Poondu Legiyam</h4> 
              In Ginger juice extract, garlic pods should be boiled.Once boiled,karupatti should be mixed with it 
              along with ghee.This should be taken for the first 3 days after delivery.
              This helps to clean the uterus. After taking the marundhu, water should not be taken for half an hour,
              otherwise it may lead to stomach upset.<br/><br/>  
              <PoonduLegiyam/>                
              <h4 className="page-section section-subheading">Prasava Legiyam</h4>
              <PrasavaLegiyam/>
              <br/><br/>            
              <h4 className="page-section section-subheading">Aarathi for baby</h4>
              <ul>
                  <li>Neem leaf</li>
                  <li>Turmeric</li>
                  <li>Chunnambu</li>
                  <li>Thiri</li>
              </ul>                            
              <h4 className="page-section section-subheading">Sukku Legiyam</h4>
              Sukku should be dried well and then finely grinded without any coarse particles. Karupatti should be 
              mixed with water and filtered and kept in medium heat. The dried powder should be mixed little by 
              little along with ghee and prepared like a paste to get the legiyam consistency                                        
              <h4 className="page-section section-subheading">Vendhaya kazhi</h4>
              The below ingredients should be washed well and grinded in traditional ammi.It should then be mixed 
              with karupatti in medium heat along with ghee and made like a paste.
              <VendayaKazhi />                                                     
              <h4 className="page-section section-subheading">Paruppu Podi</h4>
              Toor dal should be fried until golden brown and grinded along with pepper and cumin seeds.
              It should be mixed in rice along with ghee and consumed
              <ParuppuPodi />                                                                 
              <h4 className="page-section section-subheading">Milagu Podi Kuzhambu</h4>
              Pepper and Jeera need to be fried and grinded. It can be used while preparing kuzhambu.
              Kuzhambu preparation:<br></br>
              Fry one large size tomato in ghee. Add a tumbler of water and add one spoon of the prepared powder.
              This should be used with rice and consumed.The same kuzhambu should be used as sidedish for idly.
              <MilaguPodiKuzhambu/>
                                                                         
              <h4 className="page-section section-subheading">Pugai Poduthal</h4>
              <Pugai/>
              <h4 className="page-section section-subheading">The first 3 day diet</h4>
               <ul>
                   <li>For the first 3 days after delivery, at early morning around 6am,ginger  be consumed along with honey.</li>
                   <li>For the first 3 days after delivery, at night around 10pm, turmeric balls ( size of amla )  should be taken.To prepare this,turmeric should be mixed with 
                   lukewarm water and taken.If taken,the next day morning, ginger must be taken compulsory</li>
                   <li>For the first 3 days after delivery, at night around 10:30pm, Poondu legiyam should be taken.If taken,the next day morning, ginger must be taken compulsory.Water should be taken only 1/2 after taking legiyam</li>
                   <li>For the first 3 days after delivery,at night around 11pm, Sukku legiyam should be taken.Water should be taken only 1/2 after taking legiyam</li>
               </ul>
               
              <h4 className="page-section section-subheading">The first 28 day diet</h4>
              <ul>
                  <li>For the first 28 days after delivery, Garlic should be fried without oil/ghee or shown 
                  directly in flame and consumed along with karuppatti</li>
              </ul>
              <ul>
                  <li>After 28 days of delivery,for three days Kadugu legiyam should be consumed.
                  If taken,the next day morning, ginger must be taken compulsory.Water should be taken only 1/2 after taking legiyam</li>
                  <li>After 35 days of delivery, Vendhaya Kazhi should be consumed once in 2 weeks as long as you breastfeed.
                  If taken,the next day morning, ginger must be taken compulsory.Water should be taken only 1/2 after taking legiyam</li>
              </ul>
              <h4 className="page-section section-subheading">Foods to avoid for first 28 days</h4>
              Following foods should be avoided during the first month as mothers digestive system and immune system
              is weak and baby's GA tract isnt completely developed
              1.Spinach
              2.Egg
              3.Dried fish 
              4.Gassy foods like potato,Vaalakai
              5.Hot liquids/foods
              6.Cold foods/liquids, even curd rice,lemon rice 
              7.Coconut
              8.Dosa
              9.Green chilly.Pepper is preferred.Small amount of red chilly is allowed
              10.Pulses
              11.Dried fish. It may cause allergies and itches in your unhealed wounds
              12.Daal.Moong daal is preferred.
              13.Oil. Ghee is prefferd
              14.Raw vegetables
              15.Non veg not for first 15 days
              16.Fried food
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