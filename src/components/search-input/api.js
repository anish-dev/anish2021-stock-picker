import { apiConfig } from "../../config";

export const getSearchResult = async (input) => {
  let api = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=${apiConfig.apiKey}`;
  let options = await fetch(api);
  return options.json();
};
