/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate DirectBy Hero Banner for Home Page',()=>{

    const hp=new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate HeroBanner has Promotion and Buy Now will navigate to Pricing Page',()=>
    {
        
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

        hp.checkPromotionTextOnHeroBanner()

        hp.clickOnBuyNowHeroBanner()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                    cy.url().should('eq', penvUrl.productionPricingUrl) // => true
            })
        hp.backTohomePage()

            //cy.setCookie('smux_login', '1', { domain: 'www.freshbooks.com' })
            //cy.reload()
            //cy.clearCookie('smux_login')
            //cy.reload()
        //hf.clickOnHeaderPricingMenu()
    })   

    it('Validate Landing Url Of GetApp Reviews Link On HeroBanner',()=>
    {
        hp.clickOnGetAppReviewsOnHeroBanner()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                    cy.url().should('eq', penvUrl.heroBannerGetAppReviewUrl) // => true
            })



    })
   
    
    
})