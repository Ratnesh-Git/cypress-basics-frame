/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Easy To Use Features For Accounting',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })

    it('Validate Landing Url of Accounting Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickAccounting()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stagingUrl) // => true
            })

    })   

    it('Validate Landing Url of About Accounting link under Accounting Menu',()=>
    {
        
        hp.clickAboutAccountingLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageAboutAccountingUrl) // => true
            })

         hp.backTohomePage()   

         hp.clickAccounting()

    })   

    it('Validate Landing Url of TryItFree link under Accounting Menu',()=>
    {
        
        hp.clickAccountingTryItFree()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })

         hp.backTohomePage()

         hp.clickAccounting()

    })   

    it('Validate video working properly under Accounting Menu',()=>
    {
        
        hp.clickAccountingVideo()

        hp.closeFeaturesVideo()

    })   




})