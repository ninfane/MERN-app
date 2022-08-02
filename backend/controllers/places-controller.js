const express = require("express");
const uuid = require("uuid/v4");
const HttpError = require("../models/http-error");

let DUMMY_PLACES = [
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

const getPlaceById = (req, res) => {
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

const getPlacesByUser = (req, res) => {
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

const getAllPlaces = (res) => {
    const places = DUMMY_PLACES;
    if (places.length == 0) {
        throw new HttpError(
            "Could not find a place for the provided user id",
            404
        );
    }
    res.json({ places });
};

const createPlace = (req, res) => {
    //! hago un request del contenido del body que viene parseado
    const { title, description, creator } = req.body;
    const createdPlace = {
        id: uuid(),
        title,
        description,
        creator,
    };

    DUMMY_PLACES.push(createdPlace);

    res.status(201).json({ place: createPlace });
};

const updatePlace = (req, res) => {
    const { title, description } = req.body;
    const placeId = req.params.placeid;

    const updatedPlace = { ...DUMMY_PLACES.find((dp) => dp.id == placeId) };
    updatedPlace.title = title;
    updatedPlace.description = description;

    const placeIndex = DUMMY_PLACES.findIndex((p) => p.id == placeId);
    DUMMY_PLACES[placeIndex] = updatedPlace;

    res.status(200).json({ place: updatedPlace });
};

const delPlace = (req, res) => {
    const placeId = req.params.placeid;
    DUMMY_PLACES = DUMMY_PLACES.filter((dp) => dp.id != placeId);

    res.status(200).json({ message: "deleted place" });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUser = getPlacesByUser;
exports.createPlace = createPlace;
exports.getAllPlaces = getAllPlaces;
exports.updatePlace = updatePlace;
exports.delPlace = delPlace;
