import React from 'react'

function ContactUs()
{
    return(
        <div>
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted ">Book now, Buy now!</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0 text-white">
                        <i className="fas fa-phone fa-3x mb-3 text-muted "></i>
                        <div >+1 (555) 123-4567</div>
                    </div>
                    <div className="col-lg-4 mr-auto text-center text-white">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>                      
                        <a className="d-block text-white" href="mailto:contact@welcumhome.com">contact@welcumhome.com</a>
                    </div>
                </div>
            </div>
        </section>
        
        </div>
    );
}

export default ContactUs;
