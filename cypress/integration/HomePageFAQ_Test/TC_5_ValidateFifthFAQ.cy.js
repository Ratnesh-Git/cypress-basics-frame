/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate Fifth FAQ Open On Click And Link Correct Navigate',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Fifth FAQ clicked and Open Properly',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickOnFifthFaq()

    })   

    it('Validate Learn More About Accounting Landing Url Under Fifth FAQ',()=>
    {
        
        hp.clickOnLearnAccountingInFaq()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageLeranAccountingUnderFifthFaqUrl) // => true
            })

    })   

})