import React from "react";
import UsersLists from "../components/user-lists/UsersLists";
import { usersDummy } from "../../mock/Users";
import Navbar from "../components/navbar/Navbar";
import Dashboard from "../components/dashboard/Dashboard";

const Users = () => {
    return (
        <Dashboard>
            <UsersLists items={usersDummy} />;
        </Dashboard>
    );
};

export default Users;
