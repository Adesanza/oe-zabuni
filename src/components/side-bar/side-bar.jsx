import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { managementDashboard, resetDashboard } from '../../redux/dashboard/dashboardReducer';
import SidebarDropdown from '../side-bar-dropdown/side-bar-dropdown';
import './side-bar.css';
import { dropdownData } from './sidebar-dropdown-data';

const SideBar = () => {
  const [activeSidebar, setactiveSidebar] = useState(dropdownData);
  const dispatch = useDispatch();
  const dashboardState = useSelector(({dashboard}) => dashboard);
  let location = useLocation();
  // console.log(location.pathname)
  // console.log("state",activeSidebar === dropdownData)
  useEffect(() => {
    const updateSidebar = { ...dropdownData };

    console.log('data', updateSidebar);
    setactiveSidebar({
      ...dropdownData,
      [location.pathname.replace('/', '')]: { active: true, title: location.pathname.replace('/', '') },
    });
  }, [location.pathname]);
//   const handleActiveSidebar = (sidebarTitle) => {
//     if (sidebarTitle === 'management') {
//       console.log('searx');
//       dispatch(dashboardContent('management'));
//     }
//     const updateSidebar = { ...activeSidebar };
//     // console.log("updayte",updateSidebar == dropdownData);
//     console.log('title', sidebarTitle);
//     // updateSidebar[sidebarTitle].active = !updateSidebar[sidebarTitle].active;
//     console.log('data', updateSidebar);
//     setactiveSidebar({
//       ...dropdownData,
//       [sidebarTitle]: {
//         active: !updateSidebar[sidebarTitle].active,
//         title: sidebarTitle,
//       },
//     });
//   };
  return (
    <div className="side-bar">
      <SidebarDropdown
        data={activeSidebar.management}
      >
        <p onClick={() => dispatch(managementDashboard('inventory'))} className={dashboardState.management.child==='inventory' && 'highlight'}>Inventory</p>
        <p onClick={() => dispatch(managementDashboard('people'))} className={dashboardState.management.child==='people' && 'highlight'}>People</p>
        <p onClick={() => dispatch(managementDashboard('campaign'))} className={dashboardState.management.child==='campaign' && 'highlight'}>Campaigns</p>
      </SidebarDropdown>
      <SidebarDropdown
        data={activeSidebar.marketing}
      >
        <p>zabuni</p>
        <p>zabuni</p>
        <p>zabuni</p>
      </SidebarDropdown>
      <SidebarDropdown
        data={activeSidebar.technical}
      >
        <p>Javascript</p>
        <p>React</p>
        <p>Node</p>
      </SidebarDropdown>
      <SidebarDropdown
        data={activeSidebar.operations}
      >
        <p>Addition</p>
        <p>Multiplication</p>
        <p>Division</p>
      </SidebarDropdown>
      <SidebarDropdown
        data={activeSidebar.finance}
      >
        <p>Dollar</p>
        <p>Naira</p>
        <p>Kobo</p>
      </SidebarDropdown>
      {/* <div className="sidebar-settings">
                <span><FaVectorSquare/></span>
                <span>settings</span>
            </div> */}
    </div>
  );
};

export default SideBar;
