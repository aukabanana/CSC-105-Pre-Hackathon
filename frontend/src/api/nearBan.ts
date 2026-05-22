import axios, { type AxiosError } from "axios";
import { type LoginGet, type LoginResponse, type LogoutResponse } from "../types/types";
// import { string } from "zod";

const api = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
});

interface ApiError {
    message: string
}


export function ErrorMessage(err: unknown): string {
    const error = err as AxiosError<ApiError>
    return error?.response?.data?.message ?? "Something was wrong"
}

export async function loginAdmin(data: LoginGet): Promise<LoginResponse> {
    try {
        const response = await api.post<LoginResponse>('/login', data)
        return response.data
    } catch (err) {
        console.log(err)
        throw new Error(ErrorMessage(err), {
            cause: err
        })
    }

}

export async function logoutAdmin(): Promise<LogoutResponse> {
    try {
        const result = await api.post<LogoutResponse>('/logout')
        return result.data
    } catch (err) {
        console.log(err)
        throw new Error(ErrorMessage(err), {
            cause: err
        })
    }
}