/// <reference types="Cypress"/>

import BlockPageFirst from "../../PageClasses/BlockPageFirst";
import FourthBlockPage from "../../PageClasses/FourthBlockPage";
import HomePage from "../../PageClasses/HomePage";
import ThirdBlockPage from "../../PageClasses/ThirdBlockPage";


describe('Validate Fourth Page Block Level', () => {

    const hp = new HomePage()
    const bpf = new BlockPageFirst()
    const fbp=new FourthBlockPage()
    const tbp=new ThirdBlockPage()



    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validate Functionality of Signup page in Third Page Block Level', () => {

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            hp.goToStaging(penvUrl.thirdBlockPageUrl)
            
        })

        tbp.enterthirdBlockDirectBySignupEmailFeild()
        tbp.enterthirdBlockDirectBySignupPasswordFeild()
        tbp.clickthirdBlockDirectBySignupConfirmCheckBox()
        tbp.clickthirdBlockDirectBySignupGetStartedButton()


    })

    it('Validate the text for Sent To Verification Email On Auth Page in Third Page Block Level',()=>
    {
        
        hp.validateTextOnAuthPageForInlineSignup()//used same menthod as for Inline Singup
        hp.validateUrlOfAuthPageForInlineSignup()//used same menthod as for Inline Singup
        
        hp.backTohomePage()
    })

    it('Validate Landing Url for "Get App Review" link in Section Third Page Block Level', () => {

       tbp.clickthirdBlockGetAppReviewLink()

       cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
        {
                    cy.url().should('eq', penvUrl.InlineHomePageBannerGetAppUrl) // => true
    
        })
    })

})