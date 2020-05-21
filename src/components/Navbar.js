import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../imgLandingPage/strike.png';
import { ButtonContainer } from './Button';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Navbar extends Component {
    state= {
        open: false
    }
openMenu=()=> {
    return (
        <div className="menu">
                        <ul class="nav-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Projects</a></li>
                      </ul>
                        
                    
                        
                        </div>
    )
}
    
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-lg bg-primary navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

                
                <ButtonContainer >
                
                    <span  className="mr-2 drawer">
                      
                        <i   className="fas fa-bars" fa-7x/>
                        
                        
        </span>
                </ButtonContainer>
                <ButtonContainer className="searching">
                
                <div class="container h-100" >
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
        </div>
    </div>
                
                </ButtonContainer>
           
                <Link to='/'>
                <ButtonContainer >
                <span className="mr-2 vis" style={{marginLeft: '0px'}}>
                <img src={logo} style={{width: '100%', maxWidth: 60,
                height: 'auto'}} alt="store" className="navbar-brand" />
                </span>
                </ButtonContainer>
                
               
                </Link >
                <ButtonContainer>
                <span className="mr-2 vis">
                Home
                </span>
                </ButtonContainer>
                <Link to='/'>
                <ButtonContainer>
               <span className="mr-2 vis">
              Prodotti
               </span>
               </ButtonContainer>
               </Link>

               
               <Link>
               <ButtonContainer>
               <span className="mr-2 vis">
               Saldi
               </span>
               </ButtonContainer>
               
                </Link >

                <Link>
               <ButtonContainer>
               <span className="mr-2 vis">
               Eventi
               </span>
               </ButtonContainer>
               
                </Link >
                
            
                <Link to='/cart' className="ml-auto">
                
                    <ButtonContainer>
                    
                        <span  className="mr-2">
                          
                            <i className="fas fa-cart-plus" fa-7x style={{marginLeft: '4px'}}/>
                            
            </span>
                    </ButtonContainer>

                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: #000 !important;

-webkit-box-shadow: 0px 33px 42px -35px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 33px 42px -35px rgba(0,0,0,0.75);
box-shadow: 0px 33px 42px -35px rgba(0,0,0,0.75);

.nav-link{
    color:white !important;
    font-size:2.3rem;
    text-transfomr: capitalize !important;




`


