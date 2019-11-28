export interface LoginRequest {
  readonly email: string;
  readonly password: string;
}

export interface LoginResponse {
  readonly token: string;
  readonly data: any;
  readonly success: boolean;
  readonly message: string;
}

export interface ResponseData {
  readonly success: boolean;
  readonly message: string;
  readonly data: any;
}

export interface RegistrationRequest {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}
