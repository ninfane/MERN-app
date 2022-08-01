const express = require("express");

const HttpError = require("../models/http-error");

const router = express.Router();

//TODO reemplazar esta data hardcodeada
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

router.get("/:placeid", (req, res, next) => {
    const placeId = req.params.placeid;
    const place = DUMMY_PLACES.find((dp) => {
        return dp.id === placeId;
    });
    if (!place) {
        throw new HttpError("Could not find a place for the provided id", 404);
    }
    res.json({ place });
});

router.get("/user/:userid", (req, res, next) => {
    const userId = req.params.userid;
    const places = DUMMY_PLACES.filter((dp) => dp.creator == userId && dp);
    if (places.length == 0) {
        throw new HttpError(
            "Could not find a place for the provided user id",
            404
        );
    }
    res.json({ places });
});

module.exports = router;
