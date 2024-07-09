import Heroes from "./heroes.riot";
import { expect } from "chai";
import { component } from "riot";

describe("Heroes Component Unit Test", () => {
  const mountHeroes = component(Heroes);

  it("The component properties are properly rendered", () => {
    const div = document.createElement("div");

    const component = mountHeroes(div, {
      message: "hello",
    });

    expect(component.$("p").innerHTML).to.be.equal("hello");
  });
});
