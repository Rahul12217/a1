import React from "react";
import { useNavigate } from "react-router-dom";
import Mainpage from "./Mainpage";
export default function Profile(){

    const user=localStorage.getItem('user');
    const a=localStorage.getItem('ticket');
    const Navigate = useNavigate();
    const handleBack=()=>{
        Navigate('/mainpage', { replace: false });
    }

    return(
        <>
        <Mainpage/>
        <div className="profile">
            <p1> <b>NAME : </b> {JSON.parse(user).name}</p1><br></br>
            <p2> <b>EMAIL :</b> {JSON.parse(user).email}</p2><br></br>
            <p3> <b> PHONE :</b> {JSON.parse(user).phone}</p3><br></br>
            <p4> <b> AGE : </b> {JSON.parse(a).age} </p4><br></br>
            <p5> <b> GENDER : </b> {JSON.parse(a).gender} </p5><br></br>
            <button className="btn btn-primary" onClick={handleBack}> Back</button>

        </div>
        </>
    )
}