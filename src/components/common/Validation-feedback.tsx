import React from "react";
import { FieldError } from "react-hook-form";

type ValidationError = {
  error?: FieldError;
};
export default function ValidationFeedback({ error }: ValidationError) {
  if (!error) return null;
  return <p className="text-red-500">{error.message}</p>;
}
