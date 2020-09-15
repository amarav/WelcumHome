import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function BlogAdvise() {
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
            <BreadcrumbItem active>Top 10 tips for women after birth</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
           
            <div className="col-md-8 offset-md-2 text-left">
              <h4 className="page-section section-subheading">
              Top 10 tips for women after birth
              </h4>
              <div className="col-md-8 offset-md-3">
            {" "}
            <img
              className="img-fluid"
              src="/assets/img/blog/advise.jpg"
              width="350"
              height="350"
              alt=""
            />
          </div>
              <br></br>
                <h5>1. Dont catch cold.</h5>
Childbirth is a rebirth for you.In fact, your baby's first breath took everybody's breath away.
Immunity levels are very low after birth and so taking care not to be prone to catch cold or cough is important
For this, I was advised to take bath only in hot water without mixing cold water. For the first 16 days, I took
head bath on alternative days and dried my hair completely before breastfeeding, because if you catch cold, then your baby 
would too!
<br></br><br/>
<h5>2. Get all the gas out</h5>Your baby bump doesnt disappear after delivery. It leaves a void inside which gets filled up with air.
For this, I was advised to take Poondu with karupatti every night after dinner for 16 days.It works!
<br/><br/>
<h5>3. Tie your belly</h5>For normal labour mothers,its advised to tie your belly tight or use a tight belt for one month.
<br/><br/>
<h5>4. Stay cross-legged</h5>To prevent your uterus from being filled up with air, this is advised.Atleast until you recover its good 
to stay cross legged. If it really hurts,then have your legs close to each other
<br/><br/>
<h5>5. Sitz bath</h5>To support the healing process of normal-labour stutures its good to sit in a hot water basin for 10 minutes everyday
<br/><br/>
<h5>6. The 30 day bedrest</h5>For 30days,its advised for the mother to take complete bed rest to help speeden the process of recovery.
<br/><br/>
<h5>7. Country chicken ,the best healer</h5>On alternative days,new mothers are advised to take country chicken soup.This helps to regain 
the strength after delivery
<br/><br/>
<h5>8. Turmeric for bathing</h5>New mothers usually smell bad. Its good to bath using turmeric and other herbal bath powder to get rid
of the smell soon
<br/><br/>
<h5>9. Wear bra</h5>A well supportive bra is important to have firm breasts and it helps in milk secretion.
<br/><br/>
<h5>10. Engorged breasts</h5>When there is a mismatch between your milk supply and baby's demands,breasts may get engorged.
Its advised to express off the initial milk and then feed the baby.
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default BlogAdvise;
