import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Users />} />
            </Routes>
        </Router>
    );
};

export default App;
