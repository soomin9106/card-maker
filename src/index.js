import React,{memo} from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const cardRepository = new CardRepository();
const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = memo(props => (<ImageFileInput {...props}  imageUploader={imageUploader} />));

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} cardRepository={cardRepository} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);

