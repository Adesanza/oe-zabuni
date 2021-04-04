import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { overheadModalContainer } from "../../redux/overhead-modal/overheadModalReducer";
import './confirmationModal.css';

const ConfirmationModal = () => {
  const dispatch = useDispatch();

  return (
    <>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Uncle shina, do you know our netflix has expired? Click Yes to see the alert modal</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(overheadModalContainer('alert-success')) }>
            Yes
          </Button>
        </Modal.Footer>
    </>
  );
};
export default ConfirmationModal;
