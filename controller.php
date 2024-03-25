<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include PHPMailer
require 'assets/vendor/PHPMailer/src/PHPMailer.php';
require 'assets/vendor/PHPMailer/src/Exception.php';
require 'assets/vendor/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $msg = $_POST["msg"];
    // Compose email message
    $subject = "Contact us form filled";
    $message = "Name: ".$name."\n";
    $message .= "Email: ".$email."\n";
    $message .= "Phone: ".$phone."\n";
    if (isset($_POST["service"])) {
        $message .= "Service: ".$_POST['service']."\n";
    }
    $message .= "Message: ".$msg."\n";

    // Send email using PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try {
    $mail->isSMTP();
    $mail->Host = 'sandbox.smtp.mailtrap.io';
    $mail->SMTPAuth = true;
    $mail->Username = 'fa6d65071b6bf9';
    $mail->Password = '389119e2d42d3f';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 2525;
    // $mail->Host = 'smtp.gmail.com';
    // $mail->SMTPAuth = true;
    // // $mail->Username = 'yourdesigndemo2@gmail.com';
    // // $mail->Username = 'fasejukdcocaavww';
    // $mail->Password = "yourdesigndemo1@gmail.com";
    // $mail->Password = "vwwwgssoojzezjuw";
    // $mail->SMTPSecure = 'tls';
    // $mail->Port = 587;
    
} catch (Exception $e) {
    // Handle exception, if any
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}

    // Set email parameters
    $mail->setFrom($email, 'From Porfolio');
    $mail->addAddress('anusiqabl33@gmail.com'); // Replace with your email address
    $mail->Subject = $subject;
    $mail->Body = $message;
    //  Check if the email was sent successfully
     if ($mail->send()) {
        

    // Set email parameters
    $mail->setFrom('anusiqbal33gmail.com', 'From Porfolio');
    $mail->addAddress($email); // Replace with your email address
    $mail->Subject = 'Thank you! Dear '.$name.'  For contacting me';
    $mail->Body = 'Thank you For  Contact us!';
    //  Check if the email was sent successfully
    $mail->send();
    echo "OK";
        exit();
    } else {
        // Display an error message
        echo 'Error: ' . $mail->ErrorInfo;
    }

  
}else {
    header("Location: index.html");
}
?>
