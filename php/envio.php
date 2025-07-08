<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Configura tu dirección de correo
    $destinatario = "jonathanakola681@gmail.com";  // <-- REEMPLAZA esto con tu correo real
    // Recoge datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $correo = htmlspecialchars($_POST['correo']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Asunto y cuerpo del correo
    $asunto = "Nuevo mensaje desde tu portafolio web";
    $contenido = "
        Has recibido un nuevo mensaje desde el portafolio web:\n\n
        Nombre: $nombre\n
        Correo: $correo\n
        Mensaje:\n$mensaje
    ";

    // Cabeceras del correo
    $headers = "From: $nombre <$correo>\r\n";
    $headers .= "Reply-To: $correo\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "<script>alert('Mensaje enviado con éxito. ¡Gracias por contactarme!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Hubo un error al enviar tu mensaje. Intenta nuevamente.'); window.history.back();</script>";
    }
} else {
    header("Location: index.html");
    exit;
}

?>
