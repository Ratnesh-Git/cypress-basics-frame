/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Easy To Use Features For Expenses',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Landing Url of Expenses Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickExpenses()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stagingUrl) // => true
            })

    })   

    it('Validate Landing Url of About Expenses link under Expenses Menu',()=>
    {
        
        hp.clickAboutExpensesLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageAboutExpensesUrl) // => true
            })

         hp.backTohomePage()   

         hp.clickExpenses()

    })   

    it('Validate Landing Url of TryItFree link under Expenses Menu',()=>
    {
        
        hp.clickExpensesTryItFree()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })

         hp.backTohomePage()

         hp.clickExpenses()

    })   

    it('Validate video working properly under Expenses Menu',()=>
    {
        
        hp.clickExpensesVideo()

        hp.closeFeaturesVideo()

    })   




})