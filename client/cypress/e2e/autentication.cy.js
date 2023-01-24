describe('Autentication', function(){
    it('Can log in.', function(){
        cy.visit('/#/log-in');
        cy.get('input#username').type('gary.cole@example.com');
        cy.get('input#password').type('pAssword', {log: false});
        cy.get('button').contains('Log in').click();
        cy.hash().should('eq', '#/');

    });

    it('Can sign up', function(){
        cy.visit('/#/sign-up');
        cy.get('input#username').type('gary.cole@examople.com');
        cy.get('input#firstName').type('Gary');
        cy.get('input#lastName').type('Cole');
        cy.get('input#password').type('pAssword');
        cy.get('select#group').select('driver');
        cy.get('input#photo').attachFile('images/photo.png');
        cy.get('button').contains('Sign up').click();
        cy.hash().should('eq', '#/log-in');
    });

});