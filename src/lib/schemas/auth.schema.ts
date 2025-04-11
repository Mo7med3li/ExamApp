import z from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "please enter your email" })
    .email("Enter Valid Email"),
  password: z
    .string({ required_error: "please enter your password" })
    .min(1, "please enter your password"),
});
export type loginFields = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required" })
      .min(1, "Username is required")
      .min(2, "Username must be more than two charcters ")
      .max(10, "Username must be atmost 10 charchters"),

    firstName: z
      .string({ required_error: "First Name is required" })
      .min(1, "First Name is required")
      .min(2, "First Name must be more than two charcters ")
      .max(10, "First Name must be atmost 10 charchters"),

    lastName: z
      .string({ required_error: "Last Name is required" })
      .min(1, "Last Name is required")
      .min(2, "Last Name must be more than two charcters ")
      .max(10, "Last Name must be atmost 10 charchters"),

    email: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Enter valid email"),

    password: z
      .string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/,
        "Password must be at least 8 characters include at least 1 upper, 1 lower, and number."
      ),
    rePassword: z
      .string({ required_error: "Re-enter your password" })
      .min(1, "Re-enter your password"),

    phone: z
      .string({ required_error: "Phone number is required" })
      .min(1, "Phone number is required"),
    // .refine((value) => isValidPhoneNumber(value), "Invalid phone number"),
  })
  .refine((values) => values.password === values.rePassword, {
    message: "password do not match",
    path: ["rePassword"],
  });

export type RegisterFields = z.infer<typeof registerSchema>;

export const forgetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "please enter your email" })
    .email("Enter Valid Email"),
});

export type ForgetPasswordField = z.infer<typeof forgetPasswordSchema>;

export const verifyCodeSchema = z.object({
  resetCode: z
    .string({ required_error: "Please enter your code" })
    .min(1, { message: "please enter your code" })
    .regex(/^\d+$/, { message: "Code must contain only numbers" }) // only numbers
    .length(6, { message: "Code must be 6 digits long" }),
});

export type VerifyCodeField = z.infer<typeof verifyCodeSchema>;

export const resetPasswordSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Enter valid email"),
  newPassword: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/,
      "Password must be at least 8 characters include at least 1 upper, 1 lower, and number."
    ),
});

export type ResetPasswordField = z.infer<typeof resetPasswordSchema>;
