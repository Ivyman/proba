export interface IRecord {
    key: string;
    name: string;
}

export interface IRecordsList {
    [key: string]: IRecord[];
}
