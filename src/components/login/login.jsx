import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = (props) => {
    return(
        <section className={styles.login}>
            <Header/>
            <h3 className={styles.title}>Login</h3>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button className={styles.loginBtn}>Google</button>
                </li>
                <li className={styles.item}>
                    <button className={styles.loginBtn}>GitHub</button>
                </li>
            </ul>
            <Footer/>
        </section>
    );
}

export default Login;