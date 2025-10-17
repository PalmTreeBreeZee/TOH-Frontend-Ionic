import IHero from "../Interfaces/Iheroes.interface";

export const getHeroes = async () => {
    try {
        const heroesList = await fetch(`http://localhost:5272/api/Heroes`);

        return heroesList.json() as Promise<IHero[]>;
    } catch (error) {
        console.error("Error fetching heroes:", error);
        return [] as IHero[];
    }
}