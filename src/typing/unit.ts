import { IRecord } from "./main";
import { IIdNameRecord } from "./api";

export enum ECoordinateName {
    latitude = "latitude",
    longitude = "longitude",
}

export interface ICoordinate {
    id: string;
    latitude: number;
    longitude: number;
}

export type IUnitResponse = IUnit[];

export interface IContact {
    phones: string[];
    email?: string;
    site?: string;
    instagram?: string;
    facebook?: string;
}

export interface IUnitAddress {
    latitude: number;
    longitude: number;
    city: IRecord;
    cityArea: IRecord;
    zipcode: string;
    street: string;
    buildingNumber: string;
    room?: string;
}

export interface IUnit {
    id: string;
    name: string;
    address: IUnitAddress;
    logo: string;
    description: string;
    contact: IContact;
    services: IIdNameRecord[];
}
