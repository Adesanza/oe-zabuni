import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { billboardFilter } from "../../utils/billboard-table/filter-billboard";
import BillboardCategory from "../billboard-category/billboard-category";
import BillboardsTable from "../billboards-table/billboard-table";
import TablePagination from "../pagination/pagination";
import "./billboards-display.css";

const DisplayBillboards = ({ showCreate, showCategoryNav }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableSize] = useState(10);
  const billboardData = useSelector(state => state.billboardData);
  const filterKey = useSelector(state => state.filterBillboard);
  const filteredBillboardData = billboardFilter(filterKey,billboardData,currentPage,tableSize);
  useEffect(() => {
    setCurrentPage(1)
  }, [filterKey.keyword])
  
  return (
    <div className="display-billboards">
      {
        showCategoryNav ? 
          <BillboardCategory />
          :
          null
      }
      <BillboardsTable showCreate={showCreate} setCurrentPage={setCurrentPage} filterKey={filterKey} billboardData={billboardData} filteredBillboardData={filteredBillboardData} />
      <TablePagination currentTablePage={currentPage} pageData={filteredBillboardData.result}  setCurrentPage={setCurrentPage} pageEnd={filteredBillboardData.pageEnd} gotoNextPage={filteredBillboardData.nextPage} />
    </div>
  );
};

export default DisplayBillboards;
