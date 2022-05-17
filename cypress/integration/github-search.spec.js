it('Obtém usuário do github', () => {
    cy.visit('')
    cy.get('#username').type('marcelafreire')
    cy.contains('button', 'Procurar').click()
    cy.get('h5').contains('Marcela Freire')
    cy.get('p').contains('marcelafreire')
    cy.get('p').contains('Front-End Developer | JavaScript | SASS | ReactJS | React Hooks | Redux | Angular | NodeJS | ExpressJS | MongoDB | Git')
    cy.get('span').contains('Não informado')
    cy.get('span').contains('15')
    cy.get('span').contains('17')
})

it('Cenário de erro ao obter repositório', () => {
    cy.visit('')
    cy.get('#username').type('jskadkjasndjksan')
    cy.contains('button', 'Procurar').click()
    cy.get('h5').contains('Usuário não encontrado')
})