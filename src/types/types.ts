// Type definitions for the APOD API response
// Why? Because we want to be able to use the typed response data in our app

export type Apod = {
  date: string;
  explanation: string;
  hdurl: string;
  url: string;
  media_type: string;
  service_version: string;
  title: string;
  copyright?: string;
};
