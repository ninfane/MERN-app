import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const Container = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`;

export const UserCard = styled.div`
    padding: 1rem;
    width: 100%;
    min-width: 300px;
    margin: 0.5rem 0.5rem;
    border-radius: 8px;
    box-shadow: 2px 2px 10px black;
    height: 100%;
    background: ${colors.mainRed};
    color: ${colors.text};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 1rem;
`;

export const Title = styled.h1`
    font-size: 1.2rem;
`;

export const ImgContainer = styled.div`
    height: auto;
    width: auto;
`;

export const ImgAndPlaces = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    align-items: baseline;
`;
