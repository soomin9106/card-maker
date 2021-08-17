import React from 'react';
import styles from './editor.module.css';
import EditorItem from '../card_edit_form/editor_item';
import CardAddForm from '../card_add_form/card_add_form';


const Editor = ({cardList,addCard}) => {
    return(
        <section className={styles.editor}>
            <h1 className={styles.title}> Card Maker </h1>
            <ul className={styles.editorList}>
                {cardList.map(card => 
                    (<EditorItem card={card} />)
                )}
                <CardAddForm onAdd={addCard} />
            </ul>
        </section>
    );
}

export default Editor;