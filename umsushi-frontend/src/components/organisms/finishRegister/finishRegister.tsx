import Link from "next/link";
import { Button } from "@/components/atoms/button/Button";
import Styles from './page.module.css';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function finishRegister() {
    const [name, setName] = useState("");
    const router = useRouter();

    function handleFinish() {
        // Simulação de sucesso/erro
        if (name.trim().length > 0) {
            toast.success("Cadastro finalizado com sucesso!");
            
            router.push("/login");
        } else {
            toast.error("Por favor, preencha seu nome.");
        }
    }

    return (
        <div>
            <p
                className="text-base font-semibold text-gray-800 mb-6 mt-2"
                style={{ textAlign: "center" }}
            >
                Digite seu nome para concluir
            </p>

            <div className={Styles.formCel}>
                <input type="text" placeholder="Seu Nome" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <Button variant="primary" className="w-full" onClick={handleFinish}>
                Finalizar Cadastro
            </Button>
        </div>
    );
}
