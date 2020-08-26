import React from 'react'

function Card(props)
{
    const image =  process.env.PUBLIC_URL + props.source;
    return(
      <div  className="col-lg-2 col-sm-6 mb-4"> 
     
      <h4>{props.name}</h4>
      <img className="img-fluid img-thumbnail" src={image} alt="" />
     
      </div>
    );
}

export default Card;