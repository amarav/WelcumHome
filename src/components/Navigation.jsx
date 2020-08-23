import React from 'react'
import '../css/styles.css';

function Navigation(){
      return (          
    <div className="App"> 
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ml-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Our services</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#booknow">Book appointment</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#buynow">Buy now </a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    );
}

  export default Navigation;