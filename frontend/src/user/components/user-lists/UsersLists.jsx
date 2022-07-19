import React from "react";
import { Container } from "./styled";
import UserItem from "../user-item/UserItem";

const UsersLists = (props) => {
    if (props.items.length === 0) {
        return (
            <Container>
                <h2>No users found</h2>
            </Container>
        );
    }
    return (
        <ul>
            {props.items.map((user) => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />
            ))}
        </ul>
    );
};

export default UsersLists;
