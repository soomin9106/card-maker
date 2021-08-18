import React from 'react';
import styles from './editor.module.css';
import EditorItem from '../card_edit_form/editor_item';
import CardAddForm from '../card_add_form/card_add_form';


const Editor = ({cardList,addCard,updateCard,deleteCard}) => {
    return(
        <section className={styles.editor}>
            <h1 className={styles.title}> Card Maker </h1>
            <ul className={styles.editorList}>
                {Object.keys(cardList).map(key => 
                    (<EditorItem key={key} card={cardList[key]} updateCard={updateCard} deleteCard={deleteCard} />)
                )}
                <CardAddForm onAdd={addCard} />
            </ul>
        </section>
    );
}

export default Editor;