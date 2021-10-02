import {CalculadoraCadenas} from "./App.js";

describe("CalculadoraCadenas", () => {
  it("deberia devolver un numero", () => {
    expect(CalculadoraCadenas("3")).toEqual(3);
  });
  it("deberia devolver la suma de una cadena de numeros", () => {
    expect(CalculadoraCadenas("1,2,4,8")).toEqual(15);
  });
});
