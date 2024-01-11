import { Apod } from "../types/types";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY || "DEMO_KEY";
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

export const getApods = async (): Promise<Apod[]> => {
  try {
    const response = await fetch(`${BASE_URL}&start_date=2024-01-01&end_date=2024-01-10`);
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching apods: ", error.message);
    } else {
      console.error("Uexpected error fetching apods: ", error);
    }
    return [];
  }
};

export const getApod = async (date: string): Promise<Apod> => {
  try {
    const response = await fetch(`${BASE_URL}&date=${date}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching apod: ", error);
    return null as any;
  }
};
