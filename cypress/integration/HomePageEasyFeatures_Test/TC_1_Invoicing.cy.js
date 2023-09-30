/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Easy To Use Features For Invoicing',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Landing Url of Invoicing Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickInvoicing()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stagingUrl) // => true
            })

    })   

    it('Validate Landing Url of About Invoicing link under Invoicing Menu',()=>
    {
        
        hp.clickAboutInvoicingLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageAboutInvoicingUrl) // => true
            })

         hp.backTohomePage()   

    })   

    it('Validate Landing Url of TryItFree link under Invoicing Menu',()=>
    {
        
        hp.clickInvoicingTryItFree()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })

         hp.backTohomePage()

    })   

    it('Validate video working properly under Invoicing Menu',()=>
    {
        
        hp.clickInvoicingVideo()

        hp.closeFeaturesVideo()

    })   




})