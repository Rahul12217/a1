import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Mainpage from "./Mainpage";
import './Table.css'

const MyTickets = () => {
  const ticket = localStorage.getItem("user");
  const id = JSON.parse(ticket).userId;
  const [data, setData] = useState([]);

  const Navigate = useNavigate();
  const handleBack = () => {
    Navigate("/mainpage", { replace: false });
  };
  useEffect(() => {
    axios.get(`https://localhost:44351/api/Ticket/${id}`).then((result) => {
      setData(result.data);
      //console.log(result.data)
    });
  }, []);

  const handleDelete = (ticketid) => {
    axios
      .delete(`https://localhost:44351/api/Ticket/${ticketid}`)
      .then((resp) => {
        if (resp.status == 200) {
          alert(`Ticket is Cancelled`);
          axios.get(`https://localhost:44351/api/Ticket/${id}`).then((res) => {
            setData(res.data);
          });
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleTicket = (id) => {
    axios
      .get(`https://localhost:44351/api/Ticket/${id}`)
      .then((result) => {
        setData(result.data);
        localStorage.setItem("ticket", JSON.stringify(result.data));
        console.log(result.data);
        Navigate("/generate");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
    <style>
      
    </style>
    <Mainpage/>
    <h1>Your Tickets</h1>
    <div className="table">
      <table class="table">
      <thead>
        <tr>
          <th>Passenger Name</th>
          <th> Flight Number</th>
          <th>From</th>
          <th>To</th>
          <th>Departure Date</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
          <th>Fare</th>
          <th>Generate</th>
          <th>Cancel</th>
        </tr>
      </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                {/* <td>{item.userId}</td> */}
                <td>{item.passengerName}</td>
                <td>{item.flight_number}</td>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>{item.departureDate.slice(0,10)}</td>
                <td>{item.departureTime}</td>
                <td>{item.arrivalTime}</td>
                <td> {item.fare} </td>


                <td>
                  <button
                    className="t-button"
                    onClick={() => handleTicket(item.ticketId)}
                  >
                    Download
                  </button>
                </td>
                <td>
                  <button
                    className="t-button"
                    onClick={() => handleDelete(item.ticketId)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    
    <button className="back" onClick={handleBack}>
        Back
      </button>
    </>
  );
};

export default MyTickets;


