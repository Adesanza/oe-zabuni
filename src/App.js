import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/header';
import VerticalCenterModal from './components/vertical-center-modal/vertical-center-modal';
import Dashboard from './pages/dashboard/dashboard';
import Homepage from './pages/homepage/homepage';

const App = () => {
  const userState = useSelector(state => state.user);
  return (
    <>
    <Header />
    <VerticalCenterModal />
    <Switch>
      <Route exact path ="/">
        <Homepage />
      </Route>
      <Route path ="/dashboard">
        {
          userState ?
          (<Dashboard />)
          :
          <Redirect to='/' />
        }
       {/* if you are working on the dashboard and do not want to login everytime, uncomment the code below and comment the one above */}
        {/* <Dashboard /> */}
      </Route>
    </Switch>
    </>
  );
}

export default App;
