/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Over 100 Great App link Under App Store Section',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Landing Url of Over Great App Link in App Store Section',()=>
    {
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickOverGreatApp()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageAppSoreUrl) // => true
            })

        hp.backTohomePage()

    })   
    
})