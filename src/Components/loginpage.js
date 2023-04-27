import React from 'react';
import "./lolpage.css";
import { Link } from 'react-router-dom';
import pict from './olfu.png'

const Loginpage = () => {
  return(
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
          <div className="image">
          </div>
        </div>
        <div className="body-form">
          <form>
          <div className="logo3">
                <img src={pict} alt="Logo3" />
                </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"><i class="fa fa-lock"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="Password" />
            </div>
            <Link to= '/'><button type="button" className="btn btn-secondary btn-block">LOGIN</button></Link>
            <div className="message">
              <div><input type="checkbox" /> Remember ME</div>
            </div>
          </form>
          <div className="social">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
          </div>
          <Link to="/reg" className="btn-register">No Account? Register Here.</Link>
        </div>
      </div>
    </div>   
  )
}
  
export default Loginpage;
