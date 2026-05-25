import axios, { type AxiosError } from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
});

interface ApiError {
    message: string
}

export function ErrorMessage(err: unknown): string {
    const error = err as AxiosError<ApiError>
    return error?.response?.data?.message ?? "Something went wrong"
}

export const getElectricChargeData = async (): Promise<any> => {
    try {
        const response = await api.get('/api/electronics') 
        return response.data
    } catch (err) {
        console.error(err)
        throw new Error(ErrorMessage(err), {
            cause: err
        })
    }
}