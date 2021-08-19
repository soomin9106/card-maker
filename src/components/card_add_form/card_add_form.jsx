import React, { useState } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
import { useRef } from 'react';

const CardAddForm = ({FileInput,onAdd}) => {
    const formRef = useRef();
    const nameRef  = useRef();
    const companyRef  = useRef();
    const themeRef  = useRef();
    const titleRef  = useRef();
    const emailRef  = useRef();
    const messageRef  = useRef();
    const [file,setFile] =useState({fileName:null,fileURL:null});
    const onFileChange = file => {
        console.log(file);
        setFile({
            fileName:file.name,
            fileURL:file.url,
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            name :nameRef.current.value || '',
            company:companyRef.current.value || '',
            theme:themeRef.current.value,
            title:titleRef.current.value || '',
            email:emailRef.current.value || '',
            message:messageRef.current.value || '',
            fileName:file.fileName || '',
            fileURL:file.fileURL||'',
        };
        formRef.current.reset(); 
        setFile({fileName:null,fileURL:null});
        onAdd(card);
    };
    return(
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name" ></input>
            <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="company" ></input>
            <select ref={themeRef} className={styles.select} name="theme">
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title"></input>
            <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="email"></input>
            <textarea ref={messageRef} className={styles.textarea} name ="message" placeholder="message"></textarea>
            <div className={styles.fileInput}>
                <FileInput name ={file.fileName} onFileChange={onFileChange}/>
            </div>
            <Button name='Add' onClick={onSubmit}/>
        </form>
    );
}

export default CardAddForm;