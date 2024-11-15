export interface ILoginResponse {
    statusCode: number;
    message:    string;
    data:       ILoginResponseData;
}

export interface ILoginResponseData {
    access_token: string;
    user:         User;
}

export interface User {
    email: string;
    id:    number;
}
