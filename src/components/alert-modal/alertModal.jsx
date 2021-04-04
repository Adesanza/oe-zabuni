import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { closeOverheadModalDisplay } from "../../redux/overhead-modal/overheadModalReducer";
import './alertModal.css';

const AlertModal = () => {
  const dispatch = useDispatch();

  return (
    <>
        <Modal.Header closeButton>
          <Modal.Title>Alert Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Successful content</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(closeOverheadModalDisplay()) }>
            Close
          </Button>
        </Modal.Footer>
    </>
  );
};
export default AlertModal;
