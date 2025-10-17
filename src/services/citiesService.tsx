import city from "../Interfaces/Icities.interface";

export const getCity = async (id: number) => {
    try {
        const cities = await fetch(`http://localhost:5272/api/Cities/${id}`);

        return cities.json() as Promise<city>;
    } catch (error) {
        console.error("Error fetching city:", error);
        return { id: 0, name: "Unknown" } as city;
    }

}