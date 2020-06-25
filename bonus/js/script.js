var fizz = "FIZZ";
var buzz = "BUZZ";
var listaNumeri = document.getElementById('lista-numeri')
for (var i = 1; i < 101; i++) {

  if (i % 15 == 0) {
    listaNumeri.innerHTML += "<li>" + fizz + buzz + "</li>";
  }
  else if (i % 5 == 0) {
      listaNumeri.innerHTML += "<li>" + buzz + "</li>";
  }
  else if (i % 3 == 0) {
      listaNumeri.innerHTML += "<li>" + fizz + "</li>";
  }
  else {
      listaNumeri.innerHTML += "<li>" + i + "</li>";
  }
}
