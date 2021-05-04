import './pagination.css';
const TablePagination = ({
  currentTablePage,
  pageData,
  setCurrentPage,
  gotoNextPage,
  pageEnd,
}) => {
  return pageData.length ? (
    <nav className="paginate">
      <ul className="pagination justify-content-end">
        <li
          className={`page-item ${currentTablePage === 1 ? 'disabled' : ''}`}
          onClick={() => {
            if (currentTablePage > 1) setCurrentPage(currentTablePage - 1);
          }}
        >
          <span className="page-link">Previous</span>
        </li>
        <li
          className={`page-item ${
            currentTablePage === 1 ? 'active active-blue' : ''
          }`}
          onClick={() => {
            if (currentTablePage > 1) setCurrentPage(currentTablePage - 1);
          }}
        >
          <span className="page-link">
            {currentTablePage === 1 ? 1 : currentTablePage - 1}
          </span>
        </li>
        <li
          className={`page-item ${
            currentTablePage !== 1 ? 'active active-blue' : ''
          } ${currentTablePage === 1 && !gotoNextPage ? 'disabled' : ''}`}
          onClick={() => {
            if (currentTablePage === 1 && gotoNextPage)
              setCurrentPage(currentTablePage + 1);
          }}
        >
          <span className="page-link">
            {currentTablePage === 1 ? currentTablePage + 1 : currentTablePage}
          </span>
        </li>
        <li
          className={`page-item ${pageEnd ? 'disabled' : ''}`}
          onClick={() => {
            if (!pageEnd) {
              currentTablePage === 1
                ? setCurrentPage(currentTablePage + 2)
                : setCurrentPage(currentTablePage + 1);
            }
          }}
        >
          <span className="page-link">
            {currentTablePage === 1
              ? currentTablePage + 2
              : currentTablePage + 1}
          </span>
        </li>
        <li
          className={`page-item ${pageEnd ? 'disabled' : ''}`}
          onClick={() => {
            if (!pageEnd) setCurrentPage(currentTablePage + 1);
          }}
        >
          <span className="page-link">Next</span>
        </li>
      </ul>
    </nav>
  ) : null;
};

export default TablePagination;
