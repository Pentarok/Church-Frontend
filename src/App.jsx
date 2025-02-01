import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import './App.css'
import Homepage from "./Homepage";
import EventPage from "./EventPage";
import About from "./About";
import Groups from "./Groups";
import Give from "./Give";
import GroupPage from "./GroupPage";
import GroupsContainer from "./GroupsContainer";
import Contact from "./Contact";

import EventsContainer from "./EventsContainer";
import ChurchValues from "./ChurchValues";
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/events" element={<EventsContainer/>}></Route>
          <Route path="/give" element={<Give/>}></Route>
          <Route path="/value" element={<ChurchValues/>}></Route>
          <Route path="/groups" element={<GroupsContainer/>}></Route>
          <Route path="/group-details" element={<GroupPage/>}></Route>
          <Route path="/event-details" element={<EventPage/>}></Route>   
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
