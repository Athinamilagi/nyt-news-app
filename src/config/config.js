import moment from "moment";

export const navbarBrand = "Daily Chronicle";
export const header = (category) => `News - Top ${category} Headlines`;
export const noFound = "No Results Found";
export const searching = "Searching...";

export const navs = [
  { nav: "Home", page: "/" },
  { nav: "General", page: "/categories/general" },
  { nav: "Business", page: "/categories/business" },
  { nav: "Sports", page: "/categories/sports" },
  { nav: "Science", page: "/categories/science" },
  { nav: "Health", page: "/categories/health" },
  { nav: "Entertainment", page: "/categories/entertainment" },
  { nav: "Technology", page: "/categories/technology" },
];

export const router = [
  { path: "/", key: "general", category: "general" },
  { path: "/categories/general", key: "general", category: "general" },
  { path: "/categories/business", key: "business", category: "business" },
  { path: "/categories/sports", key: "sports", category: "sports" },
  { path: "/categories/science", key: "science", category: "science" },
  { path: "/categories/health", key: "health", category: "health" },
  {
    path: "/categories/entertainment",
    key: "entertainment",
    category: "entertainment",
  },
  { path: "/categories/technology", key: "technology", category: "technology" },
];

export const summary = "Author and PublishedAt";
export const newsChannel = (author) => `Author: ${author}`;
export const lastUpdate = (published) =>
  `Published at: ${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")}`;
