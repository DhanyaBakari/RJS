import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    return(
      <div class="navbar-dark bg-light shadow">
        <div class="container">
        <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-expand-lg ">
          <div class="container">
          
         <Link to="/" class="navbar-brand">Respondent Travel profile <i class="bi bi-car-front"></i></Link>
         
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                 <li class="nav-item">
               
                   <Link to="/" class="nav-link active">Home</Link>
                 </li>
                 <li class="nav-item">
                 <Link to="/about" class="nav-link active">About Us</Link>
                 </li>
             
                 <li class="nav-item">
                 <Link to="/contact" class="nav-link active">Contact Us</Link>
                 </li>
               </ul>
           
             </div>
           </div>


          </nav>
        </div>
        </div>
        </div>

      </div>



      //   <nav class="navbar navbar-expand-lg bg-light">
      //   <div class="container">
          
      //     <Link to="/" class="navbar-brand">Respondent Travel profile</Link>
      //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //       <span class="navbar-toggler-icon"></span>
      //     </button>
      //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
      //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      //         <li class="nav-item">
               
      //           <Link to="/" class="nav-link active">Home</Link>
      //         </li>
      //         <li class="nav-item">
      //         <Link to="/about" class="nav-link active">About Us</Link>
      //         </li>
             
      //         <li class="nav-item">
      //         <Link to="/contact" class="nav-link active">Contact Us</Link>
      //         </li>
      //       </ul>
           
      //     </div>
      //   </div>
      // </nav>
    );
    
}
export default Navbar;