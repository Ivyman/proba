export interface ICityFilter {
  key: string;
  value: string;
}

export interface IFilters {
  cities: ICityFilter[];
}

export interface IFiltersData {
  query: string;
  city: string[] | string;
}
