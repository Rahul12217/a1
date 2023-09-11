import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminPage from "./AdminPage";

export default function Users() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get("https://localhost:44351/api/Users").then((result) => {
      setData(result.data);
    });
  }, []);

  return (
    <>
      <AdminPage />
      <div>
        {/* <input type="text"  className="search-box" placeholder="Enter the Location"> </input> */}
        <h1>USERS</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">User Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Phone</th>
              {/* <th scope="Book"> Book</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.userId}</td>
                  <td>{item.name}</td>
                  <td>{item.password}</td>
                  <td>{item.password}</td>
                  <td>{item.phone}</td>
                  {/* <td>
                                <button onClick={()=>handleBook(item.flight_number)} className="btn btn-primary">
                                    Book
                                </button>
                            </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>

        <button class="back" onClick={() => Navigate("/admin")}>
          BACK
        </button>
      </div>
    </>
  );
}
