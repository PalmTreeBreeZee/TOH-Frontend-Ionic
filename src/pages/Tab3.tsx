import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRadioGroup, IonRadio } from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer';
import React from 'react'
import { getCities } from '../services/citiesService';
import './Tab3.css';
import city from '../interfaces/Icities.interface';

const Tab3: React.FC = () => {
  const [citiesState, setCitiesState] = React.useState<city[]>([]);

  React.useEffect(() => {
    getCities().then(cities => setCitiesState(cities));
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cities</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cities</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
        <IonRadioGroup>
          <div className="ailgn-items-center justify-content-center ion-padding">
            {citiesState.map(city => (
              <div key={city.id} className="text-center">
                <IonRadio labelPlacement='end'>
                  <p>{city.name}</p>
                </IonRadio>
              </div>
            ))}
          </div>
        </IonRadioGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
