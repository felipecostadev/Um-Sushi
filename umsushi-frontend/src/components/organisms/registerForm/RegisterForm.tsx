import { useState } from "react";
import { Button } from "@/components/atoms/button/Button";
import Styles from './page.module.css';

interface Props {
  type: "phone" | "email";
  onSubmit: () => void;
}

export default function RegisterForm({ type, onSubmit }: Props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <p className="text-base font-semibold text-gray-800 mb-6 mt-2">
        {type === "phone"
          ? "Informe seu número de celular para continuar"
          : "Informe seu E-mail para continuar"}
      </p>
      <div className={Styles.formCel}>
        <input
          type="text"
          placeholder={type === "phone" ? "(71) 9****-****" : "Seu E-mail"}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <Button
        variant="primary"
        className="w-full"
        onClick={onSubmit}
      >
        {type === "phone" ? "Receber SMS" : "Enviar E-mail"}
      </Button>
    </div>
  );
}
