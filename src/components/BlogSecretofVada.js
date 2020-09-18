import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function BlogSecretofVada() {
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
            <BreadcrumbItem active>Secret of Perfect Medhu vada</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
            <div className="col-md-8 offset-md-2 text-left">
              <h4 className="page-section section-subheading">
                What is the secret of perfect medhu vada?
              </h4>
              <div className="col-md-8 offset-md-3"> </div>
              <br></br>
              Medhu vadai is a famous south-indian dish. The secret of a tasty
              medhu vadai is in making it soft,crisp,attractive,light-weight and
              tastier.
              <br />
              <br />
              <h5>1. Premium Quality Dal</h5>
              The softness of a vada is in the quality of urad dal.Prefer to
              make vadas with premium quality urad dal
              <br></br>
              <div className="text-center"></div>
              <br></br>
              <h5>2. Make it crisp</h5>
              Adding a little bit of raw rice while grinding or adding raw rice
              powder before frying adds crispiness to vada<br></br>{" "}
              <div className="text-center"></div> <br></br>
              <h5>3. Soaking time</h5>
              Urad dal should be washed for 4 to 5 times and then soaked for
              minimum 2 hours.
              <br></br> <div className="text-center"></div>
              <br></br>
              <h5>4. Water quantity</h5>
              Grinding the urad dal without adding water is the
              key.However,water can be sprayed little during specific intervals.
              <br></br>
              <div className="text-center"></div>
              <br></br>
              <h5>5. Fluffy batter</h5>
              Urad dal should be well ground until batter fluffs.Using grinder
              is best.If you are using mixie,refrigerating the urad dal for 1
              hour before grinding will make it good. <br></br>{" "}
              <div className="text-center"></div>
              <br></br>
              <h5>6. Rava</h5>
              If batter becomes watery,adding a little bit of rava is preferred.
              <br></br>
              <div className="text-center"></div>
              <br></br>
              <h5>7. Hollow in middle</h5>A significant hole in the middle of
              the vada ensures that the inside portion of the vada gets cooked
              well
              <br></br> <div className="text-center"></div> <br></br>
              <h5>8.Golden brown </h5>
              Frying the vada in high flame until golden brown makes it puff up
              and light weight.<br></br> <div className="text-center"></div>{" "}
              <br></br>
              <h5>9. The original Ingredients</h5>
              The original recipie of medhu vadai consists of ural
              dal,ginger,asoefetida,salt only. Some of them prefer adding
              pepper,curry leaves, cumin seeds,onion,coriander too.<br></br>{" "}
              <div className="text-center"></div> <br></br>
              <h5>10. Beginner's trick</h5>
              If you are not used to put the vadai in oil directly, take an
              eversilver dosa tawa and apply little water and then make holes in
              the batter over it. Gently slide down the batter in tawa in the
              oil. <br></br> <div className="text-center"></div> <br></br>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogSecretofVada;
