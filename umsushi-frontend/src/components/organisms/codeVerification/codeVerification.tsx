"use client"
import { Button } from "@/components/atoms/button/Button";
import { useRef } from "react";


export default function codeVerification({ message, onSubmit }: { message: string, onSubmit: () => void }) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value.replace(/\D/g, "");
    e.target.value = value;
    if (value && idx < 5) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return (
    <div>
      <p className="text-base font-semibold text-gray-800 mb-6 mt-2 text-center">
        {message}
      </p>
      <div className="flex justify-center gap-6 !mt-10">
        {[...Array(6)].map((_, idx) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            pattern="[0-9]{1}"
            maxLength={1}
            className="border rounded w-12 h-12 text-center text-2xl focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            ref={el => {
              inputsRef.current[idx] = el;
            }}
            onChange={e => handleChange(e, idx)}
            onKeyDown={e => handleKeyDown(e, idx)}
            autoComplete="one-time-code"
          />
        ))}
      </div>
      <div className= "!mt-5">
        <Button variant="primary" className="w-full mt-10" onClick={onSubmit}>
          Enviar Código
        </Button>
      </div>
    </div>
  );
}
