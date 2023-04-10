import React, { useState } from "react";
import Metro from './Metro';
import Bus from './Bus';
import Car from './Car';
import Auto from './Auto';
import Ola from './Ola';
import Own from './Own';
import Walk from './Walk';

import {BrowserRouter as Router , Route , Routes , Link}  from 'react-router-dom';



function Home() {
  
  

     return(

         <div className="container">

              <div class="dropdown d-grid gap 2 d-md-flex justify-content-md-end">
    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Mode of service
    </button>
    <ul class="dropdown-menu">
      <li><Link  activeClassName='is-active' to={'/Bus'}>Bus</Link></li>
      <li><Link  activeClassName='is-active' to={'/Metro'}>Metro</Link></li>
      <li><Link  activeClassName='is-active' to={'/Own'}>Own Two-wheeler</Link></li>
      <li><Link  activeClassName='is-active' to={'/Car'}>Own Car</Link></li>
      <li><Link  activeClassName='is-active' to={'/Walk'}>Walk / Bicycle</Link></li>
      <li><Link  activeClassName='is-active' to={'/Auto'}>Auto</Link></li>
      <li><Link  activeClassName='is-active' to={'/Ola'}>App based ride hailing cab services including Ola / Uber</Link></li>
      {/* <li><Link class="dropdown-item" to="Bus.js">Bus</Link>
      </li>
      <li><Link class="dropdown-item" to="Metro.js">Metro</Link></li>
      <li><a class="dropdown-item" href="Bus.js">Own Two-wheeler</a></li>
      <li><a class="dropdown-item" href="#">Own Car</a></li>
      <li><a class="dropdown-item" href="#">Walk / Bicycle</a></li>
      <li><a class="dropdown-item" href="#">Auto</a></li>
      <li><a class="dropdown-item" href="#">App based ride hailing cab services including Ola / Uber</a></li> */}

    </ul>
    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Choose distance in km
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#"> 5 km  </a></li>
      <li><a class="dropdown-item" href="#"> 5 - 10 km  </a></li>
      <li><a class="dropdown-item" href="#"> 10- 15 km  </a></li>
      <li><a class="dropdown-item" href="#"> 15- 20 km  </a></li>
      <li><a class="dropdown-item" href="#"> 20- 25 km  </a></li>
      <li><a class="dropdown-item" href="#"> > 25 km  </a></li>
    </ul>
  </div>

              <img src="https://cdn.pixabay.com/photo/2016/11/16/03/37/globe-trotter-1828079__340.jpg" class="d-block w-100" alt=".." />
         </div>

)
}

export default Home;
