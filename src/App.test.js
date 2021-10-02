import {CalculadoraCadenas, Get_delimiter} from "./App.js";

describe("CalculadoraCadenas", () => {
  it("deberia devolver un numero", () => {
    expect(CalculadoraCadenas("3")).toEqual(3);
  });
  it("deberia devolver la suma de una cadena de numeros", () => {
    expect(CalculadoraCadenas("1,2,4,8")).toEqual(15);
  });
  it("deberia devolver el delimitador \";\"", () => {
    expect(Get_delimiter("//[;]/n 6;7;4")).toEqual("(;)");
  });
  it("deberia devolver la suma de una cadena de numeros con delimitador \";\"", () => {
    expect(CalculadoraCadenas("//[;]/n 6;7;4")).toEqual(17);
  });
  it("deberia ignorar los numeros mayores a 1000", () => {
    expect(CalculadoraCadenas("2,1001")).toEqual(2);
  });
  it("deberia devolver el delimitador \"***\"", () => {
    expect(Get_delimiter("//[***]/n 1***2***3")).toEqual("(***)");
  });
  it("deberia leer separadores de mas de un caracter", () => {
    expect(CalculadoraCadenas( "//[***]/n 1***2***3")).toEqual(6);
  });
  it("deberia poderse usar mas de un delimitador", () => {
    expect(CalculadoraCadenas("//[*][%]/n 1*2%3,7-9")).toEqual(22);
  });
});
