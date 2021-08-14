<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Заполните форму отправки полностью и повторите снова.";
            exit;
        }
        $recipient = "info@yoursite.com";

        $subject = "Новое сообщение от $name ($email)";

        $email_content = "Имя: $name\n";
        $email_content .= "Почта: $email\n\n";
        $email_content .= "Сообщение:\n$message\n";

        $email_headers = "От: $name <$email>";
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Ваше сообщение отправлено.";
        } else {
            http_response_code(500);
            echo "Произошла ошибка во время отправки сообщения.";
        }

    } else {
        http_response_code(403);
        echo "Проблема с доступом к сайту.";
    }

?>
