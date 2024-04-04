import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.2);
`;

const Overlay = styled.div`
    position: absolute;
    width: 50%;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem;
`;

function AddressModal({ onCompletePost, setIsModalOpen }) {
    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => (document.body.style = `overflow: auto`);
    }, []);
    return (
        <>
            {createPortal(
                <div>
                    <Backdrop onClick={() => setIsModalOpen(false)} />
                    <Overlay>
                        <DaumPostcode
                            onComplete={onCompletePost}
                        ></DaumPostcode>
                    </Overlay>
                </div>,
                document.getElementById("modal")
            )}

            {/* {createPortal(
                <Backdrop onClick={() => setIsModalOpen(false)} />,
                document.getElementById("backdrop")
            )}
            {createPortal(
                <Overlay>
                    <DaumPostcode onComplete={onCompletePost}></DaumPostcode>
                </Overlay>,
                document.getElementById("overlay")
            )} */}
        </>
    );
}

export default AddressModal;
