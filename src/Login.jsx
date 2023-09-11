import React, { useState } from 'react';
import './Login.css';
import img from'./images/lo.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error,setError]=useState();
    const [msg,setMsg]=useState(false);

    // const validate =()=>{
    //     if(email.length==0 || email.includes('@') || email.includes('.com')){
    //         setError('Enter a valid email address');
    //         setMsg(true)
    //     }
    //     if(password.length<8){
    //         setError2('Password must be more 8 characters');
    //         setPmsg(true)
    //     }
    // };

    const handleLogin = async (email, password) => {
        let result = await fetch(`https://localhost:44351/api/Users/${email},${password}`)
        if(result.status!=200){
            setError("Invalid email or password");
            setMsg(true)
        }
        else{
            setMsg(false);
            navigate('/mainpage');
        }
        result=await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result))
        // .then((result) => {
        if (email === 'admin@gmail.com' && password === 'Admin@123') {
            navigate('/admin');
        }
        else{
            //setData(result.data)
            //alert(result.data.userId)
            //mainpage();
        }

    }

    return ( 
        <div className="login">

            <div className="log">
            <img className='logo' src={img} alt=''/>
            <h1>Login</h1>
           
            <input type="email"  placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />            
            
            <input type="password"  placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

            { msg && <p1> { error }</p1>}

            <button onClick={()=>{handleLogin(email,password)}}>Login</button>
            <a href='/register'> Create account </a>
            </div>

        </div>
     );
}
 
export default Login;