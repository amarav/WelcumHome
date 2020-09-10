import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function BlogSecretofBriyani() {
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
            <BreadcrumbItem active>Secret of Briyani</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
           
            <div className="col-md-8 offset-md-2 text-left">
              <h4 className="page-section section-subheading">
              What is the secret of tasty briyani?
              </h4>
              <div className="col-md-8 offset-md-3">
            {" "}
            <img
              className="img-fluid"
              src="/assets/img/blog/briyani.jpg"
              width="350"
              height="350"
              alt=""
            />
          </div>
              <br></br>
              The secret of any briyani, be it veg or non veg lies, needs some basics to be followed.
              <br/><br/>
              <h5>1. Golden brown onions</h5>
              Fried Onions add an authentic flavour to the briyani.
              Be it chicken, mutton, prawns, mushroom, peas or any veg briyani, this becomes vital to the process of briyani making. 
              Frying the onions till golden brown without charring is really important.
              <br></br> 
              <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/onion.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div>
            <br></br>
              <h5>2. Extract the stock</h5>
              When it comes to chicken or mutton briyani, a lot of us cook the briyani in pressure cooker for a whistle
              or two, depending on your style along with the pieces. Cooking the raw meat separately and adding the 
              Chicken/ Mutton stock to the briyani gives a great flavour. Try this step.
              <br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/stock.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div> <br></br>
              <h5>3. Fresh ginger-garlic paste</h5>              
              Ginger-garlic paste is the game changer. Freshly prepared ginger garlic paste has no other substitutes.
              Most importantly, the paste should be ground with equal quantity of ginger and garlic.
              <br></br>   <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/garlic.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div><br></br>
              <h5>4. Correct amount of spices</h5>              
              Adding the required and correct amount of spices makes a huge difference to the taste. Apart from the regular cinnamon and cloves, 
              Fresh bay leaf (rather than dried) , Broken Star anise, Marati mokku add a good flavour.
              <br></br> 
              <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/spice.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div>
               <br></br>
              <h5>5. Smashy tomatoes</h5>              
              Next to frying onions,smashy tomatoes are vital for enhancing the taste. Some of them even squeeze it with 
              hand and add it while cooking. This ensures the juice is well mixed with the other ingredients.
              <br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/tomato.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div><br></br>
              <h5>6. Curd and Lemon</h5>
              Curd softens meat. Definitely worth to add curd.Lemon gives a tangy taste. Adding it at the end enhances the taste.
              Too much of lemon will spoil the taste. Also squeezing the sides of lemon will give a bitter taste.
              <br></br> 
              <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/lemon.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div>
               <br></br>
              <h5>7. Ghee</h5>
              Greasing the cooker/ pan with ghee prevents burning. Oil, ghee, Basmati rice are the essentials.
              <br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/ghee.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div> <br></br>
              <h5>8.Unbroken basmati rice</h5>
              Basmati rice should not be soaked for more than 10 minutes. 
              And after adding the rice finally, it should not be stirred often. This ensures the rice doesnt break off.
              <br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/basmati.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div> <br></br>
              <h5>9. Required Salt</h5>
              While adjusting salt at the end after adding rice and water stock, it should be a bit salty. This ensures the rice gets proper salt and edible enough
              <br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/salt.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div> <br></br>
              <h5>10. Low flame</h5>
              Finally making the entire frying of onions and tomatoes in **low flame** is the secret of any briyani!!
              <br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/flame.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div> <br></br>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default BlogSecretofBriyani;
