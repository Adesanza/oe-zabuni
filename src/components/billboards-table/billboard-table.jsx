import { Table, Button } from 'react-bootstrap';
import { RiDeleteBin6Line, RiPencilLine } from 'react-icons/ri';
import './billboard-table.css';
import { useDispatch } from 'react-redux';
import { verticalModalContent } from '../../redux/vertical-modal/verticalModalReducer';
import { editBillboardData } from '../../redux/form/billboardFormReducer';
// import { billboardFilter } from '../../utils/billboard-table/filter-billboard';
import { formatBillboardLocation, formatBillboardState, formatBillboardType } from '../../utils/billboard-table/format-text';
import { overheadModalContainer } from '../../redux/overhead-modal/overheadModalReducer';
import { setConfirmationAction } from '../../redux/confirmation/confirmationPopupReducer';
import RingLoader from '../loader/loader';
// import TablePagination from '../pagination/pagination';

const BillboardsTable = ({showCreate, billboardData, filteredBillboardData, isLoadingData}) => {
  const dispatch = useDispatch();
  const handleEdit = (id,moreDeatils = false) => {
    const toBeEdited = billboardData.find(billboard => billboard._id === id);
    dispatch(editBillboardData(toBeEdited));
    if(!moreDeatils) dispatch(verticalModalContent('edit-billboard'))
  }
    return (
        <div className="billboard-table hermis">
        <Table >
  <thead className="lightert">
    <tr>
      <th>NAME</th>
      <th>LOCATION</th>
      <th>TYPE</th>
      <th>HEIGHT</th>
      <th>WIDTH</th>
      <th>STATUS</th>
      <th>CATEGORY</th>
      <th>CLASS</th>
      <th>FACE</th>
      <th>SLOT</th>
      <th>UNIT</th>
      <th>REGION</th>
      <th>STATE</th>
      <th>LGA</th>
      <th>CITY</th>
      <th>COORDINATE (LAT/LONG)</th>
      <th>AMOUNT</th>
      {
        showCreate ?
        <th><Button type="button" className="create-billboard-btn" onClick={() => dispatch(verticalModalContent('create-billboard'))}>CREATE</Button></th>
        :
        null
      }
      
    </tr>
  </thead>
  <tbody className="table-hover">
        {
          isLoadingData ?
          <tr className="table-loading">
            <td colSpan={100}>
             <RingLoader borderColor="#0056b3" />
            </td>
           
          </tr>
          :
            filteredBillboardData.result.map(details => (
                <tr key={details._id} className="billboard-row table-hover" 
                    onClick={() => {
                      handleEdit(details._id,true)
                      dispatch(verticalModalContent('more-details'))
                    }}>
                    <td className="fonter">{details.name}</td>
                    <td className="locate">{formatBillboardLocation(details.location)}</td>
                    <td className="fonter">{formatBillboardType(details.type)}</td>
                    <td className="fonter">
                        <span>{`${details.height_m}m`}</span>
                      {
                        details.class === 'digital' ?
                        <>
                        <br />
                        <span>{`${details.height_px}px`}</span>
                        </>
                        :
                        null
                      }
                    </td>
                    <td className="fonter">
                        <span>{`${details.width_m}m`}</span>
                      {
                        details.class === 'digital' ?
                        <>
                        <br />
                        <span>{`${details.width_px}px`}</span>
                        </>
                        :
                        null
                      }
                    </td>
                    <td className={details.status==='active' ? 'active' : details.status==='inactive' ? 'inactive' : 'vacant'} >{details.status}</td>
                    <td className="fonter">{details.category}</td>
                    <td className="fonter">{details.class}</td>
                    <td className="fonter">{details.face}</td>
                    <td className="fonter">{details.slot}</td>
                    <td className="fonter">{details.unit}</td>
                    <td className="fonter">{details.region}</td>
                    <td className="fonter">{formatBillboardState(details.state)}</td>
                    <td className="fonter">{details.lga}</td>
                    <td className="fonter">{details.city}</td>
                    <td className="fonter">{details.coordinate}</td>
                    <td className="fonter billboard-amount"><span></span>{details.amount}<span>Per annum</span></td>
                    {
                      showCreate ?
                      <td className="fonter">
                      <div className="edit-delete-container">
                      <div onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(details._id)
                      }}>
                        <RiPencilLine className="edit-icon"/>
                        <span className="edit-icon-text">Edit</span>
                      </div>
                      <div onClick={(e) => {
                        e.stopPropagation();
                        dispatch(setConfirmationAction({type:'delete-billboard', id: details._id}))
                        dispatch(overheadModalContainer('confirmation'))
                        // dispatch(deleteBillboard(details.id));
                      }}>
                        <RiDeleteBin6Line className="delete-icon"/>
                        <span className="delete-icon-text">Delete</span>
                      </div>
                      </div>
                    </td>
                      :
                      null
                    }
                </tr>
            ))
        }
  </tbody>
</Table>
{/* <TablePagination currentTablePage={currentPage} pageData={filteredBillboardData.result}  setCurrentPage={setCurrentPage} pageEnd={filteredBillboardData.pageEnd} gotoNextPage={filteredBillboardData.nextPage}/> */}
</div>
    )
}

export default BillboardsTable;