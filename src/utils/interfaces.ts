export interface IRatesOfTypes {
  [key: string]: number;
}

export interface IForm {
  [key: string]: string | number;
}

export interface ILocationItem {
  code: string;
  name: string;
  currency: string;
  rate: number;
}

export interface IRatesOfTypesItem {
  [key: string]: number;
}

export interface IFormPageData {
  name: string;
  age: number;
  locationIndex: number;
  type: string;
  locations: Array<ILocationItem>;
  ratesOfTypes: IRatesOfTypesItem;
  price: number;
  rateByLocation: number;
  rateByType: number;
  currency: string;
  defaultRate: number;
}
