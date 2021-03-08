import { Table } from 'react-bootstrap';
import { billboardData } from './billboard-data';
import './billboard-table.css';

const BillboardsTable = () => {
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
      <th>BUTTON</th>
    </tr>
  </thead>
  <tbody>
        {
            billboardData.map((details,index) => (
                <tr key={index}>
                    <th>{details.name}</th>
                    <th>{details.type}</th>
                    <th>{details.size}</th>
                    <th>{details.status}</th>
                    <th>{details.faces}</th>
                    <th>{details.slots}</th>
                    <th>{details.units}</th>
                    <th>{details.state}</th>
                    <th>{details.lga}</th>
                    <th>{details.city}</th>
                    <th>{details.amount}</th>
                    <th>BUTTON</th>
                </tr>
            ))
        }
  </tbody>
</Table>
</div>
    )
}

export default BillboardsTable;