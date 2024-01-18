import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './Body.css';


function Body() {
  return (
    <>
    <div className='body-container'>
    <div class="row" >

     <div class="col-md-6 " >
        <img src="gun1.avif"/>
    </div>
    <div class="col-md-6 " >
    <img src="gun2.avif"/>
    </div>  
        </div>
    </div>
    </>
  )
}

export default Body;

