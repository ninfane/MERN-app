import React from "react";
import { PlaceCard, BtnContainer } from "../place-item/styled";

const PlaceItem = (props) => {
    return (
        <div>
            <PlaceCard>
                <div>
                    <img
                        src={props.image}
                        alt={props.title}
                        style={{ borderRadius: "100%" }}
                    ></img>
                </div>
                <div>
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <BtnContainer>
                    <button>MAP</button>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </BtnContainer>
            </PlaceCard>
        </div>
    );
};

export default PlaceItem;
