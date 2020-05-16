import React, { Component, useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import img from '../img/strike_ingress.JPG'
import imgSurf from '../img/surf.jpg'
import imSkate from '../img/skateboards.jpg'
import skateStreet from '../img/skatestreet.jpg'
import imgsnowboard from '../img/snowboard.jpg'
import shoes from '../img/shoes.jpg'
import '../App.css'

const Pricing=()=> {
useEffect(()=> {
    Aos.init({duration: 2000}, [])
})
}
export default class landingPage extends Component {
   
    render() {
        return (
           <>
            
           
            
           
            <div class="gallery" id="gallery">
            
           
              <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src={img} alt="Card image cap"/>
              </div>
             
              <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src={skateStreet} alt="Card image cap" />
              </div>
              
              <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src={imSkate} alt="Card image cap"/>
              </div>
            
              <div class="mb-3 pics animation all 2">
                <img class="img-fluid" src={shoes} alt="Card image cap"/>
              </div>
              
              <div class="mb-3 pics animation all 2">
                <img class="img-fluid" src={imgSurf} alt="Card image cap" />
              </div>
              
              <div class="mb-3 pics animation all 1">
                <img class="img-fluid" src={imgsnowboard} alt="Card image cap" />
              </div>
            
            
            </div>
        </>
            
            
            
        )
    }
}
