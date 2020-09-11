export interface IRecord {
    id: string;
    name: string;
}

export interface IRecordsList {
    [id: string]: IRecord[];
}
