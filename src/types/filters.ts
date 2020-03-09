import { IRecord } from "./main";

export interface IFilters {
    cities: IRecord[];
}

export interface IFiltersData {
    city: string;
    searchQuery: string;
    cityArea: string;
    priceFrom: string;
}

export interface IFiltersParams {
    limit?: number;
    city?: string;
    searchQuery?: string;
    cityArea?: string;
    priceFrom?: number;
    nextPageToken?: string;
}
