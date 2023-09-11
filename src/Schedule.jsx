// const AddFlight = () => {
//     return (
//         <div className="page">

//         </div>
//     );
// }

// export default AddFlight

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import AdminPage from "./AdminPage";

export default function Schedule() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get("https://localhost:44351/api/Flights").then((result) => {
      setData(result.data);
    });
  }, []);

  const handleBack = () => {
    Navigate("/admin", { replace: false });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://localhost:44351/api/Flights/${id}`)
      .then((result) => {
        if (result.status == 200) {
          alert(`Flight ${id} is Cancelled`);
          axios.get("https://localhost:44351/api/Flights").then((res) => {
            setData(res.data);
          });
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
    <AdminPage/>
      <div>
      <h1>SCHEDULE</h1>
      <table className="table">
        <thead>
          <tr>
            <th >Flight Number</th>
            <th >Airline</th>
            <th >From</th>
            <th >To</th>
            <th >Departure Date</th>
            <th >Departure Time</th>
            <th >Arrival Time</th>
            <th >Fare</th>
            <th > </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{(item.airline)}</td>
                <td>{item.flight_number}</td>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>{item.departureDate.slice(0,10)}</td>
                <td>{item.departureTime}</td>
                <td>{item.arrivalTime}</td>
                <td>{item.fare}</td>
                <td>
                  <button
                    class="t-button"
                    onClick={() => handleDelete(item.flight_number)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="back" onClick={() => Navigate("/add")}>
        Add
      </button>
      <button className="back" onClick={()=>Navigate('/admin')}>
        BACK
      </button>
      {/* <ul>
            {data.map(item => (
                <li key={item.flight_number}> {item.airline} {item.userId}    {item.from}     {item.to} {item.departureDate} </li>
            ))}
        </ul> */}
    </div>
    </>
  );
}
