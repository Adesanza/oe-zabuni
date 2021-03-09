import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import "./vertical-center-modal.css";
import { closeVerticalModalDisplay } from "../../redux/vertical-modal/verticalModalReducer";
import LoginForm from "../login-form/login-form";
import BillboardForm from "../billboard-form/billboard-form";
import { resetBillboardFormData } from "../../redux/form/billboardFormReducer";

const modalHeading = {
  'login': "login",
  'create-billboard': "create new",
  'edit-billboard': "edit details"
};

const SelectContent = ({ type }) => {
  if (type === "login") return <LoginForm />;
  if(type === 'create-billboard' || 'edit-billboard') return <BillboardForm />;
};

const VerticalCenterModal = ({ children }) => {
  const modalState = useSelector((state) => state.verticalModal);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    if(modalState.type !== 'edit-billboard'){
      dispatch(closeVerticalModalDisplay());
    }else{
      dispatch(closeVerticalModalDisplay());
      dispatch(resetBillboardFormData());
    }
  }
  return (
    <Modal
      show={modalState.show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="vertical-modal"
      animation={false}
      onHide={handleCloseModal}
    >
      <Modal.Header>
        <FaTimes
          className="modal-close-btn"
          onClick={handleCloseModal}
        />
      </Modal.Header>
      <Modal.Body>
        <h4 className="modal-heading">{modalHeading[modalState.type]}</h4>
        <SelectContent type={modalState.type} />
      </Modal.Body>
    </Modal>
  );
};

export default VerticalCenterModal;
