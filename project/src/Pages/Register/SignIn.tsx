import {useState} from "react";
import './styles.sass'
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // e.preventDefault();
        //код для отправки данных на сервер
    }

    return (
        <div className={'form-reg'}>
            <h1>Вход в систему</h1>
            <form onSubmit={handleSubmit}>

                <input type={'text'} name={'email'} value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder={'Введите email'}
                />

                <input type={'text'} name={'password'} value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder={'Введите пароль'}
                />

                <br/>
            </form>
            <br/>
            <button>Войти</button>
            <h5>Нет аккаунта? <a href={'*'}>Зарегистрироваться</a></h5>
        </div>
    );
};
export default SignIn