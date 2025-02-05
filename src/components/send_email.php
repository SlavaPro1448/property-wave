<?php
error_reporting(E_ALL); // Включаем вывод всех ошибок
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error_log.txt'); // Лог ошибок в файл

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["first-name"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));
    $recipient = "info@hausverwaltung-natalie-frank.de";
    $subject = "Neue Anfrage von $name";

    $boundary = md5(time());
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    // Основное сообщение
    $email_content = "--$boundary\r\n";
    $email_content .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
    $email_content .= "Name: $name\n";
    $email_content .= "E-Mail: $email\n\n";
    $email_content .= "Nachricht:\n$message\n";

    // Проверяем файлы
    if (!empty($_FILES['attachment']['name'][0])) {
        foreach ($_FILES['attachment']['tmp_name'] as $key => $tmp_name) {
            if ($_FILES['attachment']['error'][$key] === UPLOAD_ERR_OK) {
                $file_name = $_FILES['attachment']['name'][$key];
                $file_type = $_FILES['attachment']['type'][$key];
                $file_content = chunk_split(base64_encode(file_get_contents($tmp_name)));

                $email_content .= "--$boundary\r\n";
                $email_content .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
                $email_content .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
                $email_content .= "Content-Transfer-Encoding: base64\r\n\r\n";
                $email_content .= $file_content . "\r\n";
            } else {
                error_log("File upload error: " . $_FILES['attachment']['error'][$key]);
            }
        }
    }

    $email_content .= "--$boundary--";

    // Проверка перед отправкой
    if (!$name || !$email || !$message) {
        error_log("Missing required fields: Name ($name), Email ($email), Message ($message)");
        die("Hoppla! Fehlende Angaben.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        error_log("Invalid email format: $email");
        die("Hoppla! Ungültige E-Mail-Adresse.");
    }

    // Отправка письма и логирование результата
    error_log("Debug: Trying to send email...");
    if (mail($recipient, $subject, $email_content, $headers)) {
        echo "Vielen Dank! Ihre Nachricht wurde gesendet.";
    } else {
        error_log("Mail function failed to send email.");
        echo "Hoppla! Beim Senden ist ein Fehler aufgetreten.";
    }
}
?>