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
        <Table hover >
  <thead className="bg-primary text-light">
    <tr>
      <th>NAME</th>
      <th>TYPE</th>
      <th>SIZE</th>
      <th>STATUS</th>
      <th>FACES</th>
      <th>SLOTS</th>
      <th>UNITS</th>
      <th>STATE</th>
      <th>LGA</th>
      <th>CITY</th>
      <th>AMOUNT</th>
      <th><Button type="button" className="create-billboard-btn" onClick={() => dispatch(verticalModalContent('create-billboard'))}>create new</Button></th>
    </tr>
  </thead>
  <tbody>
        {
            billboardData.filter(details => details.name.toLowerCase().includes(filterKey.toLowerCase()) ).map(details => (
                <tr key={details.id} className="billboard-row">
                    <td>{details.name}</td>
                    <td>{details.type}</td>
                    <td>{details.size}</td>
                    <td>{details.status}</td>
                    <td>{details.faces}</td>
                    <td>{details.slots}</td>
                    <td>{details.units}</td>
                    <td>{details.state}</td>
                    <td>{details.lga}</td>
                    <td>{details.city}</td>
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