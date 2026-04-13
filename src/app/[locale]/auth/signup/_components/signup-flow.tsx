"use client";

import React, { useState } from "react";
import SendEmailVerificationForm from "./send-email-verification-form";
import ConfirmEmailVerificationForm from "./confirm-email-verification-form";
import SignupForm from "./signup-form";

type SignupStep = "email" | "verify" | "register";

export default function SignupFlow() {
  const [currentStep, setCurrentStep] = useState<SignupStep>("email");
  const [email, setEmail] = useState<string>("");

  const handleEmailSubmit = async (submittedEmail: string) => {
    setEmail(submittedEmail);
    setCurrentStep("verify");
  };

  const handleVerificationSuccess = () => {
    setCurrentStep("register");
  };

  const handleBack = () => {
    if (currentStep === "verify") {
      setCurrentStep("email");
    } else if (currentStep === "register") {
      setCurrentStep("verify");
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "email":
        return <SendEmailVerificationForm onNext={handleEmailSubmit} />;

      case "verify":
        return (
          <ConfirmEmailVerificationForm
            email={email}
            onNext={handleVerificationSuccess}
            onBack={handleBack}
          />
        );

      case "register":
        return <SignupForm email={email} onBack={handleBack} />;

      default:
        return <SendEmailVerificationForm onNext={handleEmailSubmit} />;
    }
  };

  return <>{renderCurrentStep()}</>;
}
