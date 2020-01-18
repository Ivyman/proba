export interface ICityFilter {
    key: string;
    name: string;
}

export interface IFilters {
    cities: ICityFilter[];
}

export interface IFiltersData {
    city: string[] | string;
    search?: string;
}
