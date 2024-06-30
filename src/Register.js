import { useState } from 'react';
import Button from 'react-bootstrap/Button';

 function Register()
 {
   const [full_name,setfull_name] = useState("");
   const [email,setemail] =useState("");
   const [password,setpassword]=useState("");
   const [phone_number,setPhone]=useState("");

   async function signUp(){
    let data = {full_name,email,password,phone_number}
      
    const response = await fetch("http://localhost:8000/api/register-user",{
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
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        <div class="card border border-light-subtle rounded-3 shadow-sm">
          <div class="card-body p-3 p-md-4 p-xl-5">
            <div class="text-center mb-3">
            </div>
            <h2 class="fs-6 fw-normal text-center text-secondary mb-4">Enter your details to register</h2>
            <form action="#!">
              <div class="row gy-2 overflow-hidden">
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="full_name" id="full_name"  value={full_name} onChange={(e)=>setfull_name(e.target.value)}  placeholder="Full Name" required />
                    <label for="full_name" class="form-label">Full Name</label>
                  </div>
                </div>
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
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="phone_number" id="phone_number"  value={phone_number} onChange={(e)=>setPhone(e.target.value)} placeholder="phone_number" required />
                    <label for="phone_number" class="form-label">Password</label>
                  </div>
                </div>
                <Button     type="submit" onClick={signUp} value="Submit" />
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
 export default Register;