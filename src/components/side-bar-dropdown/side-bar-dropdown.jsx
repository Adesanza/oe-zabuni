import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import './side-bar-dropdown.css';

const SidebarDropdown = ({ data, handleActiveSidebar, children }) => {
    return (
        <div className="side-bar-dropdown">
            <div className={`${data.active && 'sidebar-dropdown-active'} sidebar-dropdown-toggle`} onClick={() => handleActiveSidebar(data.title)}>
                    {
                        data.active ?
                        (<span><FaCaretDown/></span>)
                        :
                        (<span><FaCaretRight/></span>)
                    }
                    {/* <img src="https://res.cloudinary.com/adesanza/image/upload/v1615248780/zabuni/Vector_1_kupos1.svg" alt="dropdown icon"/> */}
                <span><img src="https://res.cloudinary.com/adesanza/image/upload/v1615590578/zabuni/Group_1643_cbvpbo.svg" alt=""/></span>
                <span>{data.title}</span>
            </div>
            {
                data.active ? 
                <div className="sidebar-dropdown-content">
                        { children }
                    </div>
                :
                null
            } 
        </div>
    )
}

export default SidebarDropdown;