import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import './Tab2.css';
import { heroes } from '../services/heroesService';
import IHero from '../Interfaces/Iheroes.interface';

const Tab2: React.FC = () => {

  const [data, setData] = React.useState<IHero[]>([]);
  const [heroData, setHeroData] = React.useState<IHero | undefined>();

  heroes().then(heroes => setData(heroes));

  const getHero = (id: number) => {
     setHeroData(data.find(hero => hero.id === id));
  }

return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{heroData?.name} is from the city: {heroData?.cityId}</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent fullscreen>
      <div className="ailgn-items-center justify-content-center ion-padding">
        {data.map(hero => (
          <div key={hero.id} className="text-center">
            <IonButton color={"success"} shape='round' onClick={() => getHero(hero.id)}>
              <p>{hero.name}</p>
            </IonButton>
          </div>
        ))}        
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;