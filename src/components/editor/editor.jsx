import React from 'react';
import styles from './editor.module.css';
import EditorItem from '../card_edit_form/editor_item';

const Editor = ({cardList}) => {
    return(
        <section className={styles.editor}>
            <h1 className={styles.title}> Card Maker </h1>
            <ul className={styles.editorList}>
                {cardList.map(card => 
                    (<EditorItem card={card} />)
                )}
            </ul>
        </section>
    );
}

export default Editor;