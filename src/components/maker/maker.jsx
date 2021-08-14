import React from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Preview from '../preview/preview';
import Editor from '../editor/editor';

const Maker = ({authService,cardList}) => {
    const history =useHistory();
    const onLogout = () => {
        authService.logout();
    };
    useEffect(() => {
       authService.onAuthChange(user => {
           if(!user){
               history.push('/');
           }
       })
    });
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cardList={cardList} />
                <Preview cardList={cardList}/>
            </div>
            <Footer/>
        </section>
    );
}

export default Maker;