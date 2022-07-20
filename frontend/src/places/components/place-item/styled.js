import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const PlaceCard = styled.div`
    width: 100%;
    max-width: 90vw;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem auto;
    color: ${colors.text};
    background-color: ${colors.mainBlue};
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    cursor: pointer;
    :hover {
        color: ${colors.mainBlue};
        background-color: ${colors.text};
        button {
            background-color: ${colors.mainBlue};
            color: ${colors.text};
        }
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    button {
        border-radius: 1.5rem;
        border: none;
        width: 100%;
        min-width: 80px;
        background-color: ${colors.text};
        color: ${colors.mainBlue};
        height: 50px;
        cursor: pointer;
    }
`;
