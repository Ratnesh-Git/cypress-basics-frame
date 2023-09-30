/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Customer Support Links',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Landing Url of Contact Us link in Customer Support Section',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickOnContactUs()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageContactUsUrl) // => true
            })

        hp.backTohomePage()
    })   

    it('Validate Landing Url of Help Center link in Customer Support Section',()=>
    {
        

        hp.clickOnHelpCenter()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageSupportHelpCenterUrl) // => true
            })

    })   
    
})