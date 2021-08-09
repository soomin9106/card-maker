import styles from './app.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({authService}) {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div className={styles.app}>
            <Login authService={authService}/>
          </div>
        </Route>
        <Route path='/maker' exact>
          <div>
            <Maker authService={authService}/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
