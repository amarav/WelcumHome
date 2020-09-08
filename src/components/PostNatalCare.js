import React from 'react'
import { Breadcrumb, BreadcrumbItem, } from 'reactstrap';    
import { Link } from 'react-router-dom';
import IngredientsKuzhambuPodi,{ThreeDayMarundhu,PoonduLegiyam,PrasavaLegiyam,VendayaKazhi,HerbalBath,AfterBath,
    AfterBathBaby,DhristiSapadu,ParuppuPodi,KaruveppilaiPodi,KuzhiyalPodi,RubiAmla,PalaThailam,SittramuttiThailam,
    MilaguPodiKuzhambu,PathiyaRasam,PoonduKuzhambu,Pugai,AvoidFoods} from './PNIngredients.js'
import PNPortfolio from './PNPortfolio'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'


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
            The diet plan for the first three days and first 28 days after delivery is drafted below.
            During this time, along with the diet, legiyam plays a vital role in the process of healing and recovery.
            <br></br><br></br>
            
            </div>

            <div className="col-10 col-md m-1"> 
               
               <PNPortfolio/>
               </div>

            <div className = "col-md-8 offset-md-2">
           
            <section className="page-section bg-light" >
            
            <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Post-natal diet</h3>
            <h3 className="section-subheading text-muted">The complete postpartum care
            </h3>
           
              <div className = "col-md-8 offset-md-2 text-left">
              <IngredientsKuzhambuPodi/>
               <h4 className="page-section section-subheading">The first three-day marundhu</h4> 
              <h4 id="kadugulegiyam" className="page-section section-subheading">Kadugu Legiyam</h4> 
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
              All the above ingredients need to be dry fried and grinded finely to prepare the marundhu podi.In ginger juice extract,cashews should 
              be boiled and then the skin and seeds should be separated.Old karupatti should be added to this and heated well.
              This mixture should be filtered and after it reaches Ilam Paagu stage, the grinded marundhu podi should be 
              added to this and mixed well until legiyam padham is reached. This is the stage to turn off the stove.
              Add 100 gm ghee to this and kept in an air-tight container.Everyday after dinner this legiyam should be consumed 
              at night ( one agappai quantity ). Water should not be taken for 1/2 hour after taking legiyam.

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

              <h4 className="page-section section-subheading">Karuvepillai Podi</h4>
              Curry leaves should be dry fried and powdered.This podi should be taken along with rice and ghee
              <KaruveppilaiPodi/>
              <h4 className="page-section section-subheading">Poondu Kuzhambu</h4>  
              The below ingredients need to be grinded and stored in air-tight container.
              While preparing kuzhambu,this podi needs to be added                                      
              <PoonduKuzhambu/>  
              <h4 className="page-section section-subheading">Pathiya Rasam</h4>  
              The below ingredients should be boiled in water. Tamarind should not be added and 
              rasam should NOT be tempered with mustard and red chilly
              <PathiyaRasam/>  
              
              <h4 className="page-section section-subheading">Rubi Amla</h4>  
              The below ingredients 
              <RubiAmla/>
              <h4 className="page-section section-subheading">Palaa Thailam</h4> 
              <PalaThailam/> 
              <h4 className="page-section section-subheading">Sitraamutti Thailam</h4> 
             <SittramuttiThailam />
              <h4 className="page-section section-subheading">Kuzhiyal Podi</h4> 
              The below ingredients should be brought to oil stage and then used for bathing by the new mother
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
              <h4 className="page-section section-subheading">Dhristi Sapadu</h4> The below ingredients need to be
              dry fried without adding oil dnd should NOT temper with mustard and then powdered finely.This should be 
              mixed in rice along with ghee and consumed. This should be given to mother
              on the 16th day. Interesting this about this is, when mother takes one handful and brings near mouth,it
              should be grabbed from her hands and circled over mothers head for 3 times and given to dog.Important thing
              to note is, crow should not consume this dhristi food.
              <DhristiSapadu/>
              <h4 className="page-section section-subheading">Pugai Poduthal</h4>
              <Pugai/>
              <h4 className="page-section section-subheading">The first 3 day diet</h4>
               <ul>
                   <li>For the first 3 days after delivery, at early morning around 6am,ginger  be consumed along with honey.</li>
                   <li>For the first 3 days after delivery, at night around 10pm, turmeric balls ( size of amla )  should be taken.To prepare this,turmeric should be mixed with 
                   lukewarm water and taken.If taken,the next day morning, ginger must be taken compulsory</li>
                   <li>For the first 3 days after delivery, at night around 10:30pm, Poondu legiyam should be taken.If taken,the next day morning, ginger must be taken compulsory.Water should be taken only 1/2 hour after taking legiyam</li>
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
              <h4 className="page-section section-subheading">What to avoid for first 28 days</h4>
              Following foods should be avoided only during the first month as mothers digestive system and immune system
              <br></br>
              <br></br>
              <AvoidFoods/>
              </div>

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
              
              </section>
              
            </div>
            
            </div>
    </div>
    </div>
    );
}

export default PostNatalCare;