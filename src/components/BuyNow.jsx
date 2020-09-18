import React from 'react'
import { Link } from 'react-router-dom';

function BuyNow(){
    return(
      <div>
          
        <section className="page-section" id="buynow">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Buy our products</h2>
                    <h3 className="section-subheading text-muted">The complete post-natal care, purely home-made</h3>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-5">
                      <div className="card h-100">
                        <img className="card-img-top" src={require("../assets/img/kit/postnatalkit.jpg")} alt=""/>
                        <div className="card-body">
                          <h4 className="card-title">Post-natal kit</h4>
                          <p className="card-text">
                              <ul>
                                  <li>Garlic legiyam</li>
                                  <li>Dried ginger legiyam</li>
                                  <li>Mustard legiyam</li>                                  
                                  <li>Prasava legiyam</li>
                                  <li>Marundhu kuzhambu Podi</li>                                                                      
                                  <li>Herbal bath powder for mother</li> 
                              </ul>
                          </p>
                        </div>
                        <div className="card-footer">
                        <Link to='/PNPostnatalkit'  className="btn btn-success">Find Out More!</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-5">
                      <div className="card h-100">
                        <img className="card-img-top" src={require("../assets/img/kit/babycarekit.jpg")} alt=""/>                        <div className="card-body">
                          <h4 className="card-title">Baby care kit</h4>
                          <p className="card-text">
                            <ul>
                                <li>Urai maathirai</li>
                                <li>Ash of Vasambu</li>                                
                                <li>Vasambu bangle</li>
                                <li>Karuvelangai pottu</li>
                                <li>Jaathikkai</li>
                                <li>Maasikkai</li>
                                <li>Ucchi Podi</li>                                                                       
                                <li>Herbal bath powder for baby</li>
                            </ul>  
                            </p>
                           </div>
                        <div className="card-footer">
                        <Link to='/Babycarekit'  className="btn btn-success">Find Out More!</Link>
                        </div>
                      </div>
                    </div>                    
                    <div className="col-md-4 mb-5">
                      <div className="card h-100">
                        <img className="card-img-top" src="/assets/img/kit/herbaltea.jpg" alt=""/>
                        <div className="card-body">
                          <h4 className="card-title">Herbal Tea</h4>
                          <p className="card-text">
                          <ul>
                        <li>Boost immunity</li>
                        <li>Improve digestion</li>
                        <li>Promotes appetite</li>
                        <li>Helps detoxification</li>
                        <li>Weight loss</li>
                        <li>Reduce inflammation</li>                        
                        <li>Relieve stress</li>
                      </ul>
                          </p>
                        </div>
                        <div className="card-footer">
                          <Link to="/HerbalTea" className="btn btn-success ">Find Out More!</Link>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
         </section>
      </div>
    );
}

export default BuyNow;