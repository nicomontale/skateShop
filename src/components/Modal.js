import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default class Modal extends Component {
    render() {
        Aos.init({
            
        });
        return (
            <ProductConsumer>
    {value=> {
const {modalOpen, closeModal} = value;
const {img, price,title}= value.modalProduct;

if(!modalOpen) {
    return null;
} else {
    return(

        <ModalContainer>

        <div className="container">
            <div className="row">
                <div data-aos="zoom-in"id = "modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">

                    <h5>Aggiunto al carrello</h5>
                   <img src={img} className="img-fluid" alt="product" />
                   <h5>{title}</h5>
                   <h5 className="text-muted">prezzo: $ {price}</h5>

                   <Link to='/skateboardlist'>
                   <ButtonContainers onClick={()=> closeModal()}>
                    store
                   
                   </ButtonContainers>
                   </Link>
                   <Link to='/cart'>
                   <ButtonContainers cart onClick={()=> closeModal()} >
                    carrello
                   
                   </ButtonContainers>
                   
                   </Link>



                </div>

            </div>



        </div>


    </ModalContainer>


    )
}



    }}
        
        </ProductConsumer>
           
        )
    }
    
}
const ModalContainer = styled.div`
   position: fixed;
   top:0;
   left:0;
   right: 0;
   bottom:0;
   background:rgba(0,0,0,0.3);
   display: flex;
   align-items:center;
   justify-content:center;
  #modal{
     background: var(--mainWhite);
     border-radius: 20px;
  }


    
    `
    export const ButtonContainers = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;

border: 0.5rem solid lightBlue;
background-color: white;
border-color:Yellow;
bored-radius: 50px !important;
padding: 0.2rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background:  lightBlue;
    color:var(--mainBlue);
} &:focus {
    outline: none;
}
`;