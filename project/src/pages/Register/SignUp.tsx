import {useState} from "react";
import styles from  './styles.module.sass'
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import {FaEnvelope, FaEye, FaEyeSlash, FaTelegram} from "react-icons/fa";

export const SignUp = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleSubmit = () => {

    }

    return (
        <div className={styles.form}>
            <div className={styles.logo}>
                <h1>Планируем путшествия вместе с TripPlanner</h1>
                <span>Воплощаем мечты о путешествиях в жизнь</span>
                <a href={'https://www.google.com/intl/ru/gmail/about/'}><FaTelegram className={styles.icon}/><span> Чат поддержки</span></a>
                <a href={'https://web.telegram.org'}><FaEnvelope className={styles.icon}/><span> support@tripplanner.ru</span></a>
            </div>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Регистрация в TripPlanner</h1>
                <form className={styles.form} onSubmit={handleSubmit}>

                    <input className={styles.input} type={'text'} name={'name'} value={name}
                           onChange={(e) => setName(e.target.value)}
                           placeholder={'Введите имя'}
                    />

                    <input className={styles.input} type={'text'} name={'surname'} value={surname}
                           onChange={(e) => setSurname(e.target.value)}
                           placeholder={'Введите фамилию'}
                    />

                    <input className={styles.input} type={'text'} name={'email'} value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder={'Введите email'}
                    />

                    <input className={styles.input} type={'password'} name={'password'} value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder={'Введите пароль'}
                    />

                    <br/>
                </form>
                <br/>
                <Link to={'/Index'}>
                    <button className={styles.button}>Зарегистрироваться</button>
                </Link>
                <h5 className={styles.info}>Есть аккаунт? <Link to={"/signin"} className={styles.link}>Войти</Link>

                </h5>
            </div>
        </div>
    )

    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState(false);
    // const [confirmPassword, setConfirmPassword] = useState('');
    //
    // const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    // const handleSubmit = async () => {
    //     // e.preventDefault();
    //     //код для отправки данных на сервер
    //     try {
    //         const response = await axios.post('http://localhost:8080/register', formData);
    //         console.log(response.data);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
    //
    // // const handleChange = (event: { target: { name: any; value: any; }; }) => {
    // //     const { name, value } = event.target;
    // //     setFormData({ ...formData, [name]: value });
    // // };
    // return (
    //     <>
    //         <Header/>
    //     <div className={styles.formContainer}>
    //         <h1 className={styles.title}>Регистрация</h1>
    //         <form className={styles.form} onSubmit={handleSubmit}>
    //             <input className={styles.input} type={'text'} name={'username'} value={username}
    //                 onChange={(e) => setUsername(e.target.value)}
    //                    // onChange={handleChange}
    //                    placeholder={'Введите имя'}
    //             />
    //
    //             <input className={styles.input} type={'text'} name={'email'} value={email}
    //                    onChange={(e) => setEmail(e.target.value)}
    //                    // onChange={handleChange}
    //                    placeholder={'Введите email'}
    //             />
    //
    //             <input className={styles.input} type={'password'} name={'password'} value={password}
    //                    onChange={(e) => setPassword(e.target.value)}
    //                    // onChange={handleChange}
    //                    placeholder={'Введите пароль'}
    //             />
    //
    //             <input className={styles.input} type={'password'} name={'confirm_password'} value={confirmPassword}
    //                    onChange={(e) => setConfirmPassword(e.target.value)}
    //                    // onChange={handleChange}
    //                    placeholder={'Повторите пароль'}
    //             />
    //             <br/>
    //         </form>
    //         <br/>
    //         <Link to={'/signIn'}>
    //         <button className={styles.button}>Зарегистрироваться</button>
    //         </Link>
    //         <h5 className={styles.info}>Уже есть аккаунт? <Link to={"/signin"} className={styles.link}>Войти</Link></h5>
    //     </div>
    //         <Footer/>
    //     </>
    // );
};