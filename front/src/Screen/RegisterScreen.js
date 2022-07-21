import React from "react";
import Nav from "../components/Nav";
import Register from "../RegisterPage/Register";
import "antd/dist/antd.min.css";
import Footer from "../components/Footer";

function RegisterScreen() {
    return (
        <div>
            <Register/>
            <Footer/>
        </div>
    );
}

export default RegisterScreen;