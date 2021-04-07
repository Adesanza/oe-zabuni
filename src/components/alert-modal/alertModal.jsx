import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeOverheadModalDisplay } from "../../redux/overhead-modal/overheadModalReducer";
import './alertModal.css';

const AlertModal = () => {
  const dispatch = useDispatch();
  const alertState = useSelector(state => state.alertContent)

  return (
    <>
        <Modal.Body>Input successfully {alertState === 'alert-success-delete-billboard' ? 'deleted' : alertState === 'alert-success-edit-billboard' ? 'updated' : 'created'}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(closeOverheadModalDisplay()) }>
            Close
          </Button>
        </Modal.Footer>
    </>
  );
};
export default AlertModal;
