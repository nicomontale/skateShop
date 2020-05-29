import React, { Component } from 'react'
import {ProductConsumer} from '.././context';
import {Link} from  'react-router-dom';

import styled from 'styled-components'
export default class Details extends Component {
    render() {
        return (
          <ProductConsumer>
          {value=> {
            const { id, img, company, title, info, price, inCart } =
            value.detailProduct;
          
          return (
          <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">

                                    <h1>{title}</h1>

                                </div>


                            </div>

                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">

                                    <img src={img} className="img-fluid" alt="product" />


                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">

                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by :
                                    <span className="text-uppercase">
                                            {company}


                                        </span>
                                    </h4>
                                    <h4 className="text-blue"> <strong> price :
                                    <span>$</span>
                                        {price}
                                    </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">

                                        some info about product :
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/*button*/}
                                    <div>
                                        <Link to="/skateboardlist">
                                            <ButtonContainers >back
                                            </ButtonContainers>
                                        </Link>
                                        <ButtonContainers style={{marginLeft: '25px'}}
                                            cart
                                            disabled={inCart ? true : false}
                                           >
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainers>
                                    </div>

                                </div>

                            </div>



                        </div>
                        )
        }
        }
          
          </ProductConsumer>
        )
    }
}
export const ButtonContainers = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background-color: lightyellow;

border: 0.1rem solid;

border-color:Yellow;
bored-radius: 20px !important;
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