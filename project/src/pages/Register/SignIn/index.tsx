import React, { useState } from 'react';
import styles from './styles.module.sass';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaTelegram } from 'react-icons/fa';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IconButton, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

// const validationSchema = Yup.object().shape({
//     email: Yup.string()
//         .email('Некорректный адрес электронной почты')
//         .required('Электронная почта обязательна'),
//     password: Yup.string()
//         .min(8, 'Пароль должен содержать не менее 8 символов')
//         .required('Пароль обязателен'),
// });

interface FormValues {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            const response = await axios.post('http://localhost:8080/api/register', values);
            console.log('Response:', response.data);
            alert('Форма отправлена успешно!');
        } catch (error) {
            console.error('There was an error!', error);
            alert('Произошла ошибка при отправке формы.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className={styles.form}>
            <div className={styles.logo}>
                <h1>Планируем путешествия вместе с TripPlanner</h1>
                <span>Воплощаем мечты о путешествиях в жизнь</span>
                <a href='https://www.google.com/intl/ru/gmail/about/'><FaTelegram className={styles.icon} /><span> Чат поддержки</span></a>
                <a href='https://web.telegram.org'><FaEnvelope className={styles.icon} /><span> support@tripplanner.ru</span></a>
            </div>

            <div className={styles.formContainer}>
                <h1 className={styles.title}>Вход в TripPlanner</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    // validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className={styles.form}>
                            <div>
                                <Field
                                    className={styles.input}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Введите email"
                                    as={TextField}
                                />
                                <ErrorMessage name="email" component="div" className={styles.error} />
                            </div>
                            <div>
                                <Field
                                    className={styles.input}
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Введите пароль"
                                    as={TextField}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton onClick={handleClickShowPassword}>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        )
                                    }}
                                />
                                <ErrorMessage name="password" component="div" className={styles.error} />
                            </div>
                            <button className={styles.button} type="submit" disabled={isSubmitting}>Войти</button>
                            <h5 className={styles.info}>
                                Нет аккаунта? <Link to="/signup" className={styles.link}>Зарегистрироваться</Link>
                            </h5>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
export default SignIn