import React, { useState } from "react";
import { PlaceCard, BtnContainer } from "../place-item/styled";
import Modal from "react-modal";

const PlaceItem = (props) => {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <PlaceCard>
                <div>
                    <img
                        src={props.image}
                        alt={props.title}
                        style={{ borderRadius: "100%" }}
                    ></img>
                </div>
                <div>
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <BtnContainer>
                    <button id="map" onClick={openModal}>
                        MAP
                    </button>
                    <Modal
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example modal"
                        style={customStyles}
                    >
                        <div onClick={closeModal}>I'm a modal</div>
                    </Modal>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </BtnContainer>
            </PlaceCard>
        </div>
    );
};

export default PlaceItem;
