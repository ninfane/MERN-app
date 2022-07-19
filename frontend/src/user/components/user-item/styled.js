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
    width: 50%;
    height: 100%;
    min-height: 33vh;
    background: ${colors.mainRed};
    color: ${colors.text};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1rem;
`;

export const Title = styled.h1`
    font-size: 1.875rem;
`;

export const ImgContainer = styled.div`
    height: auto;
`;

export const ImgAndPlaces = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    align-items: baseline;
`;
