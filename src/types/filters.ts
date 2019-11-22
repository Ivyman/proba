export interface ICityFilter {
  key: string;
  value: string;
}

export interface IFilters {
  cities: ICityFilter[];
}

export interface IFiltersData {
  search: string;
  city: string[] | string;
}
