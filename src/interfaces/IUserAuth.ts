export interface IUserAuth {
    userId: number;
    userName: string;
    password: string;
    email: string;
    token: string;
    role: string;
    error?: string;
}
export interface IUserLogin {
    userName: string;
    password: string;
    error?: string;
}

export interface IForgot {
    id?: number;
    userId?: number;
    email?: string;
    code?: string;
    status?: boolean;
    error?: string;
}