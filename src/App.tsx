import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { checkbox, checkboxOutline, informationCircleOutline, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { Storage } from '@ionic/storage';

/* Theme variables */
import './theme/variables.css';
import CallTreeList from './components/CallTreeList';
import CallTreeDetails from './components/CallTreeDetails';
import DefaultPage from './components/DefaultPage';
import OtpPage from './components/OtpPage';
import UserRegistration from './components/UserRegistration';
import InformationalDetails from './components/InformationalDetails';

setupIonicReact();

const store = new Storage();
store.create();

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle style={{textAlign: "center"}}>MDRRMO Call Tree</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/call-tree">
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/call-tree/pending">
                  <CallTreeList type="pending"/>
                </Route>
                <Route exact path="/call-tree/responded">
                  <CallTreeList type="responded" />
                </Route>
                <Route exact path="/call-tree/pending/:id/details" render={(props) => 
                    <CallTreeDetails {...props}/>
                }/>
                <Route exact path="/call-tree/informational">
                  <CallTreeList type="informational" />
                </Route>
                <Route exact path="/call-tree/informational/:id/details" render={(props) => 
                  <InformationalDetails {...props}/>
                }/>
                <Route exact path="/call-tree">
                  <Redirect to="/call-tree/pending" />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="top">
                <IonTabButton tab="PendingCallTree" href="/call-tree/pending">
                  <IonIcon icon={checkboxOutline} />
                  <IonLabel>Pending</IonLabel>
                </IonTabButton>
                <IonTabButton tab="RespondedCallTree" href="/call-tree/responded">
                  <IonIcon icon={checkbox} />
                  <IonLabel>Responded</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Informational" href="/call-tree/informational">
                  <IonIcon icon={informationCircleOutline} />
                  <IonLabel>Informational</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </Route>
          <Route exact path="/user-registration/new">
            <UserRegistration store={store}/>
          </Route>
          <Route exact path="/user-registration/otp" render={(props) => 
              <OtpPage {...props} store={store}/>
          }/>
          <Route exact path="/user-registration">
            <DefaultPage store={store} />
          </Route>
          <Route exact path="/">
            <DefaultPage store={store} />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
      </IonContent>
    </IonPage>
  </IonApp>
);

export default App;
