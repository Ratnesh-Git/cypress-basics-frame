/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Easy To Use Features For Reporting',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })

    it('Validate Landing Url of Reporting Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickReporting()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stagingUrl) // => true
            })

    })   

    it('Validate Landing Url of About Reporting link under Reporting Menu',()=>
    {
        
        hp.clickAboutReportingLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageAboutReportingUrl) // => true
            })

         hp.backTohomePage()   

         hp.clickReporting()

    })   

    it('Validate Landing Url of TryItFree link under Reporting Menu',()=>
    {
        
        hp.clickReportingTryItFree()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })

         hp.backTohomePage()

         hp.clickReporting()

    })   

    it('Validate video working properly under Reporting Menu',()=>
    {
        
        hp.clickReportingVideo()

        hp.closeFeaturesVideo()

    })   




})