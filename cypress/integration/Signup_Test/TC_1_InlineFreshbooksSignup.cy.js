/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Without Direct By Home Page Banner Freshbooks Signup',()=>{

    const hp=new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('First Remove Cookies And Validate Password Field Only Dispaly When Clicked On Email Field',()=>
    {
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            hp.setSmuxLoginCookiesForProdHomePage()

            hp.validatePasswordFieldShowAfterClickEmail()

           // hp.checkPromotionWithoutDirectBuyHeroBanner()
    }) 

    it('Enter Email and Password value for Inline Signup',()=>
    {
        hp.enterValueInInlineEmailField()
        hp.enterValueInPasswordField()
    })

    it('Click On Confirm Checkbox for Terms And Agree Then Click oN TryItFree',()=>
    {
        hp.clickOnConfirmtermsAndAgreeCheckBox()
        hp.clickOnInlineHomePageBannerTryItFree()
        
    })

    it('Validate the text for Sent To Verification Email On Auth Page ',()=>
    {
        
        hp.validateTextOnAuthPageForInlineSignup()
    })

    it('Validate the Url for Auth Page ',()=>
    {
        
        hp.validateUrlOfAuthPageForInlineSignup()

    })





    
})