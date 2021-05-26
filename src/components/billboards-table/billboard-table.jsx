import { Table, Button } from 'react-bootstrap';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import { RiPencilLine } from 'react-icons/ri';
import './billboard-table.css';
import { useDispatch } from 'react-redux';
import { verticalModalContent } from '../../redux/vertical-modal/verticalModalReducer';
import { editBillboardData } from '../../redux/form/billboardFormReducer';
import {
  formatBillboardLocation,
  formatBillboardState,
  formatBillboardType,
  formatBillboardRegion,
} from '../../utils/billboard-table/format-text';
import { overheadModalContainer } from '../../redux/overhead-modal/overheadModalReducer';
import { setConfirmationAction } from '../../redux/confirmation/confirmationPopupReducer';
import RingLoader from '../loader/loader';
import { tableHeaderData } from './table-header-data';
import { useState } from 'react';
import { filterBillboardData } from '../../redux/filter-Billboard/filterBillboardReducer';

const BillboardsTable = ({
  showCreate,
  billboardData,
  filteredBillboardData,
  isLoadingData,
}) => {
  const [tableHead, updateTableHead] = useState(tableHeaderData);
  const dispatch = useDispatch();
  const handleEdit = (id, moreDeatils = false) => {
    const toBeEdited = billboardData.find((billboard) => billboard._id === id);
    dispatch(editBillboardData(toBeEdited));
    if (!moreDeatils) dispatch(verticalModalContent('edit-billboard'));
  };
  const handleTableHead = (searchType, searchValue, headerIdx) => {
    const updateTableHeadMap = tableHead.map((tableHeader, idx) => {
      if (idx === headerIdx) {
        return {
          ...tableHeader,
          isSortedDesc: !tableHeader.isSortedDesc,
          isSortedAsc: !tableHeader.isSortedAsc,
        };
      }
      return { ...tableHeader, isSortedDesc: true, isSortedAsc: false };
    });
    dispatch(filterBillboardData({ type: searchType, keyword: searchValue }));
    updateTableHead(updateTableHeadMap);
  };

  return (
    <div className="billboard-table hermis">
      <Table>
        <thead className="lightert">
          <tr>
            {tableHead.map(({ headName, isSorted, isSortedDesc }, idx) => (
              <th
                key={idx}
                className={isSorted ? 'show-cursor' : ''}
                onClick={() => {
                  if (isSorted) {
                    handleTableHead(
                      'sort-by-header',
                      `${headName}-${isSortedDesc ? 'desc' : 'asc'}`,
                      idx
                    );
                  }
                }}
              >
                <span>{headName}</span>
                {isSorted ? (
                  isSortedDesc ? (
                    <span className="sort-btn-down">
                      <FaSortDown />
                    </span>
                  ) : (
                    <span className="sort-btn-up">
                      <FaSortUp />
                    </span>
                  )
                ) : null}
              </th>
            ))}
            {showCreate ? (
              <th>
                <Button
                  type="button"
                  className="create-billboard-btn"
                  onClick={() => {
                    dispatch(verticalModalContent('create-billboard'));
                  }}
                >
                  CREATE NEW
                </Button>
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody className="evenad">
          {isLoadingData ? (
            <tr className="table-loading">
              <td colSpan={100}>
                <RingLoader borderColor="#0056b3" />
              </td>
            </tr>
          ) : (
            filteredBillboardData.result.map((details) => (
              <tr
                key={details._id}
                className="billboard-row table-hover"
                onClick={() => {
                  handleEdit(details._id, true);
                  dispatch(verticalModalContent('more-details'));
                }}
              >
                <td className="fonter">{details.name}</td>
                <td className="locate">
                  {formatBillboardLocation(details.location)}
                </td>
                <td className="fonter">{formatBillboardType(details.type)}</td>
                <td className="fonter">
                  <span>{`${details.height_m}m`}</span>
                  {details.class === 'digital' ? (
                    <>
                      <br />
                      <span>{`${details.height_px}px`}</span>
                    </>
                  ) : null}
                </td>
                <td className="fonter">
                  <span>{`${details.width_m}m`}</span>
                  {details.class === 'digital' ? (
                    <>
                      <br />
                      <span>{`${details.width_px}px`}</span>
                    </>
                  ) : null}
                </td>
                <td
                  className={
                    details.status === 'active'
                      ? 'active'
                      : details.status === 'inactive'
                      ? 'inactive'
                      : 'vacant'
                  }
                >
                  {details.status}
                </td>
                <td className="fonter">{details.category}</td>
                <td className="fonter">{details.class}</td>
                <td className="fonter">{details.face}</td>
                <td className="fonter">{details.slot}</td>
                <td className="fonter">{details.unit}</td>
                <td className="fonter">
                  {formatBillboardRegion(details.region)}
                </td>
                <td className="fonter text-uppercase">
                  {formatBillboardState(details.state)}
                </td>
                <td className="fonter">{details.lga}</td>
                <td className="fonter">{details.city}</td>
                <td className="fonter">{details.coordinate}</td>
                <td className="fonter billboard-amount">
                  {details.amount}
                  <span>Per annum</span>
                </td>
                {showCreate ? (
                  <td className="fonter">
                    <div className="edit-delete-container">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(details._id);
                        }}
                      >
                        <RiPencilLine className="edit-icon" />
                        <span className="edit-icon-text">Edit</span>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(
                            setConfirmationAction({
                              type: 'delete-billboard',
                              id: details._id,
                            })
                          );
                          dispatch(overheadModalContainer('confirmation'));
                        }}
                      >
                        <img
                          src="https://res.cloudinary.com/adesanza/image/upload/v1616010293/zabuni/Vector_c0exq8.png"
                          alt="delete"
                          className="delete-icon"
                        />
                        <span className="delete-icon-text">Delete</span>
                      </div>
                    </div>
                  </td>
                ) : null}
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BillboardsTable;
