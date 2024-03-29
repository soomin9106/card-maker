import React from 'react';
import styles from './app.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({FileInput , authService, cardRepository}) {

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div className={styles.app}>
            <Login authService={authService}/>
          </div>
        </Route>
        <Route path='/maker' exact>
          <div className={styles.app}>
            <Maker authService={authService} cardRepository ={cardRepository} FileInput={FileInput}/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
