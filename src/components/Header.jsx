import React from 'react'
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import '../css/styles.css';

function Header(){
    return(
      <div>
       <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Welcum Home</NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Welcome Home</h1>
                       <p>Cook,Eat,Travel and Repeat and to do that stay fit and healthy.We are glad to share insights on Health,Diet and nutrition for 
                       your everday lifestyle,diet,pregnancy,postpartum,breastfeeding,home remedies,food recipies. </p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
          <header className="masthead" id="home">
            <div className="container">
                <div className="masthead-subheading">Well,Come Home!</div>
                <div className="masthead-heading text-uppercase">Welcome Home!</div>               
            </div>
        </header>        
      </div>
    );
}

export default Header; 