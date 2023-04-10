import React from 'react';


function ContactUs() {
    return(
       <div className="container">
        <div className="card mt-4">
        <div className="card-body">
            
            <div class="row">
    <div class="col" >
        <i style={{fontSize: "50px" , textAlign:"center" , color:"blue"}}>
          < b> "May Your journey be free from stress and bring you home safely , Safe travels"</b>
        </i>
        <br></br>
        <br></br>
    
       <b style={{fontSize: "30px", color:"darkgoldenrod" }}>Email Address</b>
       <br></br>
       <span style={{fontSize: "25px" , color:"darkgoldenrod"}}>travelsd@gmail.com</span>
       
    </div>
    <div class="col">
        
    <form>

</form>
           <div class="form-floating w-50">  <label for="Uname" class="form-label" style={{fontSize: "20px" ,textAlign:"start"}} >Name </label>
            <br></br>
            
            <input type="text" name="Uname" id="Uname" class="form-control" style={{height:" 30px", width:" 95%"}}>
            </input></div>

            <div class="form-floating w-50">
            <label for="email" class="form-label" style={{fontSize: "20px" }} >Email </label><br></br>
            <input type="email" name="Uname" id="Uname" class="form-control" style={{height:" 30px", width:" 95%"}}>
            </input>
            </div>
            <div class="form-floating w-50">
            <label for="Number" class="form-label" style={{fontSize: "20px" }} >Phone Number </label><br></br>
            <input type="number" name="Uname" id="Uname" class="form-control" style={{height:" 30px", width:" 95%"}}>
            </input>
            </div>
            <br></br>
            <div  class="form-floating w-50"><label for="msg" class="form-label" style={{fontSize: "20px" }} >Message </label>
            <input type="text" name="Uname" id="Uname" class="form-control" style={{height:" 150px", width:" 95%"}}>
            </input></div>
            <br></br>
            <div>
            <button  type="submit" style = {{fontSize: "20px" ,height:" 50px", width:" 25%"}}>Submit</button>
        
            </div>

       
    </div>
    
    </div>
       </div>
       </div>
       </div>
    )
    
}

export default ContactUs;