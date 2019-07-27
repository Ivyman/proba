export interface IContact {
  phones: string[];
  site?: string;
  mail?: string;
}

export interface IStudioAddress {
  Latitude?: string;
  Longitude?: string;
  city: string;
  zipcode: string;
  street: string;
  number: string;
  room?: string;
}

export interface IStudio {
  name: string;
  address: IStudioAddress;
  logo: string;
  description: string;
  contact: IContact;
}

export interface IStudioAPIResponse {
  studios: IStudio[];
  nextPageToken: string;
}
