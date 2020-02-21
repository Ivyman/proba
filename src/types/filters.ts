export interface IFilter {
    key: string;
    name: string;
}

export interface IFilters {
    cities: IFilter[];
}

export interface IFiltersData {
    city: string[] | string;
    search?: string;
}
