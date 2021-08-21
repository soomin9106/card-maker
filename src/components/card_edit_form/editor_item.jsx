import React from 'react';
import Button from '../button/button';
import styles from './editor_item.module.css';
import { useRef } from 'react';

const EditorItem = ({FileInput,card,updateCard,deleteCard}) => {
    const nameRef  = useRef();
    const companyRef  = useRef();
    const themeRef  = useRef();
    const titleRef  = useRef();
    const emailRef  = useRef();
    const messageRef  = useRef();
    const {
        name,
        company,
        theme,
        title,
        email,
        message,
        fileName,
        } = card;
    //delete card
    const onSubmit = (event) => {
       event.preventDefault();
       deleteCard(card);
    };
    //update card
    const onChange = (event) => {
        if(event.currentTarget === null){
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name] : event.currentTarget.value,
        });
    };

    const onFileChange = file => {
        updateCard({
            ...card,
            fileName : file.name,
            fileURL : file.url,
        });
    };
    return(
       <form className={styles.form}>
           <input ref={nameRef} onChange={onChange} className={styles.input} type="text" name="name" value={name}></input>
           <input ref={companyRef} onChange={onChange} className={styles.input} type="text" name="company" value={company}></input>
           <select ref={themeRef} onChange={onChange} className={styles.select} name="theme" value={theme}>
               <option value="light">light</option>
               <option value="dark">dark</option>
               <option value="colorful">colorful</option>
           </select>
           <input ref={titleRef} onChange={onChange} className={styles.input} type="text" name="title" value={title}></input>
           <input ref={emailRef} onChange={onChange} className={styles.input} type="text" name="email" value={email}></input>
           <textarea ref={messageRef} onChange={onChange} className={styles.textarea} name ="message" value={message}></textarea>
           <div className={styles.fileInput}>
               <FileInput name={fileName} onFileChange={onFileChange}/>
           </div>
           <Button name='Delete' onClick={onSubmit}/>
       </form>
    );
}

export default EditorItem;