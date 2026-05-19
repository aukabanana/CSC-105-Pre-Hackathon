export interface Header {
    title: string;
    username? : string
}

export interface DeviceIconCard {
    icon: string,
    name: string,
    watt: string,
    status: boolean,
    type: string,
    location: string,
}