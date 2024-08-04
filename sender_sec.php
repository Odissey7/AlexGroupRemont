<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "agapidis333@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg=" Заявка с главной страницы
    Имя: $name /n
    Телефон: $phone /n
    Почта: $email /n
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $to ");

?>

<p class="status_good" >Форма отправлена успешно</p>
<p class="name_form_sent" >Мы с вами свяжемся</p>
<!-- <script>
	document.querySelector('.form_work').classList.toggle('form_work_active_sec');
</script> -->