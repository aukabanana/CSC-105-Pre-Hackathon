export interface Header {
    title: string;
    username? : string
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