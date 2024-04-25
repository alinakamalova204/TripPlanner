import {useState} from "react";
import './styles.module.sass'
import styles from "./styles.module.sass";
import {Link} from "react-router-dom";
import Header from "../../component/Header";
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // e.preventDefault();
        //код для отправки данных на сервер
    }

    return (
        <>
        <Header/>
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Вход в систему</h1>
            <form className={styles.form} onSubmit={handleSubmit}>

                <input className={styles.input} type={'text'} name={'email'} value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder={'Введите email'}
                />

                <input className={styles.input} type={'text'} name={'password'} value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder={'Введите пароль'}
                />

                <br/>
            </form>
            <br/>
            <Link to={'/Index'}>
                <button className={styles.button}>Войти</button>
            </Link>
            <h5 className={styles.info}>Нет аккаунта? <Link to={"/signup"} className={styles.link}>Зарегистрироваться</Link>

            </h5>
        </div>
            </>
    );
};
export default SignIn