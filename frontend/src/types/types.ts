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

export type LoginGet = {
    username: string,
    password: string
}

export type LoginResponse = {
    username: string,
    password: string
}
export type LogoutResponse = {
    message: string,
}