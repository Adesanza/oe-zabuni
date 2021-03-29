import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dashboardContent } from '../../redux/dashboard/dashboardReducer';
import SidebarDropdown from '../side-bar-dropdown/side-bar-dropdown';
import './side-bar.css';
import { dropdownData } from './sidebar-dropdown-data';

const SideBar = () => {
    const [activeSidebar, setactiveSidebar] = useState(dropdownData);
    const dispatch = useDispatch();
    // console.log("state",activeSidebar === dropdownData)
    useEffect(() => {
        const updateSidebar = {...dropdownData};
    
        console.log("data",updateSidebar)
        setactiveSidebar({...dropdownData,management:{active: true, title:'management'}});
    }, [])
    const handleActiveSidebar = (sidebarTitle) => {
        if(sidebarTitle === 'management'){
            console.log("searx")
            dispatch(dashboardContent('management'));
        }
        const updateSidebar = {...activeSidebar};
        // console.log("updayte",updateSidebar == dropdownData);
        console.log("title",sidebarTitle)
        // updateSidebar[sidebarTitle].active = !updateSidebar[sidebarTitle].active;
        console.log("data",updateSidebar)
        setactiveSidebar({...dropdownData,[sidebarTitle]:{active: !updateSidebar[sidebarTitle].active,title:sidebarTitle}});
    }
    return (
        <div className="side-bar">
            <SidebarDropdown data={activeSidebar.management} handleActiveSidebar={handleActiveSidebar} >
                    <p onClick={() => dispatch(dashboardContent('inventory'))} >Inventory</p>
                    <p>People</p>
                    <p>Campaigns</p>
                </SidebarDropdown>
            <SidebarDropdown data={activeSidebar.marketing} handleActiveSidebar={handleActiveSidebar} >
                    <p>zabuni</p>
                    <p>zabuni</p>
                    <p>zabuni</p>
                </SidebarDropdown>
            <SidebarDropdown data={activeSidebar.technical} handleActiveSidebar={handleActiveSidebar} >
                        <p>Javascript</p>
                        <p>React</p>
                        <p>Node</p>
                </SidebarDropdown>
            <SidebarDropdown data={activeSidebar.operations} handleActiveSidebar={handleActiveSidebar} >
                            <p>Addition</p>
                            <p>Multiplication</p>
                            <p>Division</p>
                </SidebarDropdown>
            <SidebarDropdown data={activeSidebar.finance} handleActiveSidebar={handleActiveSidebar} > 
                            <p>Dollar</p>
                            <p>Naira</p>
                            <p>Kobo</p>
                </SidebarDropdown>
            {/* <div className="sidebar-settings">
                <span><FaVectorSquare/></span>
                <span>settings</span>
            </div> */}
        </div>
    )
}

export default SideBar;