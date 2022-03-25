import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { SET_ADMIN_DETAILS, SET_AUTH_STATUS, SET_USER_DETAILS } from '../../Reducers/types';
  
  const Header = () => {
    
    
      return (
        <header>
        <div id="top-header">
          <div class="container">
            
            <ul class="header-links pull-right">
              <li class="border-right"><a href="#"><img src="./img/images/gift-card.svg" alt=""/> Gift Card</a></li>
              <li class="border-right"><a href="#"><img src="./img/images/seller-login.svg" alt=""/> Seller Login</a></li>
              <li><a href="#"><img src="./img/images/user-login.svg" alt=""/> Login / Sign Up</a></li>
            </ul>
          </div>
        </div>
  
        <div id="header">
          <div class="container">
            <div class="row custom-row">
              <div class="col-md-2 custom-padding">
                <div class="header-logo">
                  <a href="#" class="logo">
                    <img src="./img/images/logo.png" alt=""/>
                  </a>
                </div>
              </div>
  
              <div class="col-md-7 d-flex custom-padding">
              
            <ul class="main-nav nav navbar-nav">
              <li class="active"><a href="#">CATEGORIES</a></li>
              <li><a href="#">PARTNERS</a></li>
              <li><a href="#">TST NETWORK</a></li>
              
            </ul>
  
                <div class="header-search">
                    <div class="main">
    
    <div class="form-group has-feedback has-search">
      <span class="form-control-feedback"><i class="fa fa-search"></i></span>
      <input type="text" class="form-control" placeholder="Search on The Small Talk"/>
    </div>
    
  </div>
                </div>
              </div>
  
                
                
              
              <div class="col-md-3 clearfix custom-padding">
              
                <div class="header-ctn">
                <div>
                    <div class="widgets_div">
                      <div class="icon_div">
                      <span><i class="fa fa-calendar"></i></span>
                      </div>
                      <div class="text_div">
                      <span>Hello</span><br/>
                      <span>Select your address</span>
                      </div>
                    </div>
                                      
                    
                  </div>
                
                  <div>
                    <a href="#">
                      <img src="./img/images/bell-icon.svg" alt=""/>
                      <div class="qty">2</div>
                    </a>
                  </div>
  
                  <div>
                    <a href="#">
                      <img src="./img/images/heart-icon.svg" alt=""/>
                      
                    </a>
                  </div>
                  
                  <div>
                    <a href="#">
                      <img src="./img/images/gift-icon.svg" alt=""/>
                      
                    </a>
                  </div>
  
                  <div class="menu-toggle">
                    <a href="#">
                      <i class="fa fa-bars"></i>
                      <span>Menu</span>
                    </a>
                  </div>
                </div>
              </div>
             
            </div>
            
          </div>
           
        </div>
         
      </header>
      )
  }
export default Header  