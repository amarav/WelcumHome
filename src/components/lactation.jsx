import React from 'react';
import { Card, CardImg, CardText, CardBody, CardDeck,
    CardTitle, CardSubtitle,  Breadcrumb, BreadcrumbItem, } from 'reactstrap';    
import { Link } from 'react-router-dom';

function RenderCard(props) {

    const image =  process.env.PUBLIC_URL + props.source;
    const topfoodsList = props.foods.map((topfood) => {
        return (
          <div>
          <ul>
              <li>{topfood.name}</li>
          </ul>
          </div>
        );
    });

    return(
            <Card>
            <CardImg src={image} alt="Image" width = "100" height="100"/>
            <CardBody>
            <CardTitle>{props.title}</CardTitle>
            {topfoodsList}            
            </CardBody>
            </Card>
      
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
            <Link to='/LactationDietChart'>Diet Chart</Link>

         <section className="page-section bg-light" >
       
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="section-heading text-uppercase">Lactation Boosters</h3>
            <h3 className="section-subheading text-muted">
              Increase milk secretion during breastfeeding
            </h3>
          </div>
          </div>
          
          
            <div className="row row-content">
                <div className="col-12 col-md m-1"> 
                <RenderCard foods={props.topfoods} title={props.titleTop} source = {props.sourceTop} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                <RenderCard foods={props.instantfoods} title={props.titleInstant} source = {props.sourceInstant} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                <RenderCard foods={props.mustIncfoods} title={props.titleMust} source = {props.sourceMust} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                <RenderCard foods={props.goodfoods} title={props.titleGood} source = {props.sourceGood} /> 
                </div>  
            </div>
                          
            <div className="row row-content">                
            <div className="col-12 col-md m-1"> 
                <RenderCard foods={props.vegfoods} title={props.titleVeg} source = {props.sourceVeg} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                <RenderCard foods={props.nonvegfoods} title={props.titleNonveg} source = {props.sourceNonveg} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                <RenderCard foods={props.seeds} title={props.titleSeeds} source = {props.sourceSeeds} /> 
                </div>
                <div className="col-12 col-md m-1"> 
                <RenderCard foods={props.fruits} title={props.titleFruits} source = {props.sourceFruits} /> 
                </div>  
            </div>
          </section>
        </div>
        
    );
}

export default lactation;