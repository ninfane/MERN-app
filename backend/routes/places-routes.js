const express = require("express");

const placesControllers = require("../controllers/places-controller");

const HttpError = require("../models/http-error");

const router = express.Router();

//TODO reemplazar esta data hardcodeada

//? Que le paso
//! Se pasa el query y la funcion que quiero usar, en esa funcion realizo la logica
router.get("/:placeid", placesControllers.getPlaceById);

router.get("/user/:userid", placesControllers.getPlacesByUser);

router.post("/", placesControllers.createPlace);

router.get("/", placesControllers.getAllPlaces);

router.put("/:placeid", placesControllers.updatePlace);

router.delete("/:placeid", placesControllers.delPlace);

module.exports = router;
