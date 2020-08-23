import React from 'react'

function Services()
{
    return(
      <div>
          <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">At your service</h2>
            </div>
                <hr className="divider my-4" />
                <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-utensils text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Food recipies</h3>
                            <p className="text-muted mb-0">Delicious recipies straight from Chefs kitchen</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-mortar-pestle text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Home remedies</h3>
                            <p className="text-muted mb-0">Handy tips for immediate cure</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-shopping-cart text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Buy our kits</h3>
                            <p className="text-muted mb-0">Health at your doorstep</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <i className="fas fa-4x fa-user-md text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Siddha Expert Advice</h3>
                            <p className="text-muted mb-0">Doctor consultation in Siddha medicine</p>
                        </div>
                    </div>
                </div>
          </div>
        </section>
      </div>
    );
}

export default Services;