import { IRecord, IRecordsList } from "./main";

export interface IFilters {
    cities: IRecord[];
    cityAreas: IRecordsList;
}

export interface IFieldsData {
    city: string;
    searchQuery: string;
    cityArea: string;
}

export interface IFiltersParams {
    city?: string;
}
