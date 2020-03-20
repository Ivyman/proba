import { IRecord, IRecordsList } from "./main";

export interface IFilters {
    cities: IRecord[];
    cityAreas: IRecordsList;
    services: IRecord[];
}

export interface IFieldsData {
    city: string;
    searchQuery: string;
    cityArea: string;
    services: string[];
}

export interface IFiltersParams {
    city?: string;
}
