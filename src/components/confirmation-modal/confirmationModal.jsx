import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { overheadModalContainer } from "../../redux/overhead-modal/overheadModalReducer";
import './confirmationModal.css';

const ConfirmationModal = () => {
  const dispatch = useDispatch();

  return (
    <>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to go? Click Yes to see the alert modal</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(overheadModalContainer('alert-success')) }>
            Yes
          </Button>
        </Modal.Footer>
    </>
  );
};
export default ConfirmationModal;
