export enum EApiStatuses {
    IDLE = "IDLE",
    RUNNING = "RUNNING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
}

export interface IIdNameRecord {
    id: string;
    name: string;
}
