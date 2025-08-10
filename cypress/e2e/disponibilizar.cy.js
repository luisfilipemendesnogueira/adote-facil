/* ==== Test Created with Cypress Studio ==== */
it('disponibilizar', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('localhost:3000');

  cy.get('.sc-29a00fbd-5 > :nth-child(1) > input')
    .clear()
    .type('kaiquerennan@gmail.com');

  cy.get('.sc-b3c6402b-0 > input')
    .clear()
    .type('12345678{enter}');

  cy.get('.sc-ea747762-0').click();

  cy.get('.sc-26506e6-5 > .sc-c7cdb42d-0 > [href="/area_logada/disponibilizar_animal"] > .sc-c7cdb42d-1').click();

  cy.get('.sc-b77a2f6d-7 > label > input')
    .clear()
    .type('rony');

  // Selecionar o tipo (exemplo: "Cachorro")
  cy.contains('button', 'Selecione um tipo').click();
  cy.get('[role="option"]').contains('Cachorro').click({ force: true });

  // Selecionar o gênero (exemplo: "Macho")
  cy.contains('button', 'Selecione um gênero').click();
  cy.get('[role="option"]').contains('Macho').click({ force: true });

  cy.get('.sc-b77a2f6d-10 > label > input')
    .clear()
    .type('BAGRE');

  cy.get('.sc-b77a2f6d-16 > div > svg').click();

  // Upload correto do arquivo rony.png
  cy.get('#animalPictures')
    .selectFile('cypress/fixtures/rony.jpg', { force: true });

  cy.get('.sc-ea747762-0').click();
  /* ==== End Cypress Studio ==== */
});
