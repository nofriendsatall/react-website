import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LogInPopUp/LogInPopUp";
import MyOrders from "./components/MyOrders/MyOrders";

const App = () => {

  const [showLogin, setShowLogin] = React.useState(false);

  function setShowLoginHandler(state) {
    setShowLogin(state);
    console.log('setShowLoginState ',state);
  }

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLoginHandler} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/order" element={<PlaceOrder></PlaceOrder>} />
          <Route path="/myorders" element={<MyOrders></MyOrders>} />
        </Routes>
      </div>
      <Footer/>
    </>
  
  );
}

export default App