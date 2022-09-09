<?php



//end user details to owner

    $email = $_POST['email'];
    $email = trim($email);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);

   $to = "josh@aphanovi.com";

   $subject = "Waiting List";

   $headers = "From: ". $email;


$msg = "
Email: $email
";

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo json_encode(['status' => 'error', 'message' => ' Please write email in correct format...']);
  } elseif (mail($to, $subject, $msg, $headers)) {
      echo json_encode(['status' => 'success', 'message' => 'Form has been submitted successfully!']);
  } else {
      echo json_encode(['status' => 'error', 'message' => ' email cant be sent.']);
  }
