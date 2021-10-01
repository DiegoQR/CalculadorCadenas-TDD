import {CalculadoraCadenas} from "./App.js";

describe("CalculadoraCadenas", () => {
  it("deberia devolver un numero", () => {
    expect(CalculadoraCadenas("3")).toEqual(3);
  });
});
