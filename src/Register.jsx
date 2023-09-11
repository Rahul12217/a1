import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "./images/lo.jpg";
import "./Register.css";
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCpassword] = useState("");
  const navigate = useNavigate();

    const validate =()=>{
        if(email.length==0 || email.includes('@') || email.includes('.com')){
            //setError('Enter a valid email address');
            //setMsg(true)
        }
        if(password.length<8){
            //setError2('Password must be more 8 characters');
            //setPmsg(true)
        }
    };

  const handleSave = () => {
    const data = {
        Name: name,
        Email: email,
        Password: password,
        Phone: phone
    }
    console.log(data);
    if(name && email && password && phone && password==confirmPassword){
    axios.post('https://localhost:44351/api/Users', data)
        .then((result) => {
            alert("Registration Successful");
            navigate('/mainpage', { replace: false });

        }).catch((error) => {
            alert(error)
        })
    }
    else{
        alert("Enter Valid credentials")
    }
}

  return (
    <div className="register">
      <div className="reg">
        <img className="logo" src={img} alt="" />
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Mobile Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setCpassword(e.target.value)}
        />
        <button onClick={validate}>Register</button>
      </div>
    </div>
  );
};

export default Register;
<div className="register"></div>;
