import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.lepetitvapoteur.com/fr/blog",
  match: "https://www.lepetitvapoteur.com/fr/blog/**",
  maxPagesToCrawl: 500,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
