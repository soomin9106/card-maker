import React from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Preview from '../preview/preview';
import Editor from '../editor/editor';

const Maker = ({FileInput, authService,cardRepository}) => {
  const history =useHistory();
  const historyState = history?.location?.state;
  const [cardList,setCardList] = useState({});
  const [userId,setUserId] = useState(historyState && historyState.id);
    
    const onLogout = () => {
        authService.logout();
    };

    useEffect(()=>{
      if(!userId){
        return ;
      }
      const stopSync = cardRepository.syncCards(userId, cardList => {
        setCardList(cardList);
      })

      //clean 
      return () => stopSync();
    },[userId]);

    useEffect(() => {
       authService.onAuthChange(user => {
           if(user){
              setUserId(user.uid);
           }
           else{
             history.push('/');
           }
       });
    });

    const createOrUpdateCard = card => {
       setCardList(cardList => {
            const updated = {...cardList};
            updated[card.id] = card;
            return updated;
       });
       cardRepository.saveCard(userId,card);
    }
    const deleteCard = (card) => {
        setCardList(cardList => {
            const updated = {...cardList};
            delete updated[card.id] ;
            return updated;
       });
       cardRepository.removeCard(userId,card);
    }
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor FileInput={FileInput} cardList={cardList} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
                <Preview cardList={cardList}/>
            </div>
            <Footer/>
        </section>
    );
}

export default Maker;