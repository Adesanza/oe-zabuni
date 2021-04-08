import { Table, Button } from 'react-bootstrap';
import { GrFormEdit } from 'react-icons/gr';
import { FaTrashAlt } from 'react-icons/fa';
// import { FiMoreVertical } from 'react-icons/fi';
import './billboard-table.css';
import { useDispatch, useSelector } from 'react-redux';
import { verticalModalContent } from '../../redux/vertical-modal/verticalModalReducer';
// import { deleteBillboard } from '../../redux/billboard-data/billboardDataReducer';
import { editBillboardData } from '../../redux/form/billboardFormReducer';
import { billboardFilter } from '../../utils/billboard-table/filter-billboard';
import { formatBillboardState, formatBillboardType } from '../../utils/billboard-table/format-text';
import { overheadModalContainer } from '../../redux/overhead-modal/overheadModalReducer';
import { setConfirmationAction } from '../../redux/confirmation/confirmationPopupReducer';

const BillboardsTable = ({showCreate}) => {
  const billboardData = useSelector(state => state.billboardData);
  const filterKey = useSelector(state => state.filterBillboard);
  const dispatch = useDispatch();
  const handleEdit = (id) => {
    const toBeEdited = billboardData.find(billboard => billboard.id === id);
    dispatch(editBillboardData(toBeEdited));
    dispatch(verticalModalContent('edit-billboard'))
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
            billboardFilter(filterKey,billboardData).map(details => (
                <tr key={details.id} className="billboard-row table-hover" onClick={() => dispatch(verticalModalContent('more-details'))}>
                    {/* <td id="fonter">
                      {/* <FiMoreVertical className="more-icon"/> 
                      <img src="https://res.cloudinary.com/adesanza/image/upload/v1616156307/zabuni/Group_1787_kbiyfb.svg" alt="more..." className="more-icon" onClick={() => dispatch(verticalModalContent('more-details'))}/>
                      <span>{details.sn}</span>
                    </td> */}
                    <td className="fonter">{details.name}</td>
                    <td className="locate">{details.location}</td>
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
                    <td className={details.status==='active' ? 'active' : 'inactive'} >{details.status}</td>
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
                        handleEdit(details.id)
                      }}>
                        <GrFormEdit className="edit-icon"/>
                        <span className="edit-icon-text">Edit</span>
                      </div>
                      <div onClick={(e) => {
                        e.stopPropagation();
                        dispatch(setConfirmationAction({type:'delete-billboard', id: details.id}))
                        dispatch(overheadModalContainer('confirmation'))
                        // dispatch(deleteBillboard(details.id));
                      }}>
                        <FaTrashAlt className="delete-icon"/>
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
</div>
    )
}

export default BillboardsTable;