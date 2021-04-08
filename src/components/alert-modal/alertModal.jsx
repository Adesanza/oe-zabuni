import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeOverheadModalDisplay } from "../../redux/overhead-modal/overheadModalReducer";
import './alertModal.css';

const AlertModal = () => {
  const dispatch = useDispatch();
  const alertState = useSelector(state => state.alertContent)

  return (
    <center className="adesw">
      <img src="https://res.cloudinary.com/adesanza/image/upload/v1617875623/zabuni/Group_2107_cdvamr.svg" alt="" />
        <Modal.Body className="alerter">Input successfully {alertState === 'alert-success-delete-billboard' ? 'deleted' : alertState === 'alert-success-edit-billboard' ? 'updated' : 'created'}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(closeOverheadModalDisplay()) }>
            Close
          </Button>
        </Modal.Footer>
    </center>
  );
};
export default AlertModal;
