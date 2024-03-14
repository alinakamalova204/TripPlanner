import {useState} from "react";
import './styles.sass'

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        // e.preventDefault();
        //код для отправки данных на сервер
    }

    return (
        <div className={'form-reg'}>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <input type={'text'} name={'username'} value={username}
                    onChange={(e) => setUsername(e.target.value)}
                       placeholder={'Введите имя'}
                />

                <input type={'text'} name={'email'} value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder={'Введите email'}
                />

                <input type={'text'} name={'password'} value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder={'Введите пароль'}
                />

                <input type={'text'} name={'confirm_password'} value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}
                       placeholder={'Повторите пароль'}
                />
                <br/>
            </form>
            <br/>
            <button>Зарегистрироваться</button>
            <h5>Уже есть аккаунт? <a href={'*'}>Войти</a></h5>
        </div>
    );
};