 
 import { useState } from "react";
 import React from "react";
 

 function login()
 {

    var [Email,setEmail] = useState("");
    var [password,setPassword] = useState("");


    return(
            <div>
                  <h1>Login</h1>
                <form onSubmit={}> <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
        
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
        
                    <label for="role">Role</label>
                    <select id="role" name="role" required>
                        <option value="student">Student</option>
                        <option value="librarian">Librarian</option>
                    </select>
                    <input type="submit" value="Login"></form>
            </div>
        
    )
 }
 export default login;