import React, { useState, useEffect } from 'react';
import styles from './Register.module.css';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const user = { displayName: Name, email: Email, password: Password };

        if (Password !== Confirm) {
            setError('As senhas precisam ser iguais!');
            return;
        }

        const res = await createUser(user);
        if (res) {

        }
    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div className={styles.container}>
            <div className={styles.register}>
                <h1>Cadastre-se</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Nome:</span>
                        <input
                            type="text"
                            name="Name"
                            required
                            placeholder="Nome Usuário"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>E-mail:</span>
                        <input
                            type="email"
                            name="Email"
                            required
                            placeholder="E-mail do Usuário"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Senha:</span>
                        <input
                            type="password"
                            name="Password"
                            required
                            placeholder="Senha Usuário"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Confirmação de Senha:</span>
                        <input
                            type="password"
                            name="Confirm"
                            required
                            placeholder="Confirme Senha Usuário"
                            value={Confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                        />
                    </label>
                    {!loading && <button className={styles.btn}>Cadastrar</button>}
                    {loading && <button className={styles.btn} disabled>Aguarde...</button>}
                    {error && <p className={styles.error}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;
