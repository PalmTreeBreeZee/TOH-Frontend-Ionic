import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import * as ExploreContainer from '../components/ExploreContainer'
import './Tab2.css';

const Tab2: React.FC = () => {
return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tour Of Heroes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFabButton>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
        <IonContent></IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
