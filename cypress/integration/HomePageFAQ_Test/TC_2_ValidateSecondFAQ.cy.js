/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate Second FAQ Open On Click And Link under this section Correct Navigate',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate QuickBooks Landing Url Under Second FAQ',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickOnSecondFaq()

        hp.clickOnQuickBooksLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageQuickBooksUnderSecomdFaqUrl) // => true
            })

        hp.backTohomePage()
    })  
    
    it('Validate Landing Url Of Xero Link Under Second FAQ',()=>
    {
        
        

        hp.clickOnSecondFaq()

        hp.clickOnXeroLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageXeroUnderSecomdFaqUrl) // => true
            })

        hp.backTohomePage()
    })   

    it('Validate Landing Url Wave Link Under Second FAQ',()=>
    {
        
        hp.clickOnSecondFaq()

        hp.clickOnWaveLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageWaveUnderSecomdFaqUrl) // => true
            })

        hp.backTohomePage()
    })   

    it('Validate Landing Url Of Specialists Link Under Second FAQ',()=>
    {
        
        hp.clickOnSecondFaq()
        
        hp.clickOnSpecialistsLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageSpecialistsUnderSecondFaqUrl) // => true
            })

    })   

})