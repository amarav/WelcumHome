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
import Lactation from './lactation'
import PostNatalCare from './PostNatalCare'
import PNLegiyam from './PNLegiyam'
import PNPathiyaDiet from './PNPathiyaDiet'
import PNMarundhuPodi from './PNMarundhuPodi'
import PNPathiyaSapadu from './PNPathiyaSapadu'
import PNWhytocare from './PNWhytocare'
import BlogPostContent from './BlogPostContent'
import PNBath from './PNBath'
import PNDhristi from './PNDhristi'
import blog from './FullBlog'
import BlogSecretofBriyani from "./BlogSecretofBriyani";
import Babycarekit from './Babycarekit'
import Homeremedies from './Homeremedies';
import ThumbnailHeader from './ThumbnailHeader'
import Dishdetail from './DishdetailComponent'
import Recipies from './recipies'
import Contact from './contact';
import Home from './HomeComponent'
import About from './AboutComponent'
import DietChart from './lactationDietChart'
import IngredientsKuzhambuPodi from "./PNIngredients.js";
import Roster from './Roster'
import {topfoodsrc,instantmilksrc,mustincsrc,goodfoodsrc,vegfoodsrc,nonvegfoodsrc,seedsrc,fruitsrc} from './lactationData'
import Carousel from './Carousel'
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    topfoods: state.topfoods,
    instantfoods:state.instantfoods,
    mustIncfoods:state.mustIncfoods,
    goodfoods:state.goodfoods,
    vegfoods:state.vegfoods,
    nonvegfoods:state.nonvegfoods,
    seeds:state.seeds,
    fruits:state.fruits,
    blogpostsAPI:state.blogpostsAPI,
  }
}

class Main extends Component
{
    
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


  const LactationFoods = () => {
    return(
      <Lactation topfoods={this.props.topfoods} titleTop="Top foods" sourceTop = {topfoodsrc} 
        instantfoods = {this.props.instantfoods} titleInstant ="Instant foods" sourceInstant = {instantmilksrc}
        mustIncfoods = {this.props.mustIncfoods}  titleMust ="Must include foods" sourceMust = {mustincsrc}
        goodfoods = {this.props.goodfoods} titleGood = "Foods for good health" sourceGood ={goodfoodsrc} 
        vegfoods = {this.props.vegfoods} titleVeg = "Vegetarian foods" sourceVeg ={vegfoodsrc} 
        nonvegfoods = {this.props.nonvegfoods} titleNonveg = "Non vegetarian foods" sourceNonveg ={nonvegfoodsrc} 
        seeds = {this.props.seeds} titleSeeds = "Seeds" sourceSeeds ={seedsrc} 
        fruits = {this.props.fruits} titleFruits = "Fruits" sourceFruits ={fruitsrc} />
        
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
  
  
  const BlogPostwithID = ({match}) => {
    return(
      <BlogPostContent post={this.props.blogpostsAPI.filter((post) => post.id === parseInt(match.params.number,10))[0]} 
      />  );
  };

  return (
    <div>  
       
        <Header />        
        <Switch>
            <Route path='/home' component={HomePage} />              
            <Route exact path='/Lactation' component={LactationFoods} />                        
            <Route exact path='/LactationDietChart' component={DietChart} />                       
            <Route exact path='/PostNatalCare' component={PostNatalCare} />                                   
            <Route exact path='/PNLegiyam' component={PNLegiyam} />                                    
            <Route exact path='/PNPathiyaDiet' component={PNPathiyaDiet} />                                            
            <Route exact path='/PNMarundhuPodi' component={PNMarundhuPodi} />                                           
            <Route exact path='/PNPathiyaSapadu' component={PNPathiyaSapadu} />                                          
            <Route exact path='/PNDhristi' component={PNDhristi} />                                          
            <Route exact path='/PNKuzhiyal' component={PNBath} />                                                 
            <Route exact path='/PNWhytocare' component={PNWhytocare} />                    
            <Route exact path='/Recipies' component={() => <Recipies dishes={this.props.dishes} />} />
            <Route path='/Recipies/:dishId' component={DishWithId} />
            <Route exact path='/Homeremedies' component={Homeremedies} />             
            <Route exact path='/Babycarekit' component={Babycarekit} />              
            <Route exact path='/blog' component={blog} />    
            <Route path='/blog/:number' component={BlogPostwithID}/>                           
            <Route exact path='/contact' component={ContactUs} />
            <Route exact path='/About' component={AboutWithId} />
            <Route path='/roster' component={Roster}/>     
            <Route path='/buynow' component={BuyNow} />             
            <Route path='/booknow' component={Booknow} />      
            <Redirect to="/home" />
        </Switch> 
        <ContactUs/>
        <Footer/>
</div>
  );

}

}

export default withRouter(connect(mapStateToProps)(Main));
