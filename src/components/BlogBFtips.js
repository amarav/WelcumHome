import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function BlogBFtips() {
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
            <BreadcrumbItem active>Top 10 breastfeeding tips</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <section className="page-section bg-light">
        <div className="container-fluid">
          <div className="text-center">
            <div className="col-md-8 offset-md-2 text-left">
              <h4 className="page-section section-subheading">
                Top 10 breastfeeding tips
              </h4>
              <div className="col-md-8 offset-md-3">
                <img
                  className="img-fluid"
                  src="/assets/img/blog/milksecrete.jpg"
                  width="350"
                  height="350"
                  alt=""
                />
              </div>
              <br></br>
              <h5>1. Feeding pillow </h5>
              Using feeding pillow is one of the best ways to make you and baby
              comfortable. It helps you in positioning the baby well. Its
              helpful when you want to feed in football hold or when you have
              twins.Normal pillows may keep sliding and make you take extra
              care.
              <br></br>
              <br />
              <h5>2. Burping</h5>
              There are times when baby cries during feeding or refuses to feed
              after sucking a few times.It may be because of the air bubble
              thats caught up inside and burping the baby before and after
              feeding works.Some of them are very religious about burping
              mid-feed.Babies tend to take more milk if burped and stay less
              fussy frequently.
              <br />
              <br />
              <h5>3. Fast let-down</h5>
              Some mothers have fast let-down during the intial weeks after
              delivery and the baby is too small to cope up with the speed. It
              would be difficult for the baby to swallow so much milk and thus
              causing him to cough during feeding. Holding tight near the
              nipples by making a c hold or scissors hold slows down the
              flow.Some mothers prefer to express off the initial milk and then
              feeding.
              <br />
              <br />
              <h5>4. Spitting up</h5>
              Babies actually dont know most of the time how much milk they
              need. They like to suck and drink more than stomach full. This
              causes babies to spit up, just like a tank overflow. Another
              reason could be due to burps.
              <br />
              <br />
              <h5>5. Proper latch</h5>
              Improper latch may make the nipples to come out of the baby's
              mouth during feeding and making you to feel you probably dont have
              milk. Ideally if you latch properly, your baby should be
              comfortable in drawing more milk.
              <br />
              <br />
              <h5>6. Feeding pump</h5>
              Feeding pump is of great help especially when your nipple hurts or
              baby doesnt latch or for any reason baby is refusing to
              breastfeed. It could be your choice and not opting for formula
              milk.
              <br />
              <br />
              <h5>7. Feeding position</h5>
              Some mothers feel that babies prefer right breast than left
              breast.Its probably due to the position he is refusing one of the
              breasts. You could try feeding in different position for the
              breast that is refused. If your comfortable feeding in
              cross-cradle on the right breast, try the football hold on the
              left breast. By this way, baby would be in the same position and
              only the way you place him would change.
              <br />
              <br />
              <h5>8. Avoiding hunch</h5>
              Its common for mothers to crouch their shoulders while feeding.
              This is only going to add extra tension to your upper body and add
              to your fatigue.Support your back well to keep you comfortable for
              your frequent and endless feeding sessions.
              <br />
              <br />
              <h5>9. Avoid touching baby's head</h5>
              Its good to avoid touching the baby's head in the initial
              weeks.Cradle hold is good for experienced mothers where you may
              tend to heat up the baby's body with his head lying on your
              elbows. Football hold or cross-cradle is easier for new mothers.
              <br />
              <br />
              <h5>10. Nipple care </h5>
              Caring for your nipples should ideally start from the time you
              know you conceived. Applying coconut oil over nipples before bath
              and gently massaging helps to prevent cracked and flat
              nipples.Preparing for your breastfeeding journery starts from
              pregnancy itself.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogBFtips;
