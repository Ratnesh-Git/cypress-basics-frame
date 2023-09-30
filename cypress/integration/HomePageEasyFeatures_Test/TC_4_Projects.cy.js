/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Easy To Use Features For Projects',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })

    it('Validate Landing Url of Projects Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickProjects()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stagingUrl) // => true
            })

    })   

    it('Validate Landing Url of About Projects link under Projects Menu',()=>
    {
        
        hp.clickAboutProjectsLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageAboutProjectsUrl) // => true
            })

         hp.backTohomePage()   

         hp.clickProjects()

    })   

    it('Validate Landing Url of TryItFree link under Projects Menu',()=>
    {
        
        hp.clickProjectsTryItFree()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })

         hp.backTohomePage()

         hp.clickProjects()

    })   

    it('Validate video working properly under Projects Menu',()=>
    {
        
        hp.clickProjectsVideo()

        hp.closeFeaturesVideo()

    })   




})