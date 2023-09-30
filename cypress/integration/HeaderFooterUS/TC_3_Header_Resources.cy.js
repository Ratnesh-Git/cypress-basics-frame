/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Header Third Resources Menu',()=>{

    const hp = new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Hovering On Resources Menu And Landing Url Of ReportsLibrary Sub Menu Link',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })
        hf.hoverAndClickOnHeaderReportsLibrarySubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerReportsLibrarySubMenuInResourcersForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On Resources Menu And Landing Url Of Blog Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderBlogSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerBlogSubMenuInResourcersForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On Resources Menu And Landing Url Of Support Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderSupportSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerSupportsSubMenuInResourcersForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On Resources Menu And Landing Url Of Covid Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderCovidSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerCovidSubMenuInResourcersForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Hovering On Resources Menu And Landing Url Of Webinars Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderWebinarsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerWebinarsSubMenuInResourcersForUrl) // => true
            })
        hp.backTohomePage()
        
    })  

    it('Validate Hovering On Resources Menu And Landing Url Of Partners Sub Menu Link',()=>
    {
        
        
        hf.hoverAndClickOnHeaderPartnersSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerPartnersSubMenuInResourcersForUrl) // => true
            })
        
    })  
    
    
    
})