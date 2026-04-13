declare type SuccessfulResponse<T> = {
  status: true;
  code: number;
  message: string;
  payload: T;
} & T;

declare type ErrorResponse = {
  status: false;
  code: number;
  message: string;
  errors: {
    path: string[];
    message: string;
    messages: string[];
  }[];
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
