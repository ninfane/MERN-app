import React from "react";
import { UserCard } from "../../../user/components/user-item/styled";

const PlaceItem = (props) => {
    return (
        <li>
            <UserCard>
                <div>
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div>
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div>
                    <button>MAP</button>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
            </UserCard>
        </li>
    );
};

export default PlaceItem;
