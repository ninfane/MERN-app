import React from "react";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import { colors } from "../../../constants/colors";

const MainNavbar = () => {
    const props = {
        items: [
            {
                text: "Places",
                link: "/",
            },
            {
                text: "About",
                link: "/about",
            },
        ],
        logo: {
            text: "MySplace",
            link: "/",
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
