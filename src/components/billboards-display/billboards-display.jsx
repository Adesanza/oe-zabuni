import { useSelector, useDispatch } from "react-redux";
import { filterBillboardData } from "../../redux/filter-Billboard/filterBillboardReducer";
import BillboardsTable from "../billboards-table/billboard-table";
import "./billboards-display.css";

const DisplayBillboards = ({ showCreate }) => {
  const filterBillboardState = useSelector((state) => state.filterBillboard);
  const dispatch = useDispatch();
  return (
    <div className="display-billboards">
      <span
        className={
          filterBillboardState.type !== "category"
            ? "display-billboards-active"
            : ""
        }
        onClick={() =>
          dispatch(filterBillboardData({ type: "all", keyword: "" }))
        }
      >
        {" "}
        All{" "}
      </span>
      <span
        className={
          filterBillboardState.type === "category" &&
          filterBillboardState.keyword === "billboard"
            ? "display-billboards-active"
            : ""
        }
        onClick={() =>
          dispatch(filterBillboardData({ type: "category", keyword: "billboard" }))
        }
      >
        Billboard
      </span>
      <BillboardsTable showCreate={showCreate} />
    </div>
  );
};

export default DisplayBillboards;
