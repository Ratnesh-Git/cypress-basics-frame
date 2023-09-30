/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Footer Helpful Links SubMenu',()=>{

    const hp = new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate  Landing Url Of Footer Accounting Software Sub Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })
        // hf.clickOnFooterAccountingSoftwareSubMenu()

        // cy.fixture('EnviornmentPath.json').then(envUrl =>
        //     {
        //             cy.url({timeout:4000}).should('eq', envUrl.footerAccountingSoftwareSubMenuInHelpfulLinksUrl) // => true
        //     })

        // hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Accounting Templates Sub Menu',()=>
    {
        
        
        hf.clickOnFooterAccountingTemplatesSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.footerAccountingTemplatesSubMenuInHelpfulLinksUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Landing Url Of Footer Invoice Template Sub Menu',()=>
    {
        
        
        hf.clickOnFooterInvoiceTemplateSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url({timeout:4000}).should('eq', envUrl.footerInvoiceTemplatesSubMenuInHelpfulLinksUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Login Sub Menu',()=>
    {
        
        
        hf.clickOnFooterLoginSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerLoginSubMenuInHelpfulLinksUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it.skip('Validate  Landing Url Of Footer Quickbooks Alternative Sub Menu',()=>
    {
        
        hf.clickOnFooterQuickBooksAlternativeSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerQuickbooksAlternativeSubMenuInHelpfulLinksUrl) // => true
            })

        hp.backTohomePage()

        
    })  

   
    it('Validate  Landing Url Of Footer Resource Hub Sub Menu',()=>
    {
        
        
        hf.clickOnFooterResourceHubSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerResourceHubSubMenuInHelpfulLinksUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it.skip('Validate Landing Url Of Footer Sitemap Sub Menu',()=>
    {
        
        
        hf.clickOnFooterSitemapSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerSitemapSubMenuInHelpfulLinksUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Help Center Sub Menu',()=>
    {
        
        
        hf.clickOnFooterHelpCenterSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerHelpCenterSubMenuInHelpfulLinksUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Support Webinars Sub Menu',()=>
    {
        
        
        hf.clickOnFooterSupportWebinarsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerSupportWebinarsSubMenuInHelpfulLinksUrl) // => true
            })

        hp.backTohomePage()

        
    })  

    it('Validate  Landing Url Of Footer Tools Sub Menu',()=>
    {
        
        
        hf.clickOnFooterToolsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerToolsSubMenuInHelpfulLinksUrl) // => true
            })

        
    }) 

    
    
})