import React from "react";
import { Container, UserCard, Title, ImgContainer, List } from "./styled";
import { Link } from "react-router-dom";

const UserItem = (props) => {
    return (
        <Container>
            <UserCard>
                <Link to={`/${props.id}/places`}>
                    <ImgContainer>
                        <img
                            src={props.image}
                            alt={`${props.name} profile`}
                            style={{
                                borderRadius: "100px",
                            }}
                        ></img>
                    </ImgContainer>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Title>{props.name}</Title>
                        <List>
                            <p>
                                {props.placeCount.length === 0
                                    ? "No places"
                                    : "Places"}
                            </p>
                        </List>
                    </div>
                </Link>
            </UserCard>
        </Container>
    );
};

export default UserItem;
