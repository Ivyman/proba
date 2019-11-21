export interface ICityFilter {
  key: string;
  value: string;
}

export interface IFiltersData {
  query: string;
  city: string[] | string;
}
