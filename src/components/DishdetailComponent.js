import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish})
{
    return(
    <div  className="col-12 col-md-5 m-1">
    <Card>
        <CardImg top src={process.env.PUBLIC_URL + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>                     
 </div>);
}


const Dishdetail = (props) => {
    if(props.dish != null)
    return(         
       <div className="container">
       <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/recipies">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
         <div className="row">
           <RenderDish dish={props.dish} />
         </div>
       </div>

    );
    else
    return(
        <div></div>
    );
}


export default Dishdetail;
