export interface IContact {
  mails: string[];
  phones: string[];
  site?: string;
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

export interface IStudios {
  name: string;
  address: IStudioAddress;
  logo: string;
  description: string;
  contact: IContact;
}
