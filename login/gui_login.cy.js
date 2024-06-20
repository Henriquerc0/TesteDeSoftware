/// <reference types="Cypress"/>


describe('Testes funcionais de registro', () => {
    it('Deve realizar o registro com sucesso', () => {
        cy.wait(5000)
        cy.visit("http://localhost:8000")
        cy.wait(2000)
        cy.get('a').click() //Botão do registre-se aqui
        cy.wait(2000)
        cy.get('#regFullName').type('Henrique Rodrigues')//Nome Completo
        cy.wait(1000)
        cy.get('#regUsername').type('UC22200136')//Matrícula
        cy.wait(1000)
        cy.get('#regEmail').type('henrique@gmail.com')//Email
        cy.wait(1000)
        cy.get('#regPassword').type('1234')//Senha
        cy.wait(1000)
        cy.get('#regConfirmPassword').type('1234')//Confirmação de senha
        cy.wait(1000)
        cy.get('button').click()
    });
});

/*describe('Testes não funcionais de login', () => {
    it('Deve tentar logar com usuario e/ou senha incorretos', () => {
        cy.visit("http://localhost:8000")
        cy.get('#username').type('UC22222222') //Colocando login errado
        cy.get('#password').type('0000000') //Colocando a senha errada
        cy.get('button').click()
          });
    });
*/

describe('Testes funcionais de login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("http://localhost:8000")
        cy.get('#username').type('UC22200136') //Colocando login
        cy.wait(1000)
        cy.get('#password').type('1234')//Colocando a senha
        cy.wait(1000)
        cy.get('button').click()
        
    });
});

describe('Teste funcional da seleção da matéria', () => {
    it('Deve realizar a seleção da matéria com sucesso', () => {
        cy.visit("http://localhost:8000/dashboard.html")
        cy.wait(1000)
        cy.get('#confirmPresence').click()//Confirmando a presença
        cy.wait(1000)
    });
});

describe('Teste funcional voltando ao dashboard', () => {
    it('Depois de realizada a seleção e confirmação da presença, deverá voltar ao dashboard com sucesso', () => {
        cy.visit("http://localhost:8000/confirmacao.html")
        cy.wait(1000)
        cy.get('button')
        cy.wait(1000)
        cy.visit("http://localhost:8000/dashboard.html")
    });
});