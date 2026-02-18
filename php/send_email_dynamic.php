<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Composer autoload
require 'vendor/autoload.php';

// Load environment variables
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Handle POST or GET request
if ($_SERVER['REQUEST_METHOD'] == 'POST' || $_SERVER['REQUEST_METHOD'] == 'GET') {
$input = file_get_contents('php://input');
$requestData = json_decode($input, true);

    // Check if recipient email is set
    if (empty($_ENV['MAIL_TO_ADDRESS'])) {
        echo "Recipient email address is not configured.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP server settings
        $mail->isSMTP();
        $mail->Host = $_ENV['MAIL_HOST'];
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['MAIL_USERNAME'];
        $mail->Password = $_ENV['MAIL_PASSWORD'];
        $mail->SMTPSecure = $_ENV['MAIL_ENCRYPTION'];
        $mail->Port = $_ENV['MAIL_PORT'];

        // Email addresses
        $mail->setFrom($_ENV['MAIL_FROM_ADDRESS'], $_ENV['MAIL_FROM_NAME']);
        $mail->addAddress($_ENV['MAIL_TO_ADDRESS']);

        // Email body in HTML table format
        $body = "<h2>New Inquiry - Get In Touch Form Submission</h2>";
        $body .= "<table border='1' cellpadding='8' cellspacing='0' style='border-collapse: collapse; font-family: Arial, sans-serif;'>";
        $body .= "<thead>
        <tr>
        <th style='background-color:#f2f2f2;'>Field</th>
        <th style='background-color:#f2f2f2;'>Value</th>
        </tr>
        </thead>
        <tbody>";

        foreach ($requestData as $key => $value) {
            $key = htmlspecialchars($key);
            $value = is_array($value) ? implode(", ", $value) : htmlspecialchars($value);
            $body .= "<tr>
            <td><strong>$key</strong></td>
            <td>$value</td>
            </tr>";
        }

        $body .= "</tbody>
        </table>";

        // Send the email
        $mail->isHTML(true);
        $mail->Subject = 'Dynamic Form Submission';
        $mail->Body = $body;

        $mail->send();
        echo 'Email sent successfully';
    } catch (Exception $e) {
        echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
