import React, { Component, useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Banner from './Banner'
import {Link } from 'react-router-dom'
import img from '../imgLandingPage/strike_ingress.JPG'
import imgSurf from '../imgLandingPage/surf2.jpg'
import imSkate from '../imgLandingPage/skateboards.jpg'
import skateStreet from '../imgLandingPage/skatestreet.jpg'
import imgsnowboard from '../imgLandingPage/snowboard.jpg'
import shoes from '../imgLandingPage/shoes.jpg'
import '../App.css'
import logo from '../imgLandingPage/strike.png';

const Pricing=()=> {
useEffect(()=> {
    Aos.init({duration: 2000}, [])
})
}
export default class landingPage extends Component {
   
    render() {
        return (
          
           <div style={{zIndex:2}}>
            <div class="text-center logo" style={{marginTop: '35px'}}>
            <img src={logo} style={{width: '60%'}} alt="store" className="navbar-brand" />
            
            
            </div>
           
            
           
            <div class="gallery" id="gallery">
            
           
              <div class="mb-3 pics fade-in one all 1">
              <Banner title="CHI SIAMO" subtitle="contatti">
              <Link to="/" className="btn-primary ">
                  
  </Link>
          </Banner>
          <img class="img-fluid" src={img} alt="Card image cap"/>
                
                
               
              </div>
             
              <div class="mb-3 pics fade-in two all 1" style={{marginBottom: "150px"}}>
              <Banner title="STREETWEAR" subtitle="NUOVA COLLEZIONE">
              <Link to="/" className="btn-primary ">
                  
  </Link>
          </Banner>
                <img class="img-fluid street_img_landing" src={skateStreet} alt="Card image cap"  />
              </div>
              
              <div class="mb-3 pics fade-in three all 1">
              <Banner title="SKATEBOARD" subtitle="NUOVA COLLEZIONE">
              <Link to="/" className="btn-primary ">
                 
  </Link>
          </Banner>
                <img class="img-fluid" src={imSkate} alt="Card image cap"/>
              </div>
            
              <div class="mb-3 pics fade-in four all 2" >
              <Banner title="SCARPE" subtitle="NUOVA COLLEZIONE">
              <Link to="/" className="btn-primary ">
                  
  </Link>
          </Banner>
                <img class="img-fluid shoes_img_landing" src={shoes} alt="Card image cap" />
              </div>
              
              <div class="mb-3 pics fade-in five all 2">
              <Banner title="SURF" subtitle="STAGIONE ESTIVA">
              <Link to="/" className="btn-primary ">
                  
  </Link>
          </Banner>
                <img class="img-fluid" src={imgSurf} alt="Card image cap" />
              </div>
              
              <div class="mb-3 pics fade-in six all 1">
              <Banner title="SNOWBOARD" subtitle="SALDI">
              <Link to="/" className="btn-primary ">
                 
  </Link>
          </Banner>
                <img class="img-fluid " src={imgsnowboard} alt="Card image cap" />
              </div>
            
            
            </div>
        </div >
            
            
            
        )
    }
}
