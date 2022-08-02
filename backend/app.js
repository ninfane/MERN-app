const express = require("express");
const bodyParser = require("body-parser");
const placesRoutes = require("./routes/places-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

//! esta es la ruta por default, todas empiezan con esto
app.use("/api/places", placesRoutes);

app.use((req, res, next) => {
    const err = new HttpError("Could not find this route", 404);
    throw err;
});

app.use((error, req, res, next) => {
    //? chequeo que se haya hecho la request y haya un return, en tal caso devuelvo el error que tengo
    //! sino, seteo la respuesta a un error que me viene en el objeto de error o a un default 500
    req.headerSent ? next(error) : res.status(error.code || 500);
    res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000);
