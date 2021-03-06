import React, { Component} from 'react'
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




export default class landingPage extends Component {
  
    render() {
      Aos.init({
        disable: function () {
          var maxWidth = 800;
          return window.innerWidth > maxWidth;
        }
      });
        return (
          
           <div style={{zIndex:2, marginBottom:'20px'}}>
            <div class="text-center logo" style={{marginTop: '35px', marginBottom: '55px'}}>
            <img src={logo} style={{width: '40%'}} alt="store" className="logo-landing" />
            
            
            </div>
           
            
           
            <div class="gallery" id="gallery">
            
             
              <div data-aos="new-animation"  class="mb-3 pics fade-in one all 1 ">
              
              <Link to="/" className="btn-primary ">
              
              <Banner title="CHI SIAMO" subtitle="contatti">
             
                  
  
          </Banner>
       
          </Link>
          
          <img class="img-fluid ollaa" src={img} alt="Card image cap"/>
                
         
               
              </div>
             
          
              <div data-aos="fade-up-left" class="mb-3 pics fade-in two all 1" style={{marginBottom: "150px"}}>
              <Link to="/" className="btn-primary ">
              <Banner title="STREETWEAR" subtitle="NUOVA COLLEZIONE">
             
                  
 
          </Banner>
          </Link>
                <img class="img-fluid ollaa" src={skateStreet} alt="Card image cap"  />
              </div>
              
              
              <div data-aos="fade-up-right" class="mb-3 pics fade-in three all 1">
              <Link to="/skateboardlist" className="btn-primary ">
              <Banner title="SKATEBOARD" subtitle="NUOVA COLLEZIONE">
              
                 

          </Banner>
          </Link>
                <img class="img-fluid ollaa" src={imSkate} alt="Card image cap"/>
              </div>
              
              <div data-aos="fade-up-left" class="mb-3 pics fade-in four all 2" >
              <Link to="/" className="btn-primary ">
              <Banner title="SCARPE" subtitle="NUOVA COLLEZIONE">
              
                  
 
          </Banner>
          </Link>
                <img class="img-fluid ollaa" src={shoes} alt="Card image cap" />
              </div>
              
              
              
              <div data-aos="fade-up-right" class="mb-3 pics fade-in five all 2">
              <Link to="/" className="btn-primary ">
              <Banner title="SURF" subtitle="STAGIONE ESTIVA">
             
                  

          </Banner>
          </Link>
                <img class="img-fluid ollaa" src={imgSurf} alt="Card image cap" />
              </div>
              
              <div data-aos="fade-up-left" class="mb-3 pics fade-in six all 1">
              <Link to="/" className="btn-primary ">
              <Banner title="SNOWBOARD" subtitle="SALDI">
             
                 

          </Banner>
          </Link>
                <img class="img-fluid ollaa" src={imgsnowboard} alt="Card image cap" />
              </div>
            
              
            </div>
        </div >
            
            
            
        )
    }
}
