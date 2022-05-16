import {IonTabs, IonTabBar, IonRouterOutlet, IonTabButton, IonIcon, IonLabel} from '@ionic/react';
import { triangle } from 'ionicons/icons';
import { Route } from 'react-router-dom';
import './Main.css';
import Dashboard from './Dashboard';

const Main: React.FC = () => {
  return (
    <IonTabs>
      
        <IonRouterOutlet>
          <Route exact path="/main">
            <Dashboard />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/main">
            <IonIcon icon={triangle} />
            <IonLabel>Main</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
  );
};

export default Main;
