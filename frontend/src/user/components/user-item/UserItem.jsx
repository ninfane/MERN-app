import React from "react";
import {
    Container,
    UserCard,
    Title,
    ImgContainer,
    ImgAndPlaces,
    List,
} from "./styled";

const UserItem = (props) => {
    return (
        <Container>
            <UserCard>
                <Title>{props.name}</Title>
                <ImgAndPlaces>
                    <ImgContainer>
                        <img
                            src={props.image}
                            alt={`${props.name} profile`}
                        ></img>
                    </ImgContainer>
                    <List>
                        {props.placeCount.map((place, index) => {
                            return <p key={index}>{place}</p>;
                        })}
                    </List>
                </ImgAndPlaces>
            </UserCard>
        </Container>
    );
};

export default UserItem;
