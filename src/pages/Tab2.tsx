import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import './Tab2.css';
import { heroes } from '../services/heroesService';
import IHero from '../Interfaces/Iheroes.interface';

const Tab2: React.FC = () => {

  const [data, setData] = React.useState<IHero[]>([]);
  heroes().then(heroes => setData(heroes));

return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tour Of Heroes</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent fullscreen>
      {data.map(hero => (
        <div key={hero.id}>
          <IonButton color={"success"} shape='round'>
            <p>{hero.name}</p>
          </IonButton>
        </div>
      ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
