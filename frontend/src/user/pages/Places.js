import React from "react";
import PlaceList from "../../places/components/place-list/PlaceList";
import Dashboard from "../components/dashboard/Dashboard";
import { placesDummy } from "../../mock/Places";
import { useParams } from "react-router-dom";

const Places = () => {
    const userId = useParams().userId;
    const userPlaces = placesDummy.filter((place) => place.creator === userId);

    return (
        <Dashboard>
            <PlaceList items={userPlaces} />
        </Dashboard>
    );
};

export default Places;
