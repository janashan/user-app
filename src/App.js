import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './components/AddUser';
import User from './components/User';
import UsersList from './components/UsersList';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path='/' exact={true} component={Login} />
          <Route path='/add-user' component={AddUser} />
          <Route path='/user' component= {User} />
          <Route path='/users-list' component={UsersList} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
