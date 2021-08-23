import React, { memo } from 'react';
import styles from './preview_item.module.css';
import DEFAULT_IMAGE from './default_img.png';

const PreviewItem = memo(({card}) => {
    const {
        name,
        company,
        theme,
        title,
        email,
        message,
        fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;
    return(
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img className={styles.avatar} src={url} alt="profile"></img>
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.company}>{company}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    );
});

function getStyles(theme) {
    switch(theme){
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw Error(`unknown theme : ${theme}`);
    }
}

export default PreviewItem;