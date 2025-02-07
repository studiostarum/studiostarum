const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export async function fetchAPI(query: string) {
  const res = await fetch(`${STRAPI_URL}/api${query}`);
  const json = await res.json();
  return json.data;
} 