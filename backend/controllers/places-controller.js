const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Boston",
        description: "Reprehenderit id enim ex minim.",
        creator: "u1",
    },
    {
        id: "p2",
        title: "San Francisco",
        description: "Reprehenderit id enim ex minim.",
        creator: "u3",
    },
    {
        id: "p3",
        title: "Michigan",
        description: "Reprehenderit id enim ex minim.",
        creator: "u2",
    },
    {
        id: "p4",
        title: "El paso",
        description: "Reprehenderit id enim ex minim.",
        creator: "u1",
    },
];

const getPlaceById = (req, res, next) => {
    //!busco el query en los parametros de la request
    const placeId = req.params.placeid;
    const place = DUMMY_PLACES.find((dp) => {
        return dp.id === placeId;
    });
    //!manejo de error
    if (!place) {
        throw new HttpError("Could not find a place for the provided id", 404);
    }
    res.json({ place });
};

const getPlacesByUser = (req, res, next) => {
    const userId = req.params.userid;
    const places = DUMMY_PLACES.filter((dp) => dp.creator == userId && dp);
    if (places.length == 0) {
        throw new HttpError(
            "Could not find a place for the provided user id",
            404
        );
    }
    res.json({ places });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUser = getPlacesByUser;
