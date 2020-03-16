import { IRecord } from "./main";

export enum ECoordinateName {
    latitude = "latitude",
    longitude = "longitude",
}

export interface ICoordinate {
    id: string;
    latitude: number;
    longitude: number;
}

export type IStudioResponse = IStudio[];

export interface IPrice {
    to: string;
}

export interface IContact {
    phones: string[];
    email?: string;
    site?: string;
    instagram?: string;
    facebook?: string;
}

export interface IStudioAddress {
    latitude: number;
    longitude: number;
    city: IRecord;
    cityArea: IRecord;
    zipcode: string;
    street: string;
    buildingNumber: string;
    room?: string;
}

export interface IStudio {
    id: string;
    name: string;
    address: IStudioAddress;
    logo: string;
    description: string;
    contact: IContact;
    price: IPrice;
}
