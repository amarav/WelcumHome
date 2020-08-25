import React from 'react'
import AdSpace from './AdSpace.jsx'
import ThumbnailHeader from './ThumbnailHeader.jsx'
import ThumbnailContent from './ThumbnailContent.jsx'

const toplactationFoods = [
    "milk","coconut"
];

function ThumbnailImage()
{
    return(
      <div>
        <ThumbnailHeader />          
        <hr />
         
          <div className="row">
          <AdSpace />
          <ThumbnailContent name={toplactationFoods.map((image) => ({image}))}  source="../assets/img/lactationboosters/milk.jpg"/>

            <div className="col-lg-2 col-sm-6 mb-4">
              <h4>Wheat</h4>
              <a href="#contact" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src={require("../assets/img/lactationboosters/wheat.jpg")}
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-2 col-sm-6 mb-4">
              <h4>Groundnut</h4>
              <a href="#contact" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src={require("../assets/img/lactationboosters/groundnut.jpg")}
                  alt=""
                />
              </a>
            </div>
            <AdSpace />
          
        </div>
      </div>
    );
}

export default ThumbnailImage;