import React from 'react';
import styles from './editor_item.module.css';

const EditorItem = ({card}) => {
    return(
        <div>
            <p>{card.name}</p>
            <p>{card.company}</p>
            <p>{card.title}</p>
            <p>{card.email}</p>
            <p>{card.message}</p>
        </div>
    );
}

export default EditorItem;