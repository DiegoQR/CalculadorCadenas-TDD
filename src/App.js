function CalculadoraCadenas(numeros) {
  var suma = 0;
  numeros.split(',').forEach(numero => {
    suma = suma + parseInt(numero);
  });
  return suma;
}

export {CalculadoraCadenas};
