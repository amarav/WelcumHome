import React from 'react';
import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
    <div className="App">    
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
    </div>
  );
}

export default App;
