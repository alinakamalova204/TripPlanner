<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Вход</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        form {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
        }
        input[type="text"], input[type="email"], input[type="password"], select {
            width: 90%;
            padding: 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
        button[type="submit"] {
            width: 40%;
            padding: 15px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 0 auto; /* Для выравнивания по центру */
            display: block; /* Чтобы кнопка занимала всю доступную ширину */
            transition: all 0.3s; /* Плавное изменение при наведении */
        }
        button[type="submit"]:hover {
            transform: scale(1.1);
        }
    </style>
</head>
<body>
<form>
    <h2>Вход</h2>

    <label>
        <input type="email" name="email" placeholder="Email" required>
    </label><br>
    <label>
        <input type="password" name="password" placeholder="Пароль" required>
    </label><br>

    <button type="submit">Войти</button>
</form>
</body>
</html>
