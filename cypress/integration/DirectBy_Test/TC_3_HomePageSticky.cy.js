/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate the Sticky Banner visible while scrolling and also It should Navigate correctly',()=>{

    const hp=new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Sticky Banner Will Visible While Scrolling The Page',()=>
    {
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            cy.scrollTo('bottom')

            hp.validateTheStrickyBannnerVisible()

            //cy.setCookie('smux_login', '1', { domain: 'www.freshbooks.com' })
            //cy.reload()
            //cy.clearCookie('smux_login')
            //cy.reload()
        //hf.clickOnHeaderPricingMenu()
    })   

    it('Validate The Landing Url Of Sticky Banner Buy Now Link ',()=>
    {

        hp.clickOnStickyBannerBuyNowHomePage()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                    cy.url().should('eq', penvUrl.productionPricingUrl) // => true
            })
       

    })    
})