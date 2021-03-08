import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/header';
import Dashboard from './pages/dashboard/dashboard';
import Homepage from './pages/homepage/homepage';

const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path ="/">
        <Homepage />
      </Route>
      <Route path ="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
    </>
  );
}

export default App;
