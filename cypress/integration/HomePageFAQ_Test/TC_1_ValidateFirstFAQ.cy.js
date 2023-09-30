/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate First FAQ Open On Click And Link Correct Navigate',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Trial Free Landing Url Under First FAQ',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickOnFirstFaq()

        hp.clickonFreeTrialInFirstFaq()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })

        hp.backTohomePage()
    })   

})