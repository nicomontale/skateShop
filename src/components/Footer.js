import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
   
           
            <footer class="page-footer text-center font-small cyan darken-3 " style={{backgroundColor: '#006062'}}>
            
         
              <div class="container footer-style" >
            
               
                <div class="row"  >
            
                  
                  <div class="col-md-12 py-5 " style={{height: '50px'}}>
                    <div class="mb-5 flex-start " >
            
                     
                      <a class="fb-ic">
                        <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                  
                      <a classN="tw-ic">
                        <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                     
                    
                  
                      <a class="li-ic">
                        <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                   
                      <a class="ins-ic">
                        <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                      </a>
                   
                      <a class="pin-ic">
                        <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                      </a>
                    </div>
                  </div>
                
            
                </div>
              
            
              </div>
              
              <div class="footer-copyright text-center py-3 copyright_style">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> SKateShop.com</a>
              </div>
              
            
            </footer>
            
            
        )
    }
}
