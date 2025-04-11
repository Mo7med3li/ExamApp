declare type SuccessfullRespone<T> = {
  message: "success";
} & T;

declare type ErrorResponse = {
  message: string;
  code: number;
};

declare type APIResponse<T> = SuccessfullRespone<T> | ErrorResponse;
