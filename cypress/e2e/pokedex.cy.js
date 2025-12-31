describe("Pokedex", function() {
  it("front page can be opened", function() {
    cy.visit("");
    cy.contains("ivysaur");
    cy.contains("Pokémon and Pokémon character names are trademarks of Nintendo.");
  });
  it("Bulbasaur specs are rendered correctly", function() {
    const expectedStats = [
      ["speed", '45'],
      ['special defense', '65'],
      ['special attack', '65'],
      ['defense', '49'],
      ['attack', '49'],
      ['hp', '45'],
    ]
    cy.visit("");
    cy.contains("bulbasaur").click();
    cy.get('[data-testid="stats"] tbody tr')
      .should("have.length", expectedStats.length)
      .each(($row, index) => {
        cy.wrap($row).find("td").eq(0)
          .should("have.text", expectedStats[index][0])
        cy.wrap($row).find("td").eq(1)
          .should("have.text", expectedStats[index][1])
      })
  });
});