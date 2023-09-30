/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage Learn More Landing Url For All',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })

    it('Validate Landing Url of FreeLancers Learn More',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickFreelancersLearnMore()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageFreelancersLearnMoreUrl) // => true
            })

        hp.backTohomePage()

    })   
    it('Validate Landing Url of SelfEmployed Learn More',()=>
    {
        
        

        hp.clickSelfEmployedLearnMore()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageSelfEmployedLearnMoreUrl) // => true
            })

        hp.backTohomePage()

    })   
    it('Validate Landing Url of Business With Contractors Learn More',()=>
    {
        

        hp.clickBusinessWithContractorsLearnMore()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageBusinessWithContractorLearnMoreUrl) // => true
            })

        hp.backTohomePage()

    })   
    it('Validate Landing Url of Business With Employee Learn More',()=>
    {
        
        

        hp.clickBusinessWithEmployeeLearnMore()
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageBusinessWithEmployeeLearnMoreUrl) // => true
            }) 

        hp.backTohomePage()

    })   

    


})