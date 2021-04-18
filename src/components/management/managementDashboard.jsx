import { useSelector } from "react-redux";
import BillboardCategory from "../billboard-category/billboard-category";
import BillboardDataVisuals from "../billboard-visualization/billboard-visualization";
import DisplayBillboards from "../billboards-display/billboards-display";
import CampaignManagement from "../campaigns-mgt/campaigns-mgt";
import PeopleManagement from "../people-mgt/people-mgt";
import { useBillboardGeneralInfo } from "../../hooks/billboard-data-hook";
import "./management-dashboard.css";

const ManagementDashboard = () => {
  const dashboardManagementState = useSelector(
    ({ dashboard }) => dashboard.management
  );
  const { billboardGeneralInfo } = useBillboardGeneralInfo();
  return dashboardManagementState.child === "inventory" ? (
    <DisplayBillboards showCreate showCategoryNav />
  ) : dashboardManagementState.child === "people" ? (
    <PeopleManagement />
  ) : dashboardManagementState.child === "campaign" ? (
    <CampaignManagement />
  ) : (
    <div className="dashy">
      <BillboardCategory />
      <div className="row">
        <div className="col-md-5 p-0">
          {billboardGeneralInfo ? (
            <BillboardDataVisuals billboardGeneralInfo={billboardGeneralInfo} />
          ) : null}
        </div>
        <div className="col-md-7">
          <DisplayBillboards />
        </div>
      </div>
    </div>
  );
};

export default ManagementDashboard;
