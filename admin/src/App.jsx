import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Order/Order";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;