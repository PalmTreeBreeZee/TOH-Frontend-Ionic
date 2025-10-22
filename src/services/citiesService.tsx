import city from "../interfaces/Icities.interface";

const getCities = async () => {
    try {
        const citiesList = await fetch(`http://localhost:5272/api/Cities`);

        return citiesList.json() as Promise<city[]>;
    } catch (error) {
        console.error("Error fetching cities:", error);
        return [] as city[];
    }
}

const getCity = async (id: number) => {
    try {
        const cities = await fetch(`http://localhost:5272/api/Cities/${id}`);

        return cities.json() as Promise<city>;
    } catch (error) {
        console.error("Error fetching city:", error);
        return { id: 0, name: "Unknown" } as city;
    }

}

export { getCity, getCities };