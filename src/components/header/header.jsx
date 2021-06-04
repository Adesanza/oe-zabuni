import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { verticalModalContent } from '../../redux/vertical-modal/verticalModalReducer';
import './header.css';
// import { BiSearch } from 'react-icons/bi';
// import { RiArrowDownSLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { resetDashboard } from '../../redux/dashboard/dashboardReducer';
import { useUserData } from '../../hooks/user-hook';

const Header = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const userState = useSelector((state) => state.user);
  const { logUserOut } = useUserData();
  return userState ? (
    <header>
      <nav className="navbar fixed-top navbar-expand-sm  navbar-light header-nav">
        <Link className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/adesanza/image/upload/v1615320288/zabuni/Group_15_bed3tj.svg"
            alt="OE"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-4"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-list-4">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle dropping"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {`${userState.first_name} ${userState.last_name}`}{' '}
                <CgProfile className="cgprofile" />
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <p
                  className="dropdown-item user-options"
                  onClick={() => {
                    dispatch(resetDashboard());
                    history.push('/management');
                  }}
                >
                  Dashboard
                </p>
                <p
                  className="dropdown-item user-options"
                  onClick={() => {
                    dispatch(verticalModalContent('edit-user-profile'));
                  }}
                >
                  Edit Profile
                </p>
                <Link className="dropdown-item" to="/">
                  Settings
                </Link>
                <p
                  className="dropdown-item user-options"
                  onClick={() => {
                    logUserOut();
                    history.push('/');
                    dispatch(resetDashboard());
                  }}
                >
                  Log Out
                </p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  ) : (
    <header>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light header-nav1">
        <Link className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/adesanza/image/upload/v1615071965/zabuni/Group_278_svodmy.svg"
            alt="ZABUNI"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {/* <div className="searchContainer">
              <BiSearch className="searchIcon" />
              <input
                className="searcher"
                placeholder="Where will you like to place your advert?"
                type="search"
              />
            </div> */}
            <li>
              <button
                className="homeb start"
                onClick={() => dispatch(verticalModalContent('signup'))}
              >
                Sign Up
                {/* as <RiArrowDownSLine className="ArrowDown" /> */}
              </button>
            </li>
            <li>
              <button
                type="button"
                data-toggle="modal"
                data-target="#myModal"
                className="homeb1 start1"
                onClick={() => dispatch(verticalModalContent('login'))}
              >
                Login as ADMIN{' '}
                {/* as <RiArrowDownSLine className="ArrowDown" /> */}
              </button>
              <button
                type="button"
                data-toggle="modal"
                data-target="#myModal"
                className="homeb1 start1"
                onClick={() => dispatch(verticalModalContent('login'))}
              >
                Login as STAFF{' '}
                {/* as <RiArrowDownSLine className="ArrowDown" /> */}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
