import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import "./Generate.css";
import img from'./images/lo.jpg';


export default function Generate() {
  const ticket = localStorage.getItem("ticket");
  const user = localStorage.getItem("user");
  const flight = localStorage.getItem("flight");

  const componentRef = useRef();

  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
  });

  const id = JSON.parse(ticket).ticketId;
  const userid = JSON.parse(ticket).userId;
  const userName = JSON.parse(ticket).passengerName;
  const flight_no = JSON.parse(ticket).flight_number;
  const from = JSON.parse(ticket).from;
  const to = JSON.parse(ticket).to;
  const date = JSON.parse(ticket).departureDate;
  const dTime = JSON.parse(ticket).departureTime;
  const aTime = JSON.parse(ticket).arrivalTime;
  const fare = JSON.parse(ticket).fare;
  const Airline = JSON.parse(flight).airline;

  const [data, setData] = useState([]);

  const Navigate = useNavigate();
  const handleBack = () => {
    Navigate("/mainpage", { replace: false });
  };

  // const handleTicket = (id) => {

  //     axios.get(`https://localhost:44351/api/Ticket/${id}`)
  //         .then((resp) => {
  //             setData(resp.data)
  //             console.log(resp.data)
  //         }).catch((error) => {
  //             alert(error)
  //         })

  // }

  // useEffect(() => {
  //     axios.get(`https://localhost:44351/api/Ticket/${id}`)
  //         .then(result => {
  //             setData(result.data)
  //             //console.log(result.data)
  //         }).catch((error)=>{
  //             alert(error)
  //         })

  // }, []);

  return (
    <div className="gen">
        <h1>Ticket</h1>
        <div className="tic" ref={componentRef}>
            <div className="loo">
            <img className='logo' src={img} alt=''/>
            </div>

            <div className="one">
            <p4> <b>Airlines : </b>{Airline}</p4>
            <p4> <b>Flight Number : </b>{flight_no}</p4> <br></br>
            </div>

            <div className="two">
            <p1> <b>Ticket Id : </b>  {id}</p1> <br></br>
        <p2> <b>User Id : </b>  {userid}</p2> <br></br>
        <p3> <b>Passenger Name : </b>  {userName}</p3> <br></br>
            </div>

            <div className="three">
            <p5> <b>From : </b>{from} </p5> <br></br>
        <p6> <b>To : </b>{to}</p6> <br></br>
        <p7> <b>Date of Departure : </b>{date}</p7> <br></br>
        <p8> <b>Departure Time : </b>{dTime}</p8> <br></br>
        <p9> <b>Arrival Time : </b>{aTime}</p9> <br></br>
        <p9> <b>Fare : </b>{fare} </p9> <br></br>

            </div>
      </div>
      <button className="btn" onClick={handleBack}>
        {" "}
        Back
      </button>{" "}
      <br></br>
      <br></br>
      <button className="btn" onClick={handleDownload}>
        {" "}
        Print Ticket{" "}
      </button>
    </div>
  );
}
