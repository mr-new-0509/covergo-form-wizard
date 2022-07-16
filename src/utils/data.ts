import { IRatesOfTypes } from "./interfaces";

export const DATA_OF_LOCATIONS = [
  {
    code: "hk",
    name: "Hong Kong",
    currency: "HKD",
    rate: 1,
  },
  {
    code: "us",
    name: "United States",
    currency: "USD",
    rate: 2,
  },
  {
    code: "au",
    name: "Australia",
    currency: "AUD",
    rate: 3,
  },
];

export const RATES_OF_TYPES: IRatesOfTypes = {
  standard: 1,
  safe: 1.5,
  superSafe: 1.75,
};
