/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Footer WhoItsFor SubMenu',()=>{

    const hp = new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate  Landing Url Of Footer Freelancers Sub Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })
        hf.clickOnFooterFreelancersSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerFreelancersSubMenuInWhoItsForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Self Employed Professionals Sub Menu',()=>
    {
        
        
        hf.clickOnFooterSelfEmployedSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerSelfEmployedProfessionalsSubMenuInWhoItsForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Landing Url Of Footer Business With Contractor Sub Menu',()=>
    {
        
        
        hf.clickOnFooterBusinessWithContractorsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerBusinessWithContractorsSubMenuInWhoItsForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Business With Employees Sub Menu',()=>
    {
        
        
        hf.clickOnFooterBusinessWithEmployeesSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerBusinessWithEmployeeSubMenuInWhoItsForUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Footer Accountants Sub Menu',()=>
    {
        
        
        hf.clickOnFooterAccountantsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerAccountantsSubMenuInWhoItsForUrl) // => true
            })

        
    })  

    
    
})