/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";


describe('Validate Fourth FAQ Open On Click And Link under this section Correct Navigate',()=>
{

    const hp1=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Can Review Link Under Fourth FAQ',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp1.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })
        
        hp1.clickOnFourthFaq()

        hp1.clickOnCanReviewLink()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                cy.url().should('eq', envUrl.homePageCanReviewUnderFourthFaqUrl)
            })

        hp1.backTohomePage()

    })  
    
    it('Validate Landing Url Of Wondering Which FreshBooks Plan Will Be Right Link Under Fourth FAQ',()=>
    {
        
        hp1.clickOnFourthFaq()

        hp1.clickOnFreshbooksPlan()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageFreshBooksPlanUnderFourthFaqUrl) // => true
            })

    })   


})