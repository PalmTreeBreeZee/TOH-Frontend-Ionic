import IHero from "../Interfaces/Iheroes.interface";

export const heroes = async () => {
    const heroesList = await fetch(`http://localhost:5272/api/Heroes`);

    return heroesList.json() as Promise<IHero[]>;
}