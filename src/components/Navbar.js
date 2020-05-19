import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../imgLandingPage/strike.png';
import { ButtonContainer } from './Button';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-lg bg-primary navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
<Link to='/cart' className="ml drawer">
                
                <ButtonContainer>
                
                    <span  className="mr-2">
                      
                        <i className="fas fa-bars" fa-7x/>
                        
        </span>
                </ButtonContainer>

            </Link>
                <Link to='/'>
                <ButtonContainer>
                <span className="mr-2">
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
background: #006062!important;

-webkit-box-shadow: 0px 33px 42px -35px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 33px 42px -35px rgba(0,0,0,0.75);
box-shadow: 0px 33px 42px -35px rgba(0,0,0,0.75);

.nav-link{
    color:white !important;
    font-size:1.3rem;
    text-transfomr: capitalize !important;




`


