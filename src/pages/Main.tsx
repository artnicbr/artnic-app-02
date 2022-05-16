import {IonTabs, IonTabBar, IonRouterOutlet, IonTabButton, IonIcon, IonLabel} from '@ionic/react';
import { personOutline, logOutOutline } from 'ionicons/icons';
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
            <IonIcon icon={personOutline} />
            <IonLabel>Main</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/">
            <IonIcon icon={logOutOutline} />
            <IonLabel>Sign Out</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
  );
};

export default Main;
