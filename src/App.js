import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/header';
import OverheadModalContainer from './components/overhead-modal/overheadModalContainer';
import VerticalCenterModal from './components/vertical-center-modal/vertical-center-modal';
import Dashboard from './pages/dashboard/dashboard';
import Homepage from './pages/homepage/homepage';

const App = () => {
  const userState = useSelector((state) => state.user);
  return (
    <>
      <Header />
      <VerticalCenterModal />
      <OverheadModalContainer />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/management">
          {userState ? <Dashboard type="management" /> : <Redirect to="/" />}
        </Route>
        <Route path="/marketing">
          {userState ? <Dashboard type="marketing" /> : <Redirect to="/" />}
        </Route>
        <Route path="/technical">
          {userState ? <Dashboard type="technical" /> : <Redirect to="/" />}
        </Route>
        <Route path="/operations">
          {userState ? <Dashboard type="operations" /> : <Redirect to="/" />}
        </Route>
        <Route path="/finance">
          {userState ? <Dashboard type="finance" /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </>
  );
};

export default App;
