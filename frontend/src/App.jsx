import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LogInPopUp/LogInPopUp";

const App = () => {

  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/order" element={<PlaceOrder></PlaceOrder>} />
        </Routes>
      </div>
      <Footer/>
    </>
  
  );
}

export default App