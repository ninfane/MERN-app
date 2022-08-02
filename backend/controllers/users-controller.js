const express = require("express");
const uuid = require("uuid/v4");
const HttpError = require("../models/http-error");

let DUMMY_USERS = [
    {
        id: "u1",
        name: "Marina",
        province: "Santa Fe",
    },
    {
        id: "u2",
        name: "Lucas",
        province: "Buenos Aires",
    },
    {
        id: "u3",
        name: "Gabriel",
        province: "Santa Fe",
    },
    {
        id: "u4",
        name: "Pilar",
        province: "Buenos Aires",
    },
];

const getAllUsers = (req, res, next) => {
    res.json({ users: DUMMY_USERS });
};

const createUser = (req, res, next) => {
    const { username, email, password } = req.body;
    const createdUser = {
        id: uuid(),
        username,
        email,
        password,
    };

    DUMMY_USERS.push(createdUser);
    res.status(201).json({ user: createdUser });
};

const loginUser = (req, res, next) => {};

exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
exports.loginUser = loginUser;
