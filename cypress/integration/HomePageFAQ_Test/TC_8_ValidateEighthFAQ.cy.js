/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate Eighth FAQ Open On Click And Link under this section Correct Navigate',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })

    it('Validate Eighth FAQ Clicked And Open Properly',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickOnEightFaq()

    })  
    
    it('Validate Landing Url Of Plus And Premium Link Under Eighth FAQ',()=>
    {
        
    
        hp.clickOnPlusPremiumPlanInFaq()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePagePlanPricingListInEighthFaqUrl) // => true
            })

        hp.backTohomePage()
    })   

    it('Validate Landing Url Accounting Partner Program Under Eighth FAQ',()=>
    {
        
        hp.clickOnEightFaq()

        hp.clickOnAccouningPartnerInFaq()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageAccountingUnderEighthFaqUrl) // => true
            })

            hp.backTohomePage()
    })   

    it('Validate Landing Url Of Reach Out To Us Link Under Eighth FAQ',()=>
    {
        
        hp.clickOnEightFaq()
        
        hp.clickOnReachOutToUs()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageReachOutFormUnderEighthFaqUrl) // => true
            })

        hp.backTohomePage()

    })  
    
    it('Validate Landing Url Of Work Effectively On Freshbooks Link Under Eighth FAQ',()=>
    {
        
        hp.clickOnEightFaq()
        
        hp.clickOnWorkEffectivelyOnFreshbookInFaq()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageWorkEffectiveArticleInEighthFaqUrl) // => true
            })

    })  

})