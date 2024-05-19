import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import Login from "../pages/Login";

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
    z-index: 100;
`;

function LoginModal({ setIsOpen }) {
    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => (document.body.style = `overflow: auto`);
    }, []);
    return (
        <>
            {createPortal(
                <div>
                    <Backdrop onClick={() => setIsOpen(false)} />
                    <Overlay>
                        <Login />
                    </Overlay>
                </div>,
                document.getElementById("modal")
            )}
        </>
    );
}

export default LoginModal;
