import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { closeOverheadModalDisplay } from "../../redux/overhead-modal/overheadModalReducer";
import './alertModal.css';

const AlertModal = () => {
  const dispatch = useDispatch();

  return (
    <>
        <Modal.Body>Input successfully Updated</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(closeOverheadModalDisplay()) }>
            Close
          </Button>
        </Modal.Footer>
    </>
  );
};
export default AlertModal;
