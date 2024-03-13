import { auth } from "google-auth-library"

type CRUDMethod = "GET" | "POST" | "PUT";

type ServiceRequestOptions = {
    method: CRUDMethod,
    Authorization: string,
    headers: any,
    body?: any,
}

export const setAuthHeaders = async <T>(serviceUrl: string, method: CRUDMethod, body?:T) => {
    const serviceRequestOptions = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body
    }

    const client = await auth.getIdTokenClient(serviceUrl);
    const clientHeaders = await client.getRequestHeaders();
    
    const serviceRequestConfig: ServiceRequestOptions  = {
        Authorization: clientHeaders['Authorization'],
        ...serviceRequestOptions
    }
    return serviceRequestConfig;
}