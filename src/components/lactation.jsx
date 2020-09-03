import React from 'react';
import { Card, CardImg, CardText, CardBody, CardDeck,
    CardTitle, CardSubtitle,  Breadcrumb, BreadcrumbItem, } from 'reactstrap';    
import { Link } from 'react-router-dom';
    

function RenderCard(props) {

    const topfoodsList = props.topfoods.map((topfood) => {
        return (
          <div>
          <ul>
              <li>{topfood.name}</li>
          </ul>
          </div>
        );
    });

    return(
        <CardDeck>
            <Card>
            <CardBody>
            <CardTitle>{props.title}</CardTitle>
            {topfoodsList}            
            </CardBody>
            </Card>
        </CardDeck>
      
    );
}

function lactation(props) {

        return(
        <div className="container">
         <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Lactation</BreadcrumbItem>
                </Breadcrumb>          
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h4>Top 5 foods to boost lactation</h4>
                </div>
                <div className="col-12"> 
                <RenderCard topfoods={props.topfoods} title="Top 5 foods" /> 
                </div>
            </div>
        </div>
    );
}

export default lactation;