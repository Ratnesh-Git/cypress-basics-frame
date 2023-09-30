/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Easy To Use Features For Mobile',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Landing Url of Mobile Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickMobile()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stagingUrl) // => true
            })

    })   

    it('Validate Landing Url of About Mobile link under Mobile Menu',()=>
    {
        
        hp.clickAboutMobileLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageAboutMobileUrl) // => true
            })

         hp.backTohomePage()   

         hp.clickMobile()

    })   

    it('Validate Landing Url of TryItFree link under Mobile Menu',()=>
    {
        
        hp.clickMobileTryItFree()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })

         hp.backTohomePage()

         hp.clickMobile()

    })   

    it('Validate video working properly under Mobile Menu',()=>
    {
        
        hp.clickMobileVideo()

        hp.closeFeaturesVideo()

    })   




})