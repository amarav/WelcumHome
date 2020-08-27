import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Navigation from './components/Navigation.jsx'
import Header from './components/Header.jsx'
import BuyNow from './components/BuyNow.jsx'
import Separator from './components/Separator.jsx'
import Services from './components/Services.jsx'
import Quote from './components/Quote.jsx'
import Portfolio from './components/Portfolio.jsx'
import Booknow from './components/BookNow.jsx'
import ContactUs from './components/contactUs.jsx'
import Footer from './components/Footer.jsx'
import BootstrapCarousel from './components/BootstrapCarousel.jsx'
import ThumbnailGallery from './components/Thumbnail.jsx'
import Menu from './components/MediaMenu.jsx';
import ThumbnailHeader from './components/ThumbnailHeader.jsx'
import Recipies from './components/recipies'
import {DISHES} from './components/dishes'

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render()
  {
    return (
      <div>  
          <Navigation />
          <Header />
          <BuyNow />
          <Separator />
          <Services />
          <hr />
          <Quote />
          <Portfolio />
          <Separator />
          <Booknow />   
          <ContactUs />    
          <Footer /> 
          <ThumbnailGallery />
          <ThumbnailHeader content="Home remedies" />
          <Menu/> 
          <ThumbnailHeader content="Recipies" /> 
          <Recipies dishes={this.state.dishes} />  
  </div>
  
      
    );
  }
  
}

export default App;
