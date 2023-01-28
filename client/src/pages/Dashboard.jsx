import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "../components/Home";
import Settings from "../components/Settings";
import Profile from "../components/Profile";
import './Dashboard.css'

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container-dash">
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
