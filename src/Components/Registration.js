import './Registration.css';
import React, { useState } from 'react';
import pic from './OLFULOGO.png'
import pict from './olfu.png'
import { Link } from 'react-router-dom';

function Registry () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = {};
        if (!name) {
            errors.name = "Name is required";
        }
        if (!email) {
            errors.email = "Email is required";
        }
        if (!password) {
            errors.password = "Password is required";
        }
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            // handle form submission here
        }
    };

    return(
        <div className="Registration">
            <div className="head">
      <nav className="nav-bar">
        <div className="logo">
        <img src={pic} alt="Logo" />
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
          <li><Link to ='/lgn'>Login</Link></li>
          <li><Link to ='/reg'>Sign up</Link></li>
        </ul>
      </nav>
      <div className="Registration-form">
                {/* <h2 className="form-heading">Register</h2> */}
                <form onSubmit={handleSubmit}>
                <div className="logo2">
                <img src={pict} alt="Logo2" />
                </div>
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="name" name="name" className="form-input" value={name} onChange={(event) => setName(event.target.value)} required />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" className="form-input" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" className="form-input" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    {errors.password && <p className="error">{errors.password}</p>}

                    <Link to='/lgn'><button type="submit" className="form-button">Submit</button></Link>
                </form>
            </div>
            <footer className="footer">
        <p>All Rights Reserved 2023. This is not the original Website.</p>
      </footer>
        </div>
        </div>
    )
}

export default Registry;