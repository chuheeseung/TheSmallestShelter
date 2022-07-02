import React from "react";
import Nav from "../components/Nav";
import Register from "../RegisterPage/Register";
import "antd/dist/antd.min.css";

function RegisterScreen() {
    return (
        <div>
            <Nav/>
            <Register/>
        </div>
    );
}

export default RegisterScreen;