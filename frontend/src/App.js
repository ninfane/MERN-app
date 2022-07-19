import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./user/pages/About";
import Places from "./user/pages/Places";
import Users from "./user/pages/Users";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/:userId/places" element={<Places />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/" element={<Users />} />
            </Routes>
        </Router>
    );
};

export default App;
