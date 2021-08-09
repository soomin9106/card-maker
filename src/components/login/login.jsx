import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    const history = useHistory();
    const gotoMaker = (userId) => {
        history.push({
            pathname:'/maker',
            state:{id:userId},
        });
    }
    const onLogin = event => {
       authService
       .login(event.currentTarget.textContent)
       .then(data => gotoMaker(data.user.uid));
    };

    useEffect(() => {
       authService
       .onAuthChange(user => {
            user && gotoMaker(user.uid);
       });
    });
    return(
        <section className={styles.login}>
            <Header/>
            <h3 className={styles.title}>Login</h3>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button onClick={onLogin} className={styles.loginBtn}>Google</button>
                </li>
                <li className={styles.item}>
                    <button onClick={onLogin} className={styles.loginBtn}>Github</button>
                </li>
            </ul>
            <Footer/>
        </section>
    );
}

export default Login;