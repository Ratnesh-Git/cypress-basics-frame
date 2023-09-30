/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Header Second WhoItsFor Menu',()=>{

    const hp = new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })
    
    it('Validate Hovering On WhoItsFor Menu And Landing Url Of Freelancers Sub Menu Link',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })
        hf.hoverAndClickOnHeaderFreelancersSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerFreelancersSubMenuInWhoItsForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On WhoItsFor Menu And Landing Url Of SelfEmployedProfessionals Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderSelfEmployedSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerSelfEmployedProfessionalsSubMenuInWhoItsForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On WhoItsFor Menu And Landing Url Of BusinessWithContractors Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderBusinessWithContractorsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerBusinessWithContractorSubMenuInWhoItsForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On WhoItsFor Menu And Landing Url Of BusinessWithEmployees Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderBusinessWithEmployeesSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerBusinessWithEmployeesSubMenuInWhoItsForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On WhoItsFor Menu And Landing Url Of Accountants Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderAccountantsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerAccountantsSubMenuInWhoItsForUrl) // => true
            })
        
    })  
    
    
    
})