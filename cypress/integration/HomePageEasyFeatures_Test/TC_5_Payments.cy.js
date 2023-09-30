/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Easy To Use Features For Payments',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Landing Url of Payments Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickPayments()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stagingUrl) // => true
            })

    })   

    it('Validate Landing Url of About Payments link under Payments Menu',()=>
    {
        
        hp.clickAboutPaymentsLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageAboutPaymentsUrl) // => true
            })

         hp.backTohomePage()   

         hp.clickPayments()

    })   

    it('Validate Landing Url of TryItFree link under Payments Menu',()=>
    {
        
        hp.clickPaymentsTryItFree()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })

         hp.backTohomePage()

         hp.clickPayments()

    })   

    it('Validate video working properly under Payments Menu',()=>
    {
        
        hp.clickPaymentsVideo()

        hp.closeFeaturesVideo()

    })   




})