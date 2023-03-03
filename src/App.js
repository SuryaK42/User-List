import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./actions/AddUser";
import EditUser from "./actions/EditUser";
import UserList from "./actions/UserList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>USER LIST WITH REDUX </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
