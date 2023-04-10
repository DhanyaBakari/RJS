import React from 'react';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Metro from './components/pages/Metro';
import Bus from './components/pages/Bus';
import Car from './components/pages/Car';
import Ola from './components/pages/Ola';
import Walk from './components/pages/Walk';
import Own from './components/pages/Own';
import Auto from './components/pages/Auto';

import {BrowserRouter as Router , Route , Routes}  from 'react-router-dom';




function App() {

  return (
    <Router>
    <div>
    <Navbar/>
    <Routes>
   
     <Route exact path="/" element={<Home/>  }> 
     
      </Route>
    <Route path="/about" element={ <About/>  }>   
   
     </Route>
    <Route path="/contact" element={<Contact/>}>
       
        </Route>
        <Route path="/Bus" element={ <Bus/>  }>   
   
     </Route>
     <Route path="/Metro" element={ <Metro/>  }>   
   
     </Route>
     <Route path="/Own" element={ <Own/>  }>   
   
     </Route>
     <Route path="/Ola" element={ <Ola/>  }>   
   
     </Route>
     <Route path="/Auto" element={ <Auto/>  }>   
   
     </Route>
     <Route path="/Walk" element={ <Walk/>  }>   
       
     </Route>
     <Route path="/Car" element={ <Car/>  }>   
   
     </Route>


    </Routes>
   
       </div>
    </Router>
    
    
  );
 
}

export default App;
