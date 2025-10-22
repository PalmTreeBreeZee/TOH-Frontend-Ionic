import IHero from "../interfaces/Iheroes.interface";

const getHeroes = async () => {
    try {
        const heroesList = await fetch(`http://localhost:5272/api/Heroes`);

        return heroesList.json() as Promise<IHero[]>;
    } catch (error) {
        console.error("Error fetching heroes:", error);
        return [] as IHero[];
    }
}

const getHero = async (id: number) => {
    try {
        const hero = await fetch(`http://localhost:5272/api/Heroes/${id}`);

        return hero.json() as Promise<IHero>;
    } catch (error) {
        console.error("Error fetching hero:", error);
        return { id: 0, name: "Unknown", cityId: null } as IHero;
    }
}


export { getHeroes, getHero };