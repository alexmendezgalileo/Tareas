//var mes = prompt("Ingrese un mes del año")
var mes = 10

if(mes == 2 || mes == 1 || mes == 12){
  alert("Es Invierno")
}else if(mes == 3 || mes == 4 || mes == 5 ){
  alert("Es Primavera")
}else if(mes == 6 || mes == 7 || mes == 8 ){
  alert("Es Verano")
}else if(mes == 9 || mes == 10 || mes == 11 ){
  alert("Es Otoño")
}else if(mes == ''){
  alert("No ha ingresado el mes del año")
}else{
  alert(mes + " No ha es un mes del año")
}
alert("Mi No. de carne es: 21003326")