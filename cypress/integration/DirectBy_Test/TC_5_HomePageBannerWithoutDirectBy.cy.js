/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage,SignUp,Pricing Page Not Have Any Promotions',()=>{

    const hp=new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('First Remove Cookies And Validate HomePage Hero Banner Not Have Any Promotions',()=>
    {
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            hp.setSmuxLoginCookiesForProdHomePage()

            hp.checkPromotionWithoutDirectBuyHeroBanner()
    }) 

    it('Validate Without Direct Buy Sticky Banner Should Not Display ',()=>
    {
    
        hp.checkWithoutDirectBuyStickyBannerNotShow()

    }) 

    it('Validate Without Direct Buy Home Page Pricing Menu Land On Pricing But Not Have Direct Buy Promotion ',()=>
    {
    
   
        hp.setSmuxLoginCookiesForProdHomePage()
        hf.clickOnHeaderDirectBuyPricingMenu()
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                    cy.url().should('eq', penvUrl.productionPricingUrl) // => true
            })
        hp.checkWithoutDirectBuyPricingBannerBuyNow()
        hp.backTohomePage()

            
    }) 

    it('Validate Without Direct Buy Home Page Header TryItFree Land On SignUp But Not Have Direct Buy Promotion ',()=>
    {
    

        hp.setSmuxLoginCookiesForProdHomePage()
        hp.clickOnHeaderTryItFreeWithoutDirectBuy()
        hp.checkWithoutDirectBuySignUpBuyNow()

    }) 


    
    

})