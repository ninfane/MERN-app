import React from "react";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import { colors } from "../../../constants/colors";

const MainNavbar = () => {
    const props = {
        items: [
            {
                text: "Home",
                link: "/",
            },
            {
                text: "Doc",
                link: "/",
            },
            {
                text: "Custom",
                link: "/",
            },
            {
                text: "Contact",
                link: "/",
            },
        ],
        logo: {
            text: "MySplace",
        },
        style: {
            barStyles: {
                background: `${colors.mainBlue}`,
            },
            sidebarStyles: {
                background: "#222",
                buttonColor: "white",
            },
        },
    };
    return (
        <div className="home">
            <Navbar {...props} />
        </div>
    );
};

export default MainNavbar;
