import React from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import { useEffect,useState,useCallback} from 'react';
import Preview from '../preview/preview';
import Editor from '../editor/editor';

const Maker = ({FileInput, authService,cardRepository}) => {
  const history =useHistory();
  const historyState = history?.location?.state;
  const [cardList,setCardList] = useState({});
  const [userId,setUserId] = useState(historyState && historyState.id);
  
  //이 함수 때문에 header에서 memo 를 해도 re-render 가 되고 있던 거였음
  //useCallback 를 사용 
  //스테이트나 props 가 변경 되어도 동일하게 재사용한다는 의미 
  //=> authService 가 변경이 되어도 예전에 캡쳐해둔 걸로 사용될 것임
  //authService 를 디펜던시로 전달!
  const onLogout = useCallback(() => {
        authService.logout();
  },[authService]); 

    useEffect(()=>{
      if(!userId){
        return ;
      }
      const stopSync = cardRepository.syncCards(userId, cardList => {
        setCardList(cardList);
      })

      //clean 
      return () => stopSync();
    },[userId,cardRepository]);

    useEffect(() => {
       authService.onAuthChange(user => {
           if(user){
              setUserId(user.uid);
           }
           else{
             history.push('/');
           }
       });
    },[userId,history,authService]);

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