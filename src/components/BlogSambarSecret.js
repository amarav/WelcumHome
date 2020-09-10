import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function BlogSecretofSambar() {
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
            <BreadcrumbItem active>Secret of Tasty sambar</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
           
            <div className="col-md-8 offset-md-2 text-left">
              <h4 className="page-section section-subheading">
              What is the secret of tasty Sambar?
              </h4>
              <div className="col-md-8 offset-md-3">
            {" "}
            <img
              className="img-fluid"
              src="/assets/img/blog/sambar.jpg"
              width="350"
              height="350"
              alt=""
            />
          </div>
              <br/><br/>
              <h5>1. Small onions</h5>
              Use small onions for making sambar. This gives an authentic taste to the recipie. Small onions
              are also a rich source of iron.
              <br></br> 
              <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/smallonion.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div>
            <br></br>
              <h5>2. Cook Dal well</h5>
              Pressure cook Toor Dal separately until mushy. It should not be undercooked. Use the excess water in Dal for making Paruppu rasam.
              Once the veggies are cooked, add the Toor Dal after that. Boil well and keep stirring in between to avoid sticking to the pan
               <br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/daal.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div> <br></br>
              <h5>3. Tamarind - Not more,not less </h5>              
              Tamarind taste should not dominate the dish, it should only enhance the flavour.
              If added more, it will taste like puli kuzhambu. If added less, it will be like plain Paruppu
              kuzhambu. Correct quantity is they key! With practice, you will be able to figure it out.
              Tamarind extract should be added once the veggies are half cooked. If added in the beginning, it will delay the cooking of veggies.
               <br></br>   <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/tamarind.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div><br></br>
              <h5>4. Bring in the sour taste</h5>              
              Sour taste of sambar should be from the tomatoes and not from the tamarind extract.
              I usually squeeze the tomatoes while preparing sambar or rasam. Tomatoes should turn mushy
              while cooking and the juice should be mixed with the other ingredients well.<br></br> 
              <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/tomato.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div>
               <br></br>
              <h5>5. Drumstick-Brinjal Combo</h5>              
              Combination of Drumstick and Brinjal makes tastier sambar. Yes, the vegetables added indeed change
              the taste of sambar.Some people add all the vegetables together but it doesnt taste great. My grandmother
              says this is the best combo for sambar. Drumstick gives a great flavour, no wonder its preferred to be added
              while preparing nonveg dishes too!<br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/veg.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div><br></br>
              <h5>6. Carrots add sweetness</h5>
              Carrots add a sweetness to sambar, So prefer adding it for Tiffin sambar and not for rice sambar.
              Howvever if you prefer sweet taste of sambar, you can go for adding carrots, also adding more onions and 
              brown sugar too!<br></br> 
              <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/carrot.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div>
               <br></br>
              <h5>7. Little Ghee</h5>
              Fry the tempering items using Ghee - mustard, asoefitida, curry leaves using ghee. 
              It enhances the taste greatly. The tempering should be done at the end of the preparation.
              Dont add too much of ghee as it changes the taste entirely<br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/ghee.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div> <br></br>
              <h5>8. Tempering matters</h5>
              Prepare and use Thaalippu vadagam for tempering. It adds an authentic flavour to the dish.
              Preparation is a very long process and requires a lot of patience. But, worth it!
              While tempering, add a few Fenugreek seeds but make sure not to char it. It increases aroma. For diabetic patients, it's good to add one tbsp extra! <br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/temper.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div> <br></br>
              <h5>9. Jaggery</h5>
              Add a bit of jaggery for tiffin sambar to raise the taste. This should be added towards the end before tempering.
              Some prefer brown sugar too.<br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/jaggery.jpg"
              width="350"
              height="350"
              alt=""
            />  
              </div> <br></br>
              <h5>10. Dont add more water</h5>
              Sambar should not be watery. One spoon of freshly grounded channa Dhal, Coriander seeds(both in equal quantity) along with red chillies gives thickness to the curry and gives a fresh flavour<br></br>  <div className="text-center">
              <img
              className="img-fluid"
              src="/assets/img/blog/water.jpg"
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

export default BlogSecretofSambar;
