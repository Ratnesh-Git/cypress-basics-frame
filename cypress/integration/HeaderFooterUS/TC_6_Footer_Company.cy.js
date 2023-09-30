/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})
import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Footer Company SubMenu',()=>{

    const hp = new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
    
    it('Validate  Landing Url Of About Us Sub Menu',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })
        hf.clickOnFooterAboutUsSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerAboutUsSubMenuInCompanyUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Blog Sub Menu',()=>
    {
        
        
        hf.clickOnFooterBlogSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerBlogSubMenuInCompanyUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate Landing Url Of Careers Sub Menu',()=>
    {
        
        
        hf.clickOnFooterCareersSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerCareersUsSubMenuInCompanyUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of Contact Sub Menu',()=>
    {
        
        
        hf.clickOnFooterContactSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerContactSubMenuInCompanyUrl) // => true
            })

        hp.backTohomePage()

        
    })   

    it('Validate  Landing Url Of OurStory Sub Menu',()=>
    {
        
        
        hf.clickOnFooterOurStorySubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerOurStorySubMenuInCompanyUrl) // => true
            })

        hp.backTohomePage()
        
    })  

    it('Validate  Landing Url Of Press Center Sub Menu',()=>
    {
        
        
        hf.clickOnFooterPressCenterSubMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.footerPressCenterSubMenuInCompanyUrl) // => true
            })
        
    })  
    
    
    
})