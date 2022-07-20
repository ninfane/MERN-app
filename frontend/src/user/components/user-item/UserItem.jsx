import React from "react";
import { Container, UserCard, ImgContainer, TextContainer } from "./styled";
import { Link } from "react-router-dom";

const UserItem = (props) => {
    return (
        <Link to={`/${props.id}/places`} style={{ textDecoration: "none" }}>
            <Container>
                <UserCard>
                    <ImgContainer>
                        <img
                            src={props.image}
                            alt={`${props.name} profile`}
                            style={{
                                borderRadius: "100px",
                            }}
                        ></img>
                    </ImgContainer>
                    <TextContainer>
                        <a>{props.name}</a>
                        <a>
                            {props.placeCount.length === 0
                                ? "No places"
                                : "Places"}
                        </a>
                    </TextContainer>
                </UserCard>
            </Container>
        </Link>
    );
};

export default UserItem;
