import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Marquee from "react-marquee-slider";
import { times } from 'lodash';
import 'aos/dist/aos.css';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <div className="another-container">
    <div className="Container">
     <nav className="Navbar">
        <img src="//honor.ancorathemes.com/wp-content/uploads/2017/11/logo-footer.png" alt="HONOR"  className="logo-honor" />
        <ul className="nav-links">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/pages">PAGES</Link>
              </li>
              <li>
                <Link to="/features">FEATURES</Link>
              </li>
              <li>
                <Link to="/features">CLASSES</Link>
              </li>
              <li>
                <Link to="/features">BLOG</Link>
              </li>
              <li>
                <Link to="/features">SHOP</Link>
              </li>
              <li>
                <Link to="/features">CONTACT US</Link>
              </li>
            </ul>
            <button className="member-button">BECOME A MEMBER</button>
     </nav>
     <img src="home-2-img-11.webp" className='private-instruction'/>
     <p className='private-info'>Private instruction is available for beginner as well as advanced levels. Up<br/>to four people can attend a private training session for the same price.
</p>
<button className="started-button">GET STARTED</button>
     </div>

     <div class="row" id="feature-slide">
     <div class="col-md-4 short-images1" >
      <h1>SNIPER <br/> ADVENTURES</h1>
      <p className="private-info " style={{ fontSize: '1rem',paddingRight: '8rem' }}>View our sniper rifle rental packages.</p>
     </div>

      <div class="col-md-4 short-images2" >
      <h1>TRAINING<br/> CLASSES</h1>
      <p className="private-info " style={{ fontSize: '1rem',paddingRight: '8rem' }}>Invest in yourself. See our course lineup.</p>
      </div>

      <div class="col-md-4 short-images3" >
      <h1>RANGE<br/> MEMBERSHIPS</h1>
      <p className="private-info " style={{ fontSize: '1rem',paddingRight: '8rem' }}>Save money with a membership.</p>
</div>
</div>

<div class=" marquee-container" >
<Marquee velocity={12}>
      {times(6, Number).map(id => (
        <React.Fragment key={id}>
          <img className="marquee-text" src=".\gunshop1.png" alt='images' />
          <img className="marquee-text" src=".\gunshop2.png" alt='images' />
          <img className="marquee-text" src=".\gunshop3.png" alt='images' />
          <img className="marquee-text" src=".\gunshop4.png" alt='images' />
          <img className="marquee-text" src=".\gunshop5.png" alt='images' />
          <img className="marquee-text" src=".\gunshop6.png" alt='images' />
        </React.Fragment>
      ))}

    </Marquee>
     </div>
     </div>
    </>
);
}

export default Navbar;
