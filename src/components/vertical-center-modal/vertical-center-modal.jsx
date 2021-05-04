import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { FaTimes } from "react-icons/fa";
import './vertical-center-modal.css';
import { closeVerticalModalDisplay } from '../../redux/vertical-modal/verticalModalReducer';
import LoginForm from '../login-form/login-form';
import BillboardForm from '../billboard-form/billboard-form';
import { resetBillboardFormData } from '../../redux/form/billboardFormReducer';
import SignupForm from '../sign-up-form/sign-up-form';
import MoreDetails from '../more-details/more-details';
import EditUserProfile from '../edit-user-profile/edit-user-profile';

const modalHeading = {
  signup: 'Sign up as a publisher',
  login: 'Login',
  'create-billboard': 'Create new',
  'edit-billboard': 'Edit details',
};

const SelectContent = ({ type }) => {
  if (type === 'login') return <LoginForm />;
  if (type === 'create-billboard' || type === 'edit-billboard')
    return <BillboardForm />;
  if (type === 'signup') return <SignupForm />;
  if (type === 'more-details') return <MoreDetails />;
  if (type === 'edit-user-profile') return <EditUserProfile />;
};

const VerticalCenterModal = ({ children }) => {
  const modalState = useSelector((state) => state.verticalModal);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    if (
      modalState.type === 'edit-billboard' ||
      modalState.type === 'more-details'
    ) {
      dispatch(closeVerticalModalDisplay());
      dispatch(resetBillboardFormData());
    } else {
      dispatch(closeVerticalModalDisplay());
    }
  };
  return (
    <Modal
      show={modalState.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      // centered
      contentClassName={`vertical-modal ${
        modalState.type === 'edit-user-profile' ? '' : 'vertical-modal-others'
      }`}
      animation={false}
      onHide={handleCloseModal}
    >
      <Modal.Header>
        {/* <FaTimes
          className="modal-close-btn"
         
        /> */}
        <img
          src="https://res.cloudinary.com/adesanza/image/upload/v1617978093/zabuni/Group_134_upqus9.svg"
          alt="cancel"
          className="modal-close-btn"
          onClick={handleCloseModal}
        />
      </Modal.Header>
      <Modal.Body className="vertical-modal-body">
        {modalState.type !== 'more-details' ? (
          <h3 className="modal-heading">{modalHeading[modalState.type]}</h3>
        ) : null}
        <SelectContent type={modalState.type} />
      </Modal.Body>
    </Modal>
  );
};

export default VerticalCenterModal;
