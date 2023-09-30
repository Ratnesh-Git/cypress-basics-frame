/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Easy To Use Features For TimeTracking',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Landing Url of TimeTracking Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickTimeTracking()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stagingUrl) // => true
            })

    })   

    it('Validate Landing Url of About TimeTracking link under TimeTracking Menu',()=>
    {
        
        hp.clickAboutTimeTrackingLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageAboutTimeTrackingUrl) // => true
            })

         hp.backTohomePage()   

         hp.clickTimeTracking()

    })   

    it('Validate Landing Url of TryItFree link under TimeTracking Menu',()=>
    {
        
        hp.clickTimeTrackingTryItFree()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })

         hp.backTohomePage()

         hp.clickTimeTracking()

    })   

    it('Validate video working properly under TimeTracking Menu',()=>
    {
        
        hp.clickTimeTrackingVideo()

        hp.closeFeaturesVideo()

    })   




})