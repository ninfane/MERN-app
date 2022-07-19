import React from "react";
import PlaceItem from "../place-item/PlaceItem";

const PlaceList = (props) => {
    if (props.items.length === 0) {
        return <div>No places found</div>;
    }
    return (
        <ul>
            {props.items.map((place) => (
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    image={place.image}
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creatorId={place.creator}
                    coordinates={place.coordinates}
                ></PlaceItem>
            ))}
        </ul>
    );
};

export default PlaceList;
