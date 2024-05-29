// Function to calculate BMI
function calculateBMI() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var bmi = peso / (altura * altura);

  // Determine BMI category
  var category;
  if (bmi < 18.5) {
    category = "Peso bajo";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Sobrepeso";
  } else {
    category = "Obesidad";
  }

  // Display BMI result with category
  var message = "<p>Su índice de masa corporal es: " + bmi.toFixed(2) + "</p>";
  message += "<p>Categoría: " + category + "</p>";
  document.getElementById("resultados").innerHTML = message;
}

// Event listener for form submission
document.getElementById("form-calculo").addEventListener("submit", function(event) {
  event.preventDefault();
  calculateBMI();
});
