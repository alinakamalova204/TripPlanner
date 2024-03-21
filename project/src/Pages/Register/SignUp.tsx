import {useState} from "react";
import './styles.sass'
import axios from "axios";

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const handleSubmit = async () => {
        // e.preventDefault();
        //код для отправки данных на сервер
        try {
            const response = await axios.post('http://localhost:8080/register', formData);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div className={'form-reg'}>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <input type={'text'} name={'username'} value={username}
                    onChange={(e) => setUsername(e.target.value)}
                       // onChange={handleChange}
                       placeholder={'Введите имя'}
                />

                <input type={'text'} name={'email'} value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       // onChange={handleChange}
                       placeholder={'Введите email'}
                />

                <input type={'password'} name={'password'} value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       // onChange={handleChange}
                       placeholder={'Введите пароль'}
                />

                <input type={'password'} name={'confirm_password'} value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}
                       // onChange={handleChange}
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