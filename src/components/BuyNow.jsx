import React from 'react'

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
                                  <li>Milagu Podi</li>
                                  <li>Vendhaya Kazhi Podi</li>
                                  <li>Marundhu kuzhambu Podi</li>
                              </ul>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#contact" className="btn btn-success">Find Out More!</a>
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
                                <li>Vasambu sutta saambal</li>                                
                                <li>Vasambu for hands</li>
                                <li>Karuvelangai pottu</li>
                                <li>Jaathikkai</li>
                                <li>Maasikkai</li>
                                <li>Ucchi Podi</li>
                            </ul>  
                            </p>
                           </div>
                        <div className="card-footer">
                          <a href="#contact" className="btn btn-success">Find Out More!</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-5">
                      <div className="card h-100">
                        <img className="card-img-top" src={require("../assets/img/kit/topupkit.jpg")} alt=""/>
                        <div className="card-body">
                          <h4 className="card-title">Top up kit</h4>
                          <p className="card-text">
                              <ul>                         
                                <li>Coconut milk oil</li> 
                                <li>Prasava bath powder</li>                                        
                                <li>Herbal bath powder for mother</li>        
                                <li>Herbal bath powder for boy baby</li>                                        
                                <li>Herbal bath powder for girl baby</li>
                                <li>Herbal hair oil for mother</li>
                                <li>Herbal Tea</li>
                              </ul>
                          </p>
                        </div>
                        <div className="card-footer">
                          <a href="#contact" className="btn btn-success ">Find Out More!</a>
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