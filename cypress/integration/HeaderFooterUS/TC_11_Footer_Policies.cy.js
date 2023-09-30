/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Footer Policies SubMenu',()=>{

    const hp = new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate  Landing Url Of Footer Accessibility Sub Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })
        hf.clickOnFooterAccessibilitySubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerAccessibilitySubMenuInPoliciesUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Privacy Policy Sub Menu',()=>
    {
        
        
        hf.clickOnFooterPrivacyPolicySubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerPrivacyPolicySubMenuInPoliciesUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Landing Url Of Footer Security Safegaurds Sub Menu',()=>
    {
        
        
        hf.clickOnFooterSecuritySafegaurdsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerSecutitySafegaurdsSubMenuInPoliciesUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Terms Of Service Sub Menu',()=>
    {
        
        
        hf.clickOnFooterTermsOfServiceSubMneu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerTermsOfServiceSubMenuInPoliciesUrl) // => true
            })


        
    })   

})