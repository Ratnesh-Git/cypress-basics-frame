/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Header First Features Menu',()=>{

    const hp = new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validate Hovering On Features Menu And Landing Url Of Accounting Sub Menu Link',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })
        hf.hoverAndClickOnHeaderAccountingSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerAccountingSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On Features Menu And Landing Url Of Mobile Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderMobileSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerMobileSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On Features Menu And Landing Url Of Apps Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderAppsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerAppsSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On Features Menu And Landing Url Of Payments Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderPaymentsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerPaymentsSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On Features Menu And Landing Url Of Clients Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderClientsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerClientsSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })  
    
    it('Validate Hovering On Features Menu And Landing Url Of Projects Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderProjectsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerProjectsSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })
    
    it('Validate Hovering On Features Menu And Landing Url Of Estimates Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderEstimatesSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerEstimatesSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })  

    it('Validate Hovering On Features Menu And Landing Url Of Payroll Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderPayrollSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerPayrollSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })  

    it('Validate Hovering On Features Menu And Landing Url Of Proposals Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderProposalsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerProposalsSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })  

    it('Validate Hovering On Features Menu And Landing Url Of Expenses Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderExpensesSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerExpensesSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })  

    it('Validate Hovering On Features Menu And Landing Url Of Reports Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderReportsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerReporstSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })  

    it('Validate Hovering On Features Menu And Landing Url Of Invoicing Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderInvoicingSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerInvoicingSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })  

    it('Validate Hovering On Features Menu And Landing Url Of TimeTracking Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderTimeTrackingSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerTimeTrackingSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })  

    it('Validate Hovering On Features Menu And Landing Url Of MileageTracking Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderMileageTrackingSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.headerMileageTrackingSubMenuInFeaturesUrl) // => true
            })


        
    })  




    
    
})