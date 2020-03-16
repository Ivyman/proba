import { IRecord, IRecordsList } from "./main";

export interface IFilters {
    cities: IRecord[];
    priceTo: IRecord[];
    cityAreas: IRecordsList;
}

export interface IFieldsData {
    city: string;
    searchQuery: string;
    cityArea: string;
    priceTo: string;
}

export interface IFiltersParams {
    city?: string;
}
