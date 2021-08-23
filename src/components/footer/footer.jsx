import React, { memo } from 'react';
import styles from './footer.module.css'

const Footer = memo(() => {
    return(
    <footer className={styles.footer}>
        <p className={styles.title}>Sumin All Rights Reserved.</p>
    </footer>
    );
});

export default Footer;