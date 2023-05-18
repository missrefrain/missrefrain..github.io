<?PHP

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phpmailer = new PHPMailer();
    $phpmailer->isSMTP();
    $phpmailer->Host = 'sandbox.smtp.mailtrap.io';
    $phpmailer->SMTPAuth = true;
    $phpmailer->Port = 2525;
    $phpmailer->Username = '95e982593f388b';
    $phpmailer->Password = '3ca1df484c31ae';
}
?>