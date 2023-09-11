import React, { useState, Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminPage from "./AdminPage";

export default function AddFlight() {

    const [flightnumber, setFlight] = useState('');
    const [airline, setAirLine] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState(new Date());
    const [dtime,setDtime]=useState('');
    const [atime,setAtime]=useState('');
    const [fare, setFare] = useState('');
    const Navigate=useNavigate();


    const handleAdd = () => {
        const data = {
            Flight_number: flightnumber,
            Airline: airline,
            From: from,
            To: to,
            DepartureDate: date,
            DepartureTime:dtime,
            ArrivalTime:atime,
            Fare: fare

        }
        axios.post('https://localhost:44351/api/Flights', data)
            .then((result) => {
                alert("Flight Added to the schedule");
            }).catch((error) => {
                alert(error)
            })
    }



    return (
        <>
        <AdminPage/>
        <div className="bk">
            <div>Flights Schedule</div>
            <label>Flight Number</label>
            <input type="text" id="Flight Number" placeholder="Flight Number" onChange={(e) => setFlight(e.target.value)} /> <br></br>
            <label>Airline</label>
            <input type="text" id="Airline" placeholder="Airline" onChange={(e) => setAirLine(e.target.value)} /> <br></br>
            <label>From</label>
            <input type="text" id="From" placeholder="From" onChange={(e) => setFrom(e.target.value)} /> <br></br>
            <label>To</label>
            <input type="text" id="To" placeholder="To" onChange={(e) => setTo(e.target.value)} /> <br></br>
            <label>Departure Date</label>
            <input type="date" placeholder="To" onChange={(e) => setDate(e.target.value)} /> <br></br>
            <label>Departure Time</label>
            <input type="text" placeholder="To" onChange={(e) => setDtime(e.target.value)} /> <br></br>
            <label>Arrival Time</label>
            <input type="text" placeholder="To" onChange={(e) => setAtime(e.target.value)} /> <br></br>
            <label>Fare</label>
            <input type="text" placeholder="Fare" onChange={(e) => setFare(e.target.value)} /> <br></br>
            <button className="btn btn-primary" onClick={() => handleAdd()}>Add</button>
            <button className="btn btn-primary" onClick={() => Navigate('/admin')}>Back</button>
        </div>
        </>

    )
} 