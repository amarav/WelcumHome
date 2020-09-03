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
import BootstrapCarousel from './Carousel'
import LactationThumbnailGallery from './Thumbnail'
import Menu from './MediaMenu';
import ThumbnailHeader from './ThumbnailHeader'
import Dishdetail from './DishdetailComponent'
import Recipies from './recipies'
import Contact from './contact';
import Home from './HomeComponent'
import About from './AboutComponent'
import Carousel from './Carousel'
import {DISHES} from './dishes'
import { COMMENTS } from './comments';
import { PROMOTIONS } from './promotions';
import { LEADERS } from './leaders';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

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
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
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
      <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
      />  );
  };

  const AboutWithId = () => {
    return(
      <About leaders={this.props.leaders} />
    );
  }
  

  return (
    <div>  
       
        <Header />        
        <Switch>
            <Route path='/home' component={HomePage} />              
            <Route exact path='/Lactation' component={LactationThumbnailGallery} />
            <Route exact path='/Recipies' component={() => <Recipies dishes={this.props.dishes} />} />
            <Route path='/Recipies/:dishId' component={DishWithId} />
            <Route exact path='/Remedies' component={() =>  <ThumbnailHeader content="Home remedies" />} />            
            <Route exact path='/contact' component={ContactUs} />
            <Route exact path='/About' component={AboutWithId} />
            <Route path='/buynow' component={BuyNow} />             
            <Route path='/booknow' component={Booknow} />                     
            <Route path='/menu' component={Menu} /> 
            <Redirect to="/home" />
        </Switch>  
        <ContactUs/>
        <Footer/>
</div>
  );

}

}

export default withRouter(connect(mapStateToProps)(Main));
