import React, { useState } from "react";
import { Redirect} from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate user and password
        if (user === "admin" && password === "password") {
            setIsLoggedIn(true);
        }
    };

    if (isLoggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                User:
                <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login