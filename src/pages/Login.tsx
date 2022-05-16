import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Login.css';  

const Login: React.FC = () => {
  const history = useHistory()
  const navigateTo = () => history.push('/main')

  return (
    <IonPage>
      <IonContent>
        Login
        <IonButton onClick={navigateTo}>
          Entrar
        </IonButton>
      </IonContent>      
    </IonPage>
  );
};

export default Login;
