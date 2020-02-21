export interface IContact {
    phones: string[];
    mail?: string;
    site?: string;
    // instagram?: string;
    // facebook?: string;
}

export interface ICoordinate {
    id: string;
    latitude: number;
    longitude: number;
}

export interface IStudioAddress {
    latitude: number;
    longitude: number;
    city: string;
    zipcode: string;
    street: string;
    buildingNumber: string;
    room?: string;
}

export interface IPrice {
    from: string;
}

export interface IStudio {
    id: string;
    name: string;
    address: IStudioAddress;
    logo: string;
    description: string;
    contact: IContact;
    // price: IPrice;
}

export interface IStudioResponse {
    studios: IStudio[];
    nextPageToken: string;
}

export enum ECoordinateName {
    latitude = "latitude",
    longitude = "longitude",
}
