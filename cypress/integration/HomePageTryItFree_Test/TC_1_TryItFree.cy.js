/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Try It Free Landing Url For Above and Under App Store Section',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })

    it('Validate Landing Url of TryItFree Above App Store Section',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickTryItFreeAboveAppStore()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })

        hp.backTohomePage()

    })   
    it('Validate Landing Url of TryItFree under App Store Section',()=>
    {
        
        hp.clickTryItFreeUnderAppStore()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })

        hp.backTohomePage()

    })   

    
})