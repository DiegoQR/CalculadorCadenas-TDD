function Get_delimiter(numberString){
  var delimiter = "";
  var delimiter_format = numberString.match(/\[.+\]/g);
  if(delimiter_format != null){
    var array_delimiter = delimiter_format[0].split("");
    array_delimiter.forEach(char => {
      if(char != ']' && char != '[') { delimiter = delimiter + char; } 
    });
    delimiter = "(" + delimiter + ")";
    console.log(delimiter);
    return delimiter;
  }
  else return delimiter;
}

function CalculadoraCadenas(numbers) {
  var sum = 0;
  var delimiter = Get_delimiter(numbers);
  let delimiter_regex = new RegExp("[-,"+ delimiter +"]");
  numbers = numbers.replace(/\/\/\[(.)+\]\/n /g, "");
  console.log(numbers);
  numbers.split(delimiter_regex).forEach(number => {
    if(number <= 1000 && number != '') { sum = sum + parseInt(number); }
  });
  return sum;
}

export {CalculadoraCadenas, Get_delimiter};
