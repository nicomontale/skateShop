import React, { Component } from 'react'
import SkateProduct from './SkateProduct'
import Title from '../Title'
import {ProductConsumer} from '../../context'
import { storeProducts } from '../../data'
export default class SkatesList extends Component {
    state= {
        products: storeProducts
    }
    render() {

        return (
            <React.Fragment>
            
            <div className="py-5">
            <div className="container">
            <Title name="Skateboards" title=" nuova collezzione"/>
            
            </div>
            <div className="row" style={{marginRight: '0px'}}>
            <ProductConsumer>
            {
             value => {
                return value.products.map(product=> {
                    return <SkateProduct key={product.id} product={product}/>
                })

                 
             }
            }
            
            
            
            </ProductConsumer>
            
            
            
            </div>
            
        
            
            
            
            
            </div>
            
            
            </React.Fragment>

            

           
        )
    }
}
