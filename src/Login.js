import Header from './Header';
import { useState } from 'react';
import { Button } from 'react-bootstrap'; 

 function Login()
 {
      const [email,setemail] =useState("");
      const [password,setpassword]=useState("");
      
   
      async function signUp(){
       let data = {email,password}
         
       const response = await fetch("http://localhost:8000/api/verifyLogin-user",{
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       }
   
      });
      
      const result = await response.json();
   //    console.log(result);
      }
    
    return(
        <div>
          

            <div class="container">
        <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        <div class="card border border-light-subtle rounded-3 shadow-sm">
          <div class="card-body p-3 p-md-4 p-xl-5">
            <div class="text-center mb-3">
            </div>
            <h2 class="fs-6 fw-normal text-center text-secondary mb-4">Enter your details to Login</h2>
            <form action="#!">
              <div class="row gy-2 overflow-hidden">
                
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" name="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="name@example.com" required />
                    <label for="email" class="form-label">Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="password" id="password"  value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" required />
                    <label for="password" class="form-label">Password</label>
                  </div>
                </div>
                
                <Button name="submit" onClick={signUp} value="Submit" Submit >Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> 
            
        </div>
    )
}

export default Login;