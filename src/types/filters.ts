import { IRecord, IRecordsList } from "./main";

export interface IFilters {
    cities: IRecord[];
    cityArea: IRecordsList[];
    priceFrom: IRecordsList[];
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
