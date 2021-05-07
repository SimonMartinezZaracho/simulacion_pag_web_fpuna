function VerCarreras(){
    alert('Ingeniería en Energía');
}

function resultado(){
  var choise ;
  if (confirm("¿Quire ver un trabajo de investigación?")){
    choise = "Presionó Aceptar";
  }
  else{
    choise = "¿Estás seguro de que deseas cancelar?";
  }
  document.getElementById("demo").innerHTML = choise;
}

function miBienvenida() {
  var txt;
  var person = prompt("¿Cuál es tú nombre?", "Harry Potter");
  if (person == null || person == "") {
    txt = "OK, hasta luego!";
  } else {
    txt = "Es un placer conocerte " + person;
  }
  document.getElementById("demo").innerHTML = txt;
}