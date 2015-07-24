$('a, h2, button').mouseenter(function() { // Attach this function to all mouseenter events for 'a' tags 
  responsiveVoice.cancel(); // Cancel anything else that may currently be speaking
  responsiveVoice.speak($(this).text()); // Speak the text contents of all nodes within the current 'a' tag
});

$('#loginBtn').mouseenter(function() { // Attach this function to all mouseenter events for 'a' tags 
  responsiveVoice.cancel(); // Cancel anything else that may currently be speaking
  responsiveVoice.speak("Iniciar sesión con Facebook"); // Speak the text contents of all nodes within the current 'a' tag
});

$('#logo').mouseenter(function() { // Attach this function to all mouseenter events for 'a' tags 
  responsiveVoice.cancel(); // Cancel anything else that may currently be speaking
  responsiveVoice.speak("Zoombeeu", "UK English Female"); // Speak the text contents of all nodes within the current 'a' tag
});

$('#correo').mouseenter(function() { // Attach this function to all mouseenter events for 'a' tags 
  responsiveVoice.cancel(); // Cancel anything else that may currently be speaking
  responsiveVoice.speak("Ingrese su correo electrónico"); // Speak the text contents of all nodes within the current 'a' tag
});

$('#contrasena').mouseenter(function() { // Attach this function to all mouseenter events for 'a' tags 
  responsiveVoice.cancel(); // Cancel anything else that may currently be speaking
  responsiveVoice.speak("Ingrese su contraseña"); // Speak the text contents of all nodes within the current 'a' tag
});

var logo = document.getElementById("logo");

Hammer(logo).on('swipedown', function(){
  responsiveVoice.cancel(); // Cancel anything else that may currently be speaking
  responsiveVoice.speak("Zoombeeu", "UK English Female"); // Speak the text contents of all nodes within the current 'a' tag
});

$(document).ready(function(){
	responsiveVoice.setDefaultVoice("Spanish Latin American Female");
});