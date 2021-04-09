import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { closeOverheadModalDisplay } from "../../redux/overhead-modal/overheadModalReducer";
import AlertModal from "../alert-modal/alertModal";
import ConfirmationModal from "../confirmation-modal/confirmationModal";
import './overheadModalContainer.css';

const OverheadModalContainer = () => {
    const modalState = useSelector((state) => state.overheadModal);
    const dispatch = useDispatch();
    return (
      <>
        <Modal show={modalState.show} onHide={() => dispatch(closeOverheadModalDisplay()) } animation={false} >
          {
              modalState.type === 'confirmation' ? 
              <ConfirmationModal />
              :
              <AlertModal />
          }
        </Modal>
      </>
    );
}

export default OverheadModalContainer;