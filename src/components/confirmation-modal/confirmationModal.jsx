import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { closeOverheadModalDisplay, overheadModalContainer } from "../../redux/overhead-modal/overheadModalReducer";
import './confirmationModal.css';

const ConfirmationModal = () => {
  const dispatch = useDispatch();

  return (
    <center>
        <Modal.Body><h2 className="modal-titl">Are you sure you want to <br /> delete these inputs</h2>
            <div>
                <button className="gena" variant="secondary" onClick={() => dispatch(overheadModalContainer('alert-success')) }>Yes</button>
                <button className="gena" variant="secondary" onClick={() => dispatch(closeOverheadModalDisplay()) }>No</button>
            </div></Modal.Body>
    </center>
  );
};
export default ConfirmationModal;
