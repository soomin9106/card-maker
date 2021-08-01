import React from 'react';
import styles from './header.module.css';
import LogoImg from 'C:/Front-End/card-maker/src/images/logo.png'

const Header = (props) => {
    return(
        <header className={styles.header}>
                <img className={styles.logo} alt="logo" src={LogoImg} />
                <h1 className={styles.title}>Business Card Maker</h1>
        </header>
    );
}

export default Header;