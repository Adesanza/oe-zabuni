import { Table, Button } from 'react-bootstrap';
import { GrFormEdit } from 'react-icons/gr';
import { FaTrashAlt } from 'react-icons/fa';
import './billboard-table.css';
import { useDispatch, useSelector } from 'react-redux';
import { verticalModalContent } from '../../redux/vertical-modal/verticalModalReducer';
import { deleteBillboard } from '../../redux/billboard-data/billboardDataReducer';
import { editBillboardData } from '../../redux/form/billboardFormReducer';

const BillboardsTable = () => {
  const billboardData = useSelector(state => state.billboardData);
  const filterKey = useSelector(({ filterBillboard }) => filterBillboard.keyword);
  const dispatch = useDispatch();
  const handleEdit = (id) => {
    const toBeEdited = billboardData.find(billboard => billboard.id === id);
    dispatch(editBillboardData(toBeEdited));
    dispatch(verticalModalContent('edit-billboard'))
  }
    return (
        <div className="billboard-table">
        <Table >
  <thead className="lightert">
    <tr>
      <th>S/N</th>
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
      <th>COORDINATE</th>
      <th>AMOUNT</th>
      <th><Button type="button" className="create-billboard-btn" onClick={() => dispatch(verticalModalContent('create-billboard'))}>CREATENEW</Button></th>
    </tr>
  </thead>
  <tbody className="table-hover">
        {
            billboardData.filter(details => details.name.toLowerCase().includes(filterKey.toLowerCase()) ).map(details => (
                <tr key={details.id} className="billboard-row table-hover">
                    <td>{details.sn}</td>
                    <td>{details.name}</td>
                    <td>{details.location}</td>
                    <td>{details.type}</td>
                    <td>{`${details.height}m`}</td>
                    <td>{`${details.width}m`}</td>
                    <td className="active-status inactive-status">{details.status}</td>
                    <td>{details.category}</td>
                    <td>{details.class}</td>
                    <td>{details.faces}</td>
                    <td>{details.slots}</td>
                    <td>{details.units}</td>
                    <td>{details.region}</td>
                    <td>{details.state}</td>
                    <td>{details.lga}</td>
                    <td>{details.city}</td>
                    <td>{details.coordinate}</td>
                    <td className="billboard-amount"><span></span>{details.amount}<span>Per annum</span></td>
                    <td>
                      <div className="edit-delete-container">
                      <div onClick={() => handleEdit(details.id)}>
                        <GrFormEdit className="edit-icon"/>
                        <span className="edit-icon-text">Edit</span>
                      </div>
                      <div onClick={() => dispatch(deleteBillboard(details.id))}>
                        <FaTrashAlt className="delete-icon"/>
                        <span className="delete-icon-text">Delete</span>
                      </div>
                      </div>
                    </td>
                </tr>
            ))
        }
  </tbody>
</Table>
</div>
    )
}

export default BillboardsTable;