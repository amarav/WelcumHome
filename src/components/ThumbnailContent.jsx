import React from "react";

function ThumbnailContent(props) {  
      const names = props.name;
      const source = props.source;
      const image = names.map((name,source) =>  
      <div className="col-lg-2 col-sm-6 mb-4">     
      <h4>name</h4>
      <img className="img-fluid img-thumbnail" src={source} alt="" />
      </div>
      );
  return ( 
      <div>{image}</div>   
      
  );
}

export default ThumbnailContent;
