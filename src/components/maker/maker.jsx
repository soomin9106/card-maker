import React from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Preview from '../preview/preview';
import Editor from '../editor/editor';

const Maker = ({authService}) => {
    const [cardList,setCardList] = useState([
        {
          id:'1',
          name : "Ellie , Dream coding",
          company : "Samsung Electronic",
          theme: "light",
          title : "soft engineer",
          email : "dream.coder.ellie@gmail.com",
          message : "Don't forget to code your dream",
          fileName:"ellie",
          fileURL : null,
      },
      {
          id:'2',
          name : "Bob",
          company : "Uber",
          theme: "colorful",
          title : "senior soft engineer",
          email : "bob@gmail.com",
          message : "I love coding",
          fileName:"bob",
          fileURL : null,
      },
      {
          id:'3',
          name : "Chris",
          company : "Instagram",
          theme: "dark",
          title : "product manager",
          email : "Chris@gmail.com",
          message : "Design your dream",
          fileName:"chris",
          fileURL : null,
      },
      ]);
    
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

    const addCard = (card) => {
        const update = [...cardList,card];
        setCardList(update);
    } 
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cardList={cardList} addCard={addCard}/>
                <Preview cardList={cardList}/>
            </div>
            <Footer/>
        </section>
    );
}

export default Maker;