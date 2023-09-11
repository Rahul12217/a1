import logo from "./logo.svg";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Register from './Register';
import AdminPage from "./AdminPage";
import Schedule from "./Schedule";
import FlightSchedule from "./UserSchedule";
import UserSchedule from "./UserSchedule";
import Book from "./TicketDetails";
import MyTickets from "./Mytickets";
import Profile from "./Profile";
import Generate from "./Generate";
import AddFlight from "./AddFlight";
import Users from "./Users";
import Tickets from "./Tickets";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/mainpage" element={<Mainpage />}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/admin' element={ <AdminPage/>}></Route>
        <Route exact path="/schedule" element={<Schedule/>}></Route>
        <Route exact path="/flightschedule" element={<FlightSchedule/>}></Route>
        <Route exact path="/userschedule" element={<UserSchedule/>}></Route>
        <Route exact path='/book' element={<Book/>}></Route>
        <Route exact path='/mytickets' element={<MyTickets/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
        <Route exact path='/generate' element={<Generate/>}></Route>
        <Route exact path='/add' element={<AddFlight/>}></Route>
        <Route exact path='/users' element={<Users/>}></Route>
        <Route exact path='/tickets' element={<Tickets/>}></Route>
               

      </Routes>
    </div>
  );
}

export default App;
