import React,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Navigation from './Navigation'
import Header from './Header'
import BuyNow from './BuyNow'
import Separator from './Separator'
import Services from './Services'
import Quote from './Quote'
import Portfolio from './Portfolio'
import Booknow from './BookNow'
import ContactUs from './contactUs'
import Footer from './Footer'
import BootstrapCarousel from './BootstrapCarousel'
import LactationThumbnailGallery from './Thumbnail'
import Menu from './MediaMenu';
import ThumbnailHeader from './ThumbnailHeader'
import Dishdetail from './DishdetailComponent'
import Recipies from './recipies'
import Contact from './contact';
import Home from './HomeComponent'
import About from './AboutComponent'
import {DISHES} from './dishes'
import { COMMENTS } from './comments';
import { PROMOTIONS } from './promotions';
import { LEADERS } from './leaders';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component
{
    
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render()
  {
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }


  const Lactation = () => {
    return(
      <LactationThumbnailGallery />
    );
  }

  const DishWithId = ({match}) => {
    return(
      <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
      />  );
  };

  const AboutWithId = () => {
    return(
      <About leaders={this.state.leaders} />
    );
  }
  

  return (
    <div>  
       
        <Header />
        <BuyNow />
        <Separator />
        <Services />
        <hr />
        <Quote />
        <Switch>
            <Route path='/home' component={HomePage} />              
            <Route exact path='/Thumbnail' component={Lactation} />
            <Route exact path='/Recipies' component={() => <Recipies dishes={this.state.dishes} />} />
            <Route path='/Recipies/:dishId' component={DishWithId} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/About' component={AboutWithId} />
            <Redirect to="/home" />
        </Switch>
        <Portfolio />
        <Separator />
        <Booknow />   
        <ContactUs />    
        <Footer /> 
        <LactationThumbnailGallery />
        <ThumbnailHeader content="Home remedies" />
        <Menu/> 
        <ThumbnailHeader content="Recipies" /> 
        
        <Recipies dishes={this.state.dishes} />  
</div>


    
  );

}

}

export default Main;