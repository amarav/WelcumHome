import React from 'react'
import { Link } from 'react-router-dom';

function Footer()
{
    return(
        <div>          
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/welcomehomefoodandculture/"><i className="fab fa-instagram-square"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/welcomehomefoodandculture/"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.youtube.com/welcomehomefoodandculture"><i className="fab fa-youtube"></i></a>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/Recipies'>Recipies</Link></li>                        
                        <li><Link to='/About'>About us</Link></li>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                        <a className="mr-3" href="#!">Privacy Policy</a>
                        <a href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
            
               
        </footer>
        </div>
    );
}

export default Footer;