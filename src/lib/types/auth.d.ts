declare type AppUser = {
  id: string; // uuid
  username: string;
  email?: string | null;
  phone?: string | null;
  firstName: string;
  lastName: string;
  profilePhoto?: string | null; // Full URL

  emailVerified: boolean;
  phoneVerified: boolean;

  role: "ADMIN" | "SUPER_ADMIN" | "USER";

  createdAt: string; // ISO date-time
  updatedAt?: string; // Only in profile response
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

declare type SendEmailVerificationResponse = {
  message: string;
};

declare type ConfirmEmailVerificationResponse = {
  message: string;
};
