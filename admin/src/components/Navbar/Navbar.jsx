import React from "react";
import {assets} from "../../../admin_assets/assets";


const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={assets.logo} />
            <img src={assets.profile_image} alt="" />
        </div>
    );
};

export default Navbar;