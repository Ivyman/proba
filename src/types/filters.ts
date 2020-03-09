import { IRecord } from "./main";

export interface IFilters {
    cities: IRecord[];
}

export interface IFieldsData {
    city: string;
    searchQuery: string;
    cityArea: string;
    priceFrom: string;
}

export interface IFiltersParams {
    city?: string;
}
