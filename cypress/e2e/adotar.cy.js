/* ==== Test Created with Cypress Studio ==== */
it('adotar', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('localhost:3000');
  cy.get('.sc-29a00fbd-5 > :nth-child(1) > input').clear('ka');
  cy.get('.sc-29a00fbd-5 > :nth-child(1) > input').type('kaiquerennan@gmail.com');
  cy.get('.sc-b3c6402b-0 > input').clear('1');
  cy.get('.sc-b3c6402b-0 > input').type('12345678');
  cy.get('.sc-ea747762-0').click();
  cy.get('.sc-26506e6-5 > .sc-c7cdb42d-0 > [href="/area_logada/meus_animais"] > .sc-c7cdb42d-1 > span').click();
  cy.get(':nth-child(1) > .sc-66a75d78-2 > .sc-66a75d78-4 > .sc-ea747762-0').click();
  /* ==== End Cypress Studio ==== */
});