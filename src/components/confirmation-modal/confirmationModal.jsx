import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAlertContent } from "../../redux/alert/alertPopupReducer";
import { resetConfirmationAction } from "../../redux/confirmation/confirmationPopupReducer";
import { closeOverheadModalDisplay, overheadModalContainer } from "../../redux/overhead-modal/overheadModalReducer";
import { mutate } from "swr";
import billboardDataApi, { billboardRoute } from "../../utils/billboard-table/billboard-api";
import { useBillboardData } from "../../hooks/billboard-data-hook";
import './confirmationModal.css';

const ConfirmationModal = () => {
  const { billboardData } = useBillboardData(billboardRoute.get);
  const dispatch = useDispatch();
  const confirmationState = useSelector(state => state.confirmationPopup);

  return (
    <center>
        <Modal.Body><h2 className="modal-titl">Are you sure you want to <br /> delete these inputs</h2>
            <div>
                <button className="gena" variant="secondary" onClick={async () => {
                  dispatch(closeOverheadModalDisplay()) 
                    if(confirmationState.type === 'delete-billboard' && confirmationState.id) {
                      try {
                          let updatedBillboardData = [...billboardData]
                          const deletedBillboard = await billboardDataApi.delete(confirmationState.id)
                          const idx = billboardData.findIndex(billboard => billboard._id === deletedBillboard.billboardData._id);
                          if(idx >= 0) {
                          updatedBillboardData.splice(idx,1)
                          await mutate(billboardRoute.get,{billboardData: updatedBillboardData},false);
                          dispatch(setAlertContent('alert-success-delete-billboard'))
                          dispatch(overheadModalContainer('alert'))
                        }
                      } catch (err) {
                          console.log("mutate-error-create-billboard",err)
                          alert("Failed to delete billboard")
                      }
                    } 
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
