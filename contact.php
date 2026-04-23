<?php
// contact.php - Handles the Contact Us form submission for Uni-Inside

// Allow cross-origin requests if needed (adjust for production)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the raw POST data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Sanitize and validate input
    $name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
    $email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
    $message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

    // Basic validation
    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Mohon lengkapi semua field dengan benar."]);
        exit;
    }

    // Set recipient email address
    $recipient = "uninsidemed@gmail.com"; // Replace with actual email
    $subject = "Pesan Baru dari Website Uni-Inside: $name";

    // Build the email content
    $email_content = "Nama: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Pesan:\n$message\n";

    // Build the email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Terima kasih! Pesan Anda telah terkirim."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Maaf, terjadi kesalahan saat mengirim pesan Anda."]);
    }
} else {
    // Not a POST request
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Metode request tidak diizinkan."]);
}
?>
