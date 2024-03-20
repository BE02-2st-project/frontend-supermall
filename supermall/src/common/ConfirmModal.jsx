import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

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
`;

const ConfirmBox = styled.div`
    padding: 1.5rem 1rem;
    > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddd;
        padding: 0 0.5rem;
    }
    h1 {
        font-size: 1.5rem;
        font-weight: 500;
        padding: 1rem 0;
    }
`;

const CloseIcons = styled(IoClose)`
    font-size: 2rem;
`;

const ConfirmTextBox = styled.div`
    margin: 3rem auto;
    text-align: center;
`;

const ControlButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    button {
        width: 12rem;
        height: 3rem;
        background-color: white;
        border: 1px solid black;
        cursor: pointer;
    }

    button:nth-child(2) {
        background-color: black;
        border: 1px solid black;
        color: white;
    }
`;
function ConfirmModal({ setIsOpen, confirmText, onClickConfirm }) {
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
                        <ConfirmBox>
                            <div>
                                <h1>확인</h1>
                                <CloseIcons onClick={() => setIsOpen(false)} />
                            </div>
                            <ConfirmTextBox>{confirmText}</ConfirmTextBox>
                            <ControlButtonBox>
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                >
                                    취소
                                </button>
                                <button onClick={onClickConfirm}>확인</button>
                            </ControlButtonBox>
                        </ConfirmBox>
                    </Overlay>
                </div>,
                document.getElementById("modal")
            )}
        </>
    );
}

export default ConfirmModal;
