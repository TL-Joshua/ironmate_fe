import "./Profile.css"
import Profilebox from "./Profilebox.js";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import React,{useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Profile = ({auth}) =>  {
    let navigate = useNavigate();
    useEffect(() => {
        navigate("/profile", {replace: true});
    },[]);

    return(
        <>
        <Navbar />
        <Profilebox auth={auth}/>
        </>
    )



    }
export default Profile;