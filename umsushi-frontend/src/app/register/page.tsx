"use client";
import { useState } from "react";
import Styles from "./page.module.css";
import RegisterOptions from "@/components/organisms/registerOptions/RegisterOptions";
import RegisterForm from "@/components/organisms/registerForm/RegisterForm";
import CodeVerification from "@/components/organisms/codeVerification/codeVerification";
import FinishRegister from "@/components/organisms/finishRegister/finishRegister";

export default function registerPage() {
  const [step, setStep] = useState<"options" | "phone" | "email" | "code" | "finish">("options");
  const [registerType, setRegisterType] = useState<"phone" | "email">("phone");

  function handleOption(option: "phone" | "email") {
    setRegisterType(option);
    setStep(option);
  }

  function handleRegisterSubmit() {
    setStep("code");
  }

  function handleCodeVerification() {
    setStep("finish");
  }

  return (
    <div className={Styles.registerPage}>
      <div className={Styles.registerContainer}>
        <div className="absolute top-4 left-4">
          <img src="imgs/iconesushi.jpeg" alt="Logo" className="w-16 h-16" />
        </div>

        <div className={Styles.registerForm}>
          {step === "options" && <RegisterOptions onOption={handleOption} />}
          {(step === "phone" || step === "email") && (
            <RegisterForm type={registerType} onSubmit={handleRegisterSubmit} />
          )}
          {step === "code" && (
            <CodeVerification
              message={registerType === "phone" ? "Informe o código enviado para o seu celular" : "Informe o código enviado para o seu E-mail"}
              onSubmit={handleCodeVerification}
            />
          )}
          {step === "finish" && <FinishRegister />}
        </div>
      </div>
    </div>
  );
}
