import React from "react";
import UsersLists from "../components/user-lists/UsersLists";
import { usersDummy } from "../../mock/Users";

const Users = () => {
    return <UsersLists items={usersDummy} />;
};

export default Users;
