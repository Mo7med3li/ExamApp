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

declare type ForgetPasswordRespone = {
  info: string;
};
declare type verifyCodeResponse = {
  status: string;
};

declare type ResetPasswordRespone = {
  token: string;
};
