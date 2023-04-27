import React from "react";
import "./Header.css";
import Mission from "./content";
import Banner from "./Carousel";
import CardsPage from "./cardpage";
import { Link } from 'react-router-dom';
import pic from './OLFULOGO.png';

function Header() {
  return (
    <div className="head">
      <nav className="nav-bar">
        <div className="logo">
        <Link to='https://www.fatima.edu.ph'><img src={pic} alt="Logo" /></Link> 
        </div>
        <ul className="nav-links">
          <li><Link to ='/'>Home</Link></li>
          <li className="dropdown">
            <Link to=''>Campuses</Link>
            <div className="dropdown-content">
              <Link to='https://www.fatima.edu.ph/campus/our-lady-of-fatima-valenzuela/'>Valenzuela</Link>
              <Link to='https://www.fatima.edu.ph/campus/our-lady-of-fatima-quezon-city/'>Quezon City</Link>
              <Link to= 'https://www.fatima.edu.ph/campus/our-lady-of-fatima-laguna/'>Laguna</Link>
              <Link to= 'https://www.fatima.edu.ph/campus/our-lady-of-fatima-pampanga/'>Pampanga</Link>
              <Link to= 'https://www.fatima.edu.ph/campus/our-lady-of-fatima-nueva-ecija/'>Nueva Ecija</Link>
              <Link to='https://www.fatima.edu.ph/campus/our-lady-of-fatima-antipolo/'>Antipolo</Link>
            </div>
          </li>
          <li><Link to='https://olfu.instructure.com'>Canvas</Link></li>
          <li><Link to='https://www.fatima.edu.ph/apply-now/'>Apply Now</Link></li>
        </ul>
        <ul className="login-links">
          <li><Link to ='lgn'>Login</Link></li>
          <li><Link to ='/reg'>Sign up</Link></li>
        </ul>
      </nav>
      <Banner />
      <CardsPage />
      <Mission />
      <footer className="footer">
        <p>All Rights Reserved 2023. This is not the original Website.</p>
      </footer>
    </div>
  );
}

export default Header;
