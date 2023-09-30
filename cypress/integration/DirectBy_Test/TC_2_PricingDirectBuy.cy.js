/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate DirectBy Promotion For Pricing Page From Pricing Menu',()=>{

    const hp=new HomePage()
    const hf=new HeaderFooterUS()


      Cypress.on('uncaught:exception', (err, runnable) => {
        // we expect a 3rd party library error with message 'list not defined'
        // and don't want to fail the test so we return false
        if (err.message.includes('Cannot read properties of null')) {
          return false;
        }
        return false;
    })
      
    it('Validate Landing Url Of Pricing Menu From Menu',()=>
    {
        
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            hf.clickOnHeaderPricingMenu()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                    cy.url().should('eq', penvUrl.productionPricingUrl) // => true
            })

            //cy.setCookie('smux_login', '1', { domain: 'www.freshbooks.com' })
            //cy.reload()
            //cy.clearCookie('smux_login')
            //cy.reload()
        //hf.clickOnHeaderPricingMenu()
    })   

    it('Validate HeroBanner Of Pricing Page has Direct Buy Promotion and Buy Now will navigate to Sign Up Page',()=>
    {

        hp.checkPromotionTextOnPricingHeroBanner()

        hp.clickOnBuyNowHeroBanner()

        cy.url().should('contain','my.freshbooks.com/#/signup/direct-buy?')

        hp.checkPromotionTextOnSingUpPage()

        hp.backTohomePage()
       

    })

    it('Validate Set Offer Details will Open while Hovering On It on Hero Banner Of Pricing page',()=>
    {

        hp.validateHoveringTextForSeeOfferDetailsOnPricingHeroBanner()
    })
   
    
    
})