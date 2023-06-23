import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const StyledModal = styled.div`
  position: fixed;
  top: 200px;
  left: 5%;
  width: 90%;
  max-height: 550px;
  background-color: #f4d2ca;
  padding: 20px;
  border: 2px solid #af2919;
  color: #2f4858;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @media (min-width: 768px) {
    .modal {
      width: 200px;
      left: calc(50% - 20rem);
    }
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 1000px;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

function Backdrop(props) {
  return <StyledBackdrop onClick={props.onClose} />;
}

function ModalOverlay(props) {
  return (
    <StyledModal>
      <div>{props.children}</div>
    </StyledModal>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
