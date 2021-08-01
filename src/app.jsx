import styles from './app.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div className={styles.app}>
            <Login/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
