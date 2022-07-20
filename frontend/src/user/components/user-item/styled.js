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
    margin: 0.5rem 0.5rem;
    display: flex;
    flex-direction: row;
    background: ${colors.mainRed};
    width: 90%;
    height: 100%;
    min-width: 300px;
    padding: 1rem;
    cursor: pointer;
    border-radius: 16px;
    :hover {
        background: ${colors.text};
        a {
            color: ${colors.mainRed};
        }
    }
    a {
        text-decoration: none !important;
        color: ${colors.text};
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    align-items: flex-start;
    justify-content: space-evenly;
`;

export const Title = styled.h1`
    font-size: 1.2rem;
`;

export const ImgContainer = styled.div`
    height: auto;
    width: auto;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    align-items: baseline;
`;
