var fizz = "FIZZ";
var buzz = "BUZZ";
var listaNumeri = document.getElementById('lista-numeri')
for (var i = 1; i < 101; i++) {

  if (i % 15 == 0) {
    listaNumeri.innerHTML += "<li class=\"fizzbuzz\">" + fizz + buzz + "</li>";
  }
  else if (i % 5 == 0) {
      listaNumeri.innerHTML += "<li class=\"buzz\">" + buzz + "</li>";
  }
  else if (i % 3 == 0) {
      listaNumeri.innerHTML += "<li class=\"fizz\">" + fizz + "</li>";
  }
  else {
      listaNumeri.innerHTML += "<li>" + i + "</li>";
  }
}
