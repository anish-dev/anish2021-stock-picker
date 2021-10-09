import { apiConfig } from "../../config";

export const getStocksDeatils = async (stocks) => {
  let symbols = stocks.map((option) => {
    return option.value;
  });
  let api = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbols}&apikey=${apiConfig.apiKey}`;
  let options = await fetch(api);
  return options.json();
};
