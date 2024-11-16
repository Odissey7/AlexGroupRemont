<?php
//phpinfo();
//date_default_timezone_set('Etc/UTC');
//error_reporting(E_ALL);

//exit;
require_once 'vendor/PHPMailer/PHPMailerAutoload.php';
echo 'TEST';
exit;
function url_origin( $s, $use_forwarded_host = false )
{
    $ssl      = ( ! empty( $s['HTTPS'] ) && $s['HTTPS'] == 'on' );
    $sp       = strtolower( $s['SERVER_PROTOCOL'] );
    $protocol = substr( $sp, 0, strpos( $sp, '/' ) ) . ( ( $ssl ) ? 's' : '' );
    $port     = $s['SERVER_PORT'];
    $port     = ( ( ! $ssl && $port=='80' ) || ( $ssl && $port=='443' ) ) ? '' : ':'.$port;
    $host     = ( $use_forwarded_host && isset( $s['HTTP_X_FORWARDED_HOST'] ) ) ? $s['HTTP_X_FORWARDED_HOST'] : ( isset( $s['HTTP_HOST'] ) ? $s['HTTP_HOST'] : null );
    $host     = isset( $host ) ? $host : $s['SERVER_NAME'] . $port;
    return /*$protocol . '://' .*/ $host;
}

function full_url( $s, $use_forwarded_host = false )
{
    return url_origin( $s, $use_forwarded_host ) . $s['REQUEST_URI'];
}

$absolute_url = full_url( $_SERVER );


$req = $_REQUEST;
$data = array('name' => '', 'phone' => '', 'message' => '', 'utm' => '', 'yaid' => '');

//var_dump($req);
//exit;

$ip = "";
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}


if (isset($req['attrs'])) {
    $data['message'] = $req['attrs'] . ' [IP:'.$ip.']';
}
if (isset($req['name'])) {
    $data['name'] = $req['name'];
}
if (isset($req['utm'])) {
    $data['utm'] = $req['utm'];
	$data['utm'] = urldecode($data['utm']);
}

if (isset($req['yaid'])) {
    $data['yaid'] = $req['yaid'];
	//$data['yaid'] = urldecode($data['utm']);
}

if (isset($req['tel'])) {
    $data['phone'] = $req['tel'];

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->CharSet = 'utf-8';
    $mail->SMTPDebug = 0;
    $mail->Debugoutput = 'html';
    $mail->Host = 'smtp.yandex.ru';
    $mail->Port = 587;
    $mail->SMTPAuth = true;

    $mail->Username = "-----@yandex.ru"; /// ПОЧТА С КОТОРОЙ БУДЕМ ОТПРАВЛЯТЬ
    $mail->Password = "----"; /// ПАРОЛЬ ОТ ПОЧТЫ ИЛИ ПРИЛОЖЕНИЯ ПРИВЯЗАННОМУ К ПОЧТЕ

    $mail->setFrom('----@yandex.ru', 'ИМЯ ОТ КОГО'); /// ПОЧТА И ИМЯ ОТ КОГО ОТПРАВЛЯЕМ

    $mail->addAddress('-----@yandex.ru', 'ИМЯ'); /// ПОЧТА НА КОТОРУЮ ОТПРАВЛЯЕМ

    $mail->Subject = 'Новая заявка'; /// ТЕМА ПИСЬМА
    $mail->Body = $mail->Subject . " Телефон: " . $data['phone'] . "; Имя: ".$data['name']."; Сообщение: ".$data['message']."; UTM:{". $data['utm'] ."}; [yaID:".$data['yaid']."] "; /// ТЕКСТ ПИСЬМА

    $state = 'Сформировано';

    if (!$isSend = rSend($mail)) {
        $state = "Ошибка: " . $mail->ErrorInfo;
    } else {
        $state = 'Отправлено';
    }

    save_log(array('mail'=>$mail, 'state' => $state));

    if (!$isSend) {
        header($_SERVER['SERVER_PROTOCOL'] . ' 403 Forbidden. ' . $state);
    }
}

function rSend($mail, $i = 0) {
    if ($i >= 3) return false;
    if (!$isSend = $mail->send()) {
        sleep(3);
        rSend($mail, $i+1);
    }
    return $isSend;
}

function save_log($data) {
    $file = "log/" . date('Y_m')."_leads.txt";
    $buffer = date('[d.m.Y H:i:s]: <') . $data['state'] . "> " . $data['mail']->Body;
    if (file_exists($file)) {
        $buffer = file_get_contents($file) . "\n" . $buffer;
    }
    return $success = file_put_contents($file, $buffer);
}