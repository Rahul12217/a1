import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Mainpage from "./Mainpage";
import './TicketDetails.css'

const Book = () => {
    
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [Gender,setGender]=useState('');
    const navigate=useNavigate();

    const handleAge=(value)=>{
        setNumber(parseInt(value))
    }

    const handleBook=()=>{
        const data = {
            UserId: JSON.parse(localStorage.getItem('user')).userId,
            From: JSON.parse(localStorage.getItem('flight')).from,
            To: JSON.parse(localStorage.getItem('flight')).to,
            DepartureDate: JSON.parse(localStorage.getItem('flight')).departureDate,
            DepartureTime: JSON.parse(localStorage.getItem('flight')).departureTime,
            ArrivalTime: JSON.parse(localStorage.getItem('flight')).arrivalTime,
            Airline: JSON.parse(localStorage.getItem('flight')).airline,
            Age:number,
            Gender: Gender,
            PassengerName:name,
            Fare: JSON.parse(localStorage.getItem('flight')).fare,
            Flight_number: JSON.parse(localStorage.getItem('flight')).flight_number
        }
        console.log(data);
        



        axios.post('https://localhost:44351/api/Ticket', data)
        .then((result) => {
            console.log(result.data)
            localStorage.setItem("ticket", JSON.stringify(result.data));
            alert("Ticket Booked");
        }).catch((error) => {
            alert("Try again later");
        })
    }


    return (  
        <>
        <Mainpage/>
        <div className="book">
            <label htmlFor="name"> <b>Name of the Passenger :</b> </label>
            <input type="text" name="Name" id="name" placeholder="Name of the Passenger" onChange={e=>setName(e.target.value)}/>
            <label htmlFor="Age"><b> Age : </b></label>
            <input type="text" name="Age" id="Age" placeholder="Age" onChange={e =>handleAge(e.target.value)}/>
            <label htmlFor="Gender"> <b>Gender : </b></label>
            <input type="text" name="Gender" id="Gender" placeholder="Gender" onChange={e=>setGender(e.target.value)} />

            <button className="book-button" onClick={handleBook}> Book </button> 
            <button className="back-button" onClick={()=>navigate('/mainpage')}> Back </button> 
                     

        </div>
        </>
    );
}
 
export default Book;