import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mainpage from "./Mainpage";
import './Table.css'
const UserSchedule = () => {
  const [data, setData] = useState([]);
  const Navigate=useNavigate();

  useEffect(() => {
    axios.get("https://localhost:44351/api/Flights").then((result) => {
      console.log(result.data);
      setData(result.data);
    });
  }, []);

  const handleBook = (num) => {
    axios.get(`https://localhost:44351/api/Flights/${num}`).then((res) => {
      localStorage.setItem("flight", JSON.stringify(res.data));
    });
    Navigate("/book", { replace: false });
  };

  return (
    <>
    <Mainpage/>
    <div className="table">
      <thead>
        <tr>
          <th>Airlines</th>
          <th> Flight Number</th>
          <th>From</th>
          <th>To</th>
          <th>Departure Date</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
          <th>Fare</th>
          <th>Book</th>
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
              <td onClick={()=>handleBook(item.flight_number)}>
                <button className="t-button">Book</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </div>
    </>
  );
};

export default UserSchedule;
