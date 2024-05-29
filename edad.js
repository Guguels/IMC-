document.getElementById('mascotaForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var edadMascota = parseInt(document.getElementById('edadMascota').value);
  var edadHumana = edadMascota * 7;
  document.getElementById('resultado').innerHTML = 'La edad de la mascota en años humanos es: ' + edadHumana + ' años.';
});
