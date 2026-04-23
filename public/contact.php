<?php
// Handle CORS (Cross-Origin Resource Sharing) automatically
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
    exit();
}

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid JSON data"]);
    exit();
}

// Sanitize inputs to prevent header injection and XSS
$name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$message = isset($data['message']) ? htmlspecialchars(trim($data['message'])) : '';

// Validate inputs
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid input data"]);
    exit();
}

// Email configuration
$to = "m.taqizdihar@gmail.com";
$subject = "Notifikasi Pesan Baru - Uni-Inside";

// Format the email body exactly as requested
$emailBody = "--------------------------------------------------\n";
$emailBody .= "NOTIFIKASI PESAN BARU - UNI-INSIDE\n";
$emailBody .= "--------------------------------------------------\n";
$emailBody .= "Pengirim: {$name}\n";
$emailBody .= "Email: {$email}\n";
$emailBody .= "--------------------------------------------------\n";
$emailBody .= "Pesan:\n";
$emailBody .= "{$message}\n";
$emailBody .= "--------------------------------------------------\n";

// Set proper headers
$headers = "From: {$email}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email using native PHP mail() function
if (mail($to, $subject, $emailBody, $headers)) {
    http_response_code(200);
    echo json_encode(["message" => "Email sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Failed to send email"]);
}
?>
