import Styles from "./page.module.css";
import { Button } from "@/components/atoms/button/Button";

export default function RegisterOptions({ onOption }: { onOption: (option: 'phone' | 'email') => void }) {
    return (
        <div>
             <p className="text-center">Como deseja continuar?</p>

        <button className={Styles.googleButton}>
        <span>Fazer login com Google</span>
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google Icon"
          style={{ width: "24px", height: "24px" }}
        />
        </button>

        <div className="flex gap-4 mb-2 !mt-4">
          <Button variant="outline" className="w-full flex-1" onClick={() => onOption('phone')}>
            Celular
          </Button>
          <Button variant="outline" className="w-full flex-1" onClick={() => onOption('email')}>
            E-mail
          </Button>
        </div>

        <div className="flex justify-center my-2">ou</div>
        <Button variant="primary" className="w-full">
          Login
        </Button>
        </div>
    );
}
