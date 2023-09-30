/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate The Landing Url Of Inline Privacy Policy Link',()=>{

    const hp=new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('First Remove Cookies And Validate The Landing Url Of Privacy Policy Link',()=>
    {
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            hp.setSmuxLoginCookiesForProdHomePage()


        hp.clickOnInlineHomePageBannerPrivacyLink()


        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                        cy.url().should('eq', penvUrl.InlineHomePageBannerPrivacyPolicyUrl) // => true
        
            })

           // hp.checkPromotionWithoutDirectBuyHeroBanner()
    }) 

    
})