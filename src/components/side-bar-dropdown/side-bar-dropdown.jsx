import { FaCaretRight, FaCaretDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router';
import { resetDashboard } from '../../redux/dashboard/dashboardReducer';
import { dropdownData } from '../side-bar/sidebar-dropdown-data';
import './side-bar-dropdown.css';
const SidebarDropdown = ({ data, children, setactiveSidebar }) => {
  let history = useHistory();
  let dispatch = useDispatch();
  let location = useLocation();
  let pathName = location.pathname.replace('/', '');
  return (
    <div className="side-bar-dropdown">
      <div
        className={`${
          pathName === data.title ? 'sidebar-dropdown-active' : ''
        } sidebar-dropdown-toggle`}
        onClick={() => {
          if (pathName === data.title) {
            setactiveSidebar({
              ...dropdownData,
              [pathName]: {
                active: !data.active,
                title: pathName,
              },
            });
          } else {
            history.push(data.title);
          }
          dispatch(resetDashboard());
        }}
      >
        {data.active ? (
          <span>
            <FaCaretDown />
          </span>
        ) : (
          <span>
            <FaCaretRight />
          </span>
        )}
        {/* <img src="https://res.cloudinary.com/adesanza/image/upload/v1615248780/zabuni/Vector_1_kupos1.svg" alt="dropdown icon"/> */}
        <span>
          <img
            src="https://res.cloudinary.com/adesanza/image/upload/v1615590578/zabuni/Group_1643_cbvpbo.svg"
            alt=""
          />
        </span>
        <span>{data.title}</span>
      </div>
      {data.active ? (
        <div className="sidebar-dropdown-content">{children}</div>
      ) : null}
    </div>
  );
};

export default SidebarDropdown;
