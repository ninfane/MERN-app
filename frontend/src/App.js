import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./user/pages/About";
import Users from "./user/pages/Users";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Users />} />
                <Route exact path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
