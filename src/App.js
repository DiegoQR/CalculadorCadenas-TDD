function Get_delimiter(numberString){
  var delimiter_format = numberString.match(/\[.\]/g);
  if(delimiter_format != null){
    var delimiter = delimiter_format[0][1];
    return delimiter;
  }
  else return "";
}

function CalculadoraCadenas(numbers) {
  var sum = 0;
  var delimiter = Get_delimiter(numbers);
  let delimiter_regex = new RegExp("[-,"+ delimiter +"]");
  numbers = numbers.replace(/\/\/\[.\]\/n /g, "");
  console.log(numbers)
  console.log(delimiter)
  numbers.split(delimiter_regex).forEach(number => {
    sum = sum + parseInt(number);
  });
  return sum;
}

export {CalculadoraCadenas, Get_delimiter};
