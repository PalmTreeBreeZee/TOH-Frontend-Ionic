import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRadioGroup, IonRadio } from '@ionic/react'
import React from 'react'
import './Tab2.css';
import { getHeroes } from '../services/heroesService';
import IHero from '../Interfaces/Iheroes.interface';
import ICity from '../Interfaces/Icities.interface';
import { getCity } from '../services/citiesService';
import { useEffect } from 'react';

const Tab2: React.FC = () => {

  const [heroesState, setHeroesState] = React.useState<IHero[]>([]);
  const [heroData, setHeroData] = React.useState<IHero | undefined>();
  const [cityState, setCityState] = React.useState<string | undefined>();

  useEffect(() => {
    getHeroes().then(heroes => setHeroesState(heroes));
  }, []);

  const getHeroAndCity = (hero: IHero) => {
    setHeroData(hero);
    if (hero.cityId !== null) {
      getCity(hero.cityId).then(city => setCityState(city.name))
    } else {
      setCityState("Not Assigned");
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {heroData && <IonTitle>{heroData?.name} is from the city: {cityState}</IonTitle>}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRadioGroup>
          <div className="ailgn-items-center justify-content-center ion-padding">
            {heroesState.map(hero => (
              <div key={hero.id} className="text-center">
                <IonRadio labelPlacement='end' onClick={() => getHeroAndCity(hero)}>
                  <p>{hero.name}</p>
                </IonRadio>
              </div>
            ))}
          </div>
        </IonRadioGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;