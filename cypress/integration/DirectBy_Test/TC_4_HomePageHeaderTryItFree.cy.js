/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate HomePage TryItFree should correctly Land On SignUp and Promotion Buy Now Of SingUp will go On Pricing.',()=>{

    const hp=new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate TryItFree will Successfully Navigate To Pricing Page',()=>
    {
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            hp.clickOnProdHeaderTryItFree()

            cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
                {
                        cy.url().should('eq', penvUrl.prodSignUpUrlForTryItFree) // => true
                })
            

            //cy.setCookie('smux_login', '1', { domain: 'www.freshbooks.com' })
            //cy.reload()
            //cy.clearCookie('smux_login')
            //cy.reload()
        //hf.clickOnHeaderPricingMenu()
    })   

    it('Validate Buy Now Promotion Link Of SignUp will land to Pricing Page ',()=>
    {
        hp.clickOnBuyNowPromotionInProdSignUp()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                    cy.url().should('eq', penvUrl.productionPricingUrl) // => true
            })
       
    })    
})