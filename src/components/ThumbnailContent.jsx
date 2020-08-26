import React from "react";
import Card from "./Cards.jsx"
import AdSpace from './AdSpace.jsx'

function CreateCard(food)
{   
    return(
        <Card key={food.id} name={food.name} source={food.source} />        
    );
}

function ThumbnailContent(props) {
  return (       
      <div className="row"> 
       <AdSpace />      
          {props.content.map(CreateCard)}
       <AdSpace />
      </div>   
      
  );
}

export default ThumbnailContent;
