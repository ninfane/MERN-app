import React from "react";
import { Container, UserCard, Title, ImgContainer, List } from "./styled";

const UserItem = (props) => {
    return (
        <Container>
            <UserCard>
                <ImgContainer>
                    <img
                        src={props.image}
                        alt={`${props.name} profile`}
                        s
                        style={{
                            borderRadius: "100px",
                        }}
                    ></img>
                </ImgContainer>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Title>{props.name}</Title>
                    <List>
                        <Title>
                            {props.placeCount.length === 1
                                ? "Lugar"
                                : "Lugares"}
                        </Title>
                    </List>
                </div>
            </UserCard>
        </Container>
    );
};

export default UserItem;
