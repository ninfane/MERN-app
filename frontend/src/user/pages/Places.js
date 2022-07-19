import React from "react";
import PlaceList from "../../places/components/place-list/PlaceList";
import Dashboard from "../components/dashboard/Dashboard";
import { placesDummy } from "../../mock/Places";

const Places = () => {
    return (
        <Dashboard>
            <PlaceList items={placesDummy} />
        </Dashboard>
    );
};

export default Places;
