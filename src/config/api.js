const API_DOMAIN = "https://api.nytimes.com/svc/news/v3";
const API_SEARCH_DOMAIN = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const API_KEY = "Su9AvpCORzsxDajAIIAQbW40WqvTXJ85";
export const endpointPath = (category) =>
  `${API_DOMAIN}/content/all/${category}.json?api-key=${API_KEY}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&api-key=${API_KEY}`;
