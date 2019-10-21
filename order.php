<?php 
    require_once('config.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" href="./img/favicon.ico" type="image/x-icon"/>
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto|Montserrat&display=swap" rel="stylesheet">
    <script type='text/javascript' src="./js/menu.js" defer></script>
    <title>Знати PRO Карпати</title>
</head>
<body>
    <?php
        include_once('header.php');

        if(isset($_POST['submit'])){
            $name = $_POST['name'];
            $surname = $_POST['surname'];
            $phone = $_POST['phone'];
            $email = $_POST['email'];
            $city = $_POST['city'];

            ob_start();
            $sql = "INSERT INTO orders (name,surname,phone,email,sity) VALUES('$name','$surname','$phone','$email','$city');";
            if (mysqli_query($connection, $sql)) {
                header('Location: index.php');
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($connection);
            }
            ob_end_flush();
        }
    ?>
    <div class="s6 order">
        <form action="" method="POST">
            <input type="text" name="name" placeholder="Ваше ім'я" required>
            <input type="text" name="surname" placeholder="Ваше прізвище" required>
            <input type="tel" name="phone" placeholder="Ваш номер телефону" required>
            <input type="email" name="email" placeholder="Ваш email" required>
            <input type="text" name="city" placeholder="Ваше місто" required>
            <p>Оформлюючи замовлення, я приймаю <br>умови <a href="">користувальницької угоди</a></p>
            <button id="ligpay-pay" type="submit" name='submit'>Перейти до оплати (LiqPay)</button>
        </form>
    </div>
</body>
</html>