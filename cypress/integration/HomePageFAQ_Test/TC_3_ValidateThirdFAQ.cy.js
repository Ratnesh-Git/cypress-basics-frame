/// <reference types="Cypress"/>

import HomePage from "../../PageClasses/HomePage";

describe('Validate Third FAQ Open On Click And Link under this section Correct Navigate',()=>{

    const hp=new HomePage()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Third FAQ clicked and Open Properly',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })

        hp.clickOnThirdFaq()

    })  
    
    it('Validate Landing Url Of Checkout Article Link Under Third FAQ',()=>
    {
        
        

        hp.clickOnCheckOutArticle()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.homePageCheckoutArticleUnderThirdFaqUrl) // => true
            })

    })   


})