export interface IFilter {
    key: string;
    name: string;
}

export interface IFilters {
    cities: IFilter[];
}

export interface IFiltersData {
    city: string;
    searchQuery: string;
    cityArea: string;
    priceFrom: string;
}

export interface IFiltersParams {
    limit: number;
    city?: string;
    searchQuery?: string;
    cityArea?: string;
    priceFrom?: number;
    nextPageToken?: string;
}
