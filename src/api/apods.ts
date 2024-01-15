import { Apod } from "../types/types";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY || "DEMO_KEY";
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

// Create a cache object
const cache: { [key: string]: Apod[] | Apod } = {};

export const getApods = async (): Promise<Apod[]> => {
  const cacheKey = "apods";
  if (cache[cacheKey]) {
    return cache[cacheKey] as Apod[];
  }

  try {
    const response = await fetch(`${BASE_URL}&start_date=2024-01-01&end_date=2024-01-10`);
    const data = await response.json();
    cache[cacheKey] = data;
    return data;
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
  const cacheKey = `apod-${date}`;
  if (cache[cacheKey]) {
    return cache[cacheKey] as Apod;
  }

  try {
    const response = await fetch(`${BASE_URL}&date=${date}`);
    const data = await response.json();
    cache[cacheKey] = data;
    return data;
  } catch (error) {
    console.error("Error fetching apod: ", error);
    return null as any;
  }
};
