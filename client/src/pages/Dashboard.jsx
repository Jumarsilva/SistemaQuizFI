import React, { useState } from "react";

import './Dashboard.css'

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container_dash">
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
