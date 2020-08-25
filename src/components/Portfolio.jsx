import React from "react";

function Portfolio() {
  return (
    <div>
      <section className="page-section bg-light" id="portfolio">
        <div className="container-fluid">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Go Ahead and explore to know more.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/food.jpg")}
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Food Recipies</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Cooking
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/buykit.jpg")}
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Buy our kits</div>
                  <div className="portfolio-caption-subheading text-muted">
                    For Mother & Baby
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/postpartumbaby.jpg")}
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Post-partum & Baby Care
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    Diet & Lifestyle
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/lactation.jpg")}
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Lactation</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Breastfeeding
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal5"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/homeremedy.jpg")}
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Home remedies</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Health & Nutrition
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#contact"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={require("../assets/img/portfolio/doctor.jpg")}
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Siddha Doctor Consultation
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    Siddha medicine
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
