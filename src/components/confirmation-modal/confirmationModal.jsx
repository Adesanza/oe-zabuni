import { unwrapResult } from "@reduxjs/toolkit";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAlertContent } from "../../redux/alert/alertPopupReducer";
import { deleteABillboard } from "../../redux/billboard-data/billboardDataReducer";
import { resetConfirmationAction } from "../../redux/confirmation/confirmationPopupReducer";
import { closeOverheadModalDisplay, overheadModalContainer } from "../../redux/overhead-modal/overheadModalReducer";
import './confirmationModal.css';

const ConfirmationModal = () => {
  const dispatch = useDispatch();
  const confirmationState = useSelector(state => state.confirmationPopup);

  return (
    <center>
        <Modal.Body><h2 className="modal-titl">Are you sure you want to <br /> delete these inputs</h2>
            <div>
                <button className="gena" variant="secondary" onClick={() => {
                    if(confirmationState.type === 'delete-billboard' && confirmationState.id) {
                      dispatch(deleteABillboard(confirmationState.id))
                      .then(unwrapResult)
                        .then(data => {
                          console.log("unwrap-delete-billboard",data)
                          dispatch(setAlertContent('alert-success-delete-billboard'))
                          dispatch(overheadModalContainer('alert'))
                        })
                        .catch(err => {
                          console.log("unwrap-error-create-billboard",err)
                          alert("Failed to create billboard")
                        })
                    }
                      dispatch(closeOverheadModalDisplay())  
                } }>Yes</button>
                <button className="gena" variant="secondary" onClick={() => {
                      dispatch(resetConfirmationAction())
                      dispatch(closeOverheadModalDisplay())                  
                } }>No</button>
            </div></Modal.Body>
    </center>
  );
};
export default ConfirmationModal;
