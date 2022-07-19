import React from "react";
import { PlaceCard } from "../place-item/styled";

const PlaceItem = (props) => {
    return (
        <div>
            <PlaceCard>
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
            </PlaceCard>
        </div>
    );
};

export default PlaceItem;
