import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminPage from "./AdminPage";

export default function Tickets() {
    const [data, setData] = useState([]);
    

    const Navigate = useNavigate();

    useEffect(() => {
        axios.get('https://localhost:44351/api/Ticket')
            .then(result => {
                setData(result.data)
            })

    }, []);

    return (
        <>
        <AdminPage/>
        <div>
            <h1>SCHEDULE</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">UserId</th>
                        <th scope="col">Ticket Id</th>
                        <th scope="col">Flight Number</th>
                        <th scope="col">Passenger Name</th>
                        <th scope="col"> Age</th>
                        <th scope="col"> Gender</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Departure Date</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Arrival Time</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.userId}</td>
                                    <td>{item.ticketId}</td>
                                    <td>{item.flight_number}</td>
                                    <td>{item.passengerName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.from}</td>
                                    <td>{item.to}</td>
                                    <td>{item.departureDate.slice(0,10)}</td>
                                    <td>{item.departureTime}</td>
                                    <td>{item.arrivalTime}</td>

                                </tr>
                            )
                        })}
                </tbody>
            </table>

            <button class="back" onClick={() => Navigate('/admin')}> BACK </button>
        </div>
        </>
    )

}