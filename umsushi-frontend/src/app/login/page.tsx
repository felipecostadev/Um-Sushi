"use client";
import styles from './page.module.css';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const onLogin = (e: any) => {
        e.preventDefault();
        toast.success('Login realizado com sucesso!');
    };

    const handleRegister = () => {
        router.push('/register');
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <div className={styles.loginHeader}>
                    <img src="/imgs/iconesushi.jpeg" alt="Logo UM Sushi" className={styles.logo} />
                    <h1>
                        Bem-vindo(a) ao UM Sushi
                    </h1>
                </div>
                <div className={styles.loginForm}>
                    <h1>Entrar</h1>
                    <div className={styles.formContainer}>
                        <form onSubmit={onLogin}> 
                            <div className={styles.formGroup}>
                                <input placeholder ="E-mail" type="email" id="email" name="email" required />
                            </div>
                            <div className={styles.formGroup}>
                                <input placeholder='Senha' type="password" id="password" name="password" required />
                            </div>
                            <div >
                                <input type="checkbox" id="rememberMe" name="rememberMe" />
                                <label htmlFor="rememberMe">Lembrar de mim</label>
                            </div>
                            <div className= {styles.buttonGroup}>
                                <button
                                    className={styles.btnsubmit}
                                    type="submit"
                                >
                                    Entrar
                                </button>
                                <button
                                    className={styles.btnregister}
                                    type="button"
                                    onClick={handleRegister}
                                >
                                    Cadastrar-se
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}