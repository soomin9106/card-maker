import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    const onLogin = event => {
       authService
       .login(event.currentTarget.textContent)
    };
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