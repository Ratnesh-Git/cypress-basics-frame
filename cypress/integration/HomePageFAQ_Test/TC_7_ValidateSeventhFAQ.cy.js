/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate Seventh FAQ Open On Click And Link Correct Navigate',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Seventh FAQ clicked and Open Properly',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickOnSeventhFaq()

    })   

    it('Validate Check It Out Here Landing Url Under Seventh FAQ',()=>
    {
        
        hp.clickOnCheckItOutHereInFaq()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageSupportHelpCenterUrl) // => true
            })

    })   

})