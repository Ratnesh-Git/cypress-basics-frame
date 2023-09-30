/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Footer Partners SubMenu',()=>{

    const hp = new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate  Landing Url Of Footer Affiliate Program Sub Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })
        hf.clickOnFooterAffiliateProgramSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerAffiliateProgramSubMenuInPartnersUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Apps Sub Menu',()=>
    {
        
        
        hf.clickOnFooterAppsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerAppsSubMenuInPartnersUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Landing Url Of Footer Developers Sub Menu',()=>
    {
        
        
        hf.clickOnFooterDevelopersSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerDevelopersSubMenuInPartnersUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Education Sub Menu',()=>
    {
        
        
        hf.clickOnFooterEducationSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerEducationSubMenuInPartnersUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Referral Program Sub Menu',()=>
    {
        
        
        hf.clickOnFooterReferralProgramSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerReferralProgramSubMenuInPartnersUrl) // => true
            })

        hp.backTohomePage()

        
    })  

    it('Validate  Landing Url Of Footer Reseller Program Sub Menu',()=>
    {
        
        
        hf.clickOnFooterResellerProgramSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerResellerProgramSubMenuInPartnersUrl) // => true
            })

        
    })  

    
    
})