const API_SEARCH_DOMAIN =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const API_KEY = "Su9AvpCORzsxDajAIIAQbW40WqvTXJ85";
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&api-key=${API_KEY}`;

console.log(endpointSearch);
