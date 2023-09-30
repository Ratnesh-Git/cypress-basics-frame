/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate Sixth FAQ Open On Click And Link Correct Navigate',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Sixth FAQ clicked and Open Properly',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickOnSixthFaq()

    })   

    it('Validate Learn More About Mobile Landing Url Under Sixth FAQ',()=>
    {
        
        hp.clickOnLearnMobileInFaq()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageLearnMobileUnderSixthFaqUrl) // => true
            })

    })   

})