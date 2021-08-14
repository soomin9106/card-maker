import React from 'react';
import styles from './preview.module.css';
import PreviewItem from '../card/preview_item';

const Preview = ({cardList}) => {
   return(
    <section className={styles.preview}>
        <h1 className={styles.title}> Card Preview </h1>
        <ul className={styles.previesList}>
            {cardList.map(card => 
                    (<PreviewItem card={card} />)
            )}
        </ul>
    </section>
   );
}

export default Preview;