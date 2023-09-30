/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Footer Features SubMenu',()=>{

    const hp = new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate  Landing Url Of All FreshBooks Features Sub Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })
        hf.clickOnFooterAllFeaturesSubMenu();

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerAllFeaturesSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Estimating Software Sub Menu',()=>
    {
        
        
        hf.clickOnFooterEstimatingSoftwareSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerEstimatingSoftwareSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Landing Url Of Expenses And Receipts Sub Menu',()=>
    {
        
        
        hf.clickOnFooterExpenseReceiptsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerEspensesReceiptsSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Financial Reports Sub Menu',()=>
    {
        
        
        hf.clickOnFooterFinancialsReportsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerFinancialReportsSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of High Volume Billing Sub Menu',()=>
    {
        
        
        hf.clickOnFooterHighBillingSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerHighBillingSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()
        
    })  

    it('Validate  Landing Url Of Invoice Software Sub Menu',()=>
    {
        
        
        hf.clickOnFooterInvoiceSoftwareSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerInvoiceSoftwareSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()
        
    }) 
    
    it('Validate  Landing Url Of Managing Projects Sub Menu',()=>
    {
        
        
        hf.clickOnFooterManagingProjectsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerManagingProjectsSubMenuInFeaturesUrl) // => true
            })

    
        hp.backTohomePage()
        
    }) 
    it('Validate  Landing Url Of Mobile Apps Sub Menu',()=>
    {
        
        
        hf.clickOnFooterMobileAppsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerMobileAppsSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()
        
    }) 
    it('Validate  Landing Url Of Online Payments Sub Menu',()=>
    {
        
        
        hf.clickOnFooterOnlinePaymentsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerOnlinePaymentsSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()
        
    }) 
    it('Validate  Landing Url Of Payroll Sub Menu',()=>
    {
        
        
        hf.clickOnFooterPayrollSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerPayrollSubMenuInFeaturesUrl) // => true
            })

        hp.backTohomePage()
        
    }) 
    it('Validate  Landing Url Of Pricing Sub Menu',()=>
    {
        
        
        hf.clickOnFooterPricingSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerPricingSubMenuInFeaturesUrl) // => true
            })
        hp.backTohomePage()
    }) 

    it('Validate  Landing Url Of Time Tracking Sub Menu',()=>
    {
        
        
        hf.clickOnFooterTimeTrackingSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerTimeTrackingSubMenuInFeaturesUrl) // => true
            })
        
    }) 
    
    
    
})