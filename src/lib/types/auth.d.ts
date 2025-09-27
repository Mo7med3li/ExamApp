declare type AppUser = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
};
declare type LoginResponse = {
  token: string;
  user: AppUser;
};

declare type SignupResponse = {
  token: string;
  user: AppUser;
};

declare type ForgetPasswordResponse = {
  info: string;
};
declare type verifyCodeResponse = {
  status: string;
};

declare type ResetPasswordResponse = {
  token: string;
};
