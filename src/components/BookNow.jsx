import React from 'react'

function Booknow()
{
    return(
        <div>
           

        <section className="page-section" id="booknow">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Book an appointment</h2>
                    <h3 className="section-subheading text-muted">Siddha medicine consultation</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../assets/img/about/1.jpg")} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>STEP 1</h4>
                                <h4 className="subheading">MAKE A REQUEST</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Mail us your details,medical history,reports and query!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../assets/img/about/2.jpg")} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>STEP 2</h4>
                                <h4 className="subheading">ACKNOWLEDGE MAIL</h4>
                            </div>
                            <div className="timeline-body">On confirmation, you will receive a meeting link with time slot for a video consultation with our doctor and the payment details<p className="text-muted"></p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../assets/img/about/3.jpg")} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>STEP 3</h4>
                                <h4 className="subheading">MAKE PAYMENT</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">On successful payment, our representative will call you to explain the process, doctor availability & confirm the time slot.!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../assets/img/about/4.jpg")} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>STEP 4</h4>
                                <h4 className="subheading">VIDEO/MOBILE CONSULTATION</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">On completion of the Video Consultation you will receive the prescription in your email. Please note to check for your prescription in the junk folder.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Stay
                                <br />
                                healthy!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section> 
        </div>
    );
}

export default Booknow;