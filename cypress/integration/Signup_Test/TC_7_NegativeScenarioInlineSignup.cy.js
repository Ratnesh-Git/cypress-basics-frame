/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Inline Signup Validation For Negative Scenario',()=>{

    const hp=new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate Inline Signup Validation Message when Invalid Email is Entered',()=>
    {
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            hp.setSmuxLoginCookiesForProdHomePage()

            hp.enterInvalidValueInInlineEmailField()
            hp.enterValueInPasswordField()
            hp.clickOnConfirmtermsAndAgreeCheckBox()
            hp.clickOnInlineHomePageBannerTryItFree()
            hp.checkValidationForWrongEmailEntered()

    }) 

    it('Validate Inline Signup Validation Message when Invalid Password is Entered',()=>
    {
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            hp.setSmuxLoginCookiesForProdHomePage()

            hp.enterValueInInlineEmailField()
            hp.enterInvalidValueInPasswordField()
            hp.clickOnConfirmtermsAndAgreeCheckBox()
            hp.clickOnInlineHomePageBannerTryItFree()
            hp.checkValidationForWrongPwdEntered()

    }) 

    it('Validate Inline Signup Validation Message when Confirm Checkbox Is Not Checked',()=>
    {
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            hp.setSmuxLoginCookiesForProdHomePage()

            hp.enterValueInInlineEmailField()
            hp.enterValueInPasswordField()
            hp.clickOnInlineHomePageBannerTryItFree()
            hp.checkValidationTextIfNotCheckedOnConfirmBox()
            
    }) 

    it('Validate Inline Signup Validation Message when user enter already registered email',()=>
    {
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            hp.setSmuxLoginCookiesForProdHomePage()

            hp.enterAlreadyExistEmail()
            hp.enterValueInPasswordField()
            hp.clickOnConfirmtermsAndAgreeCheckBox()
            hp.clickOnInlineHomePageBannerTryItFree()
            hp.checkValidationTextForExistingEmailFill()
            
    }) 

    it('Validate Inline Signup Validation Message when user enter invalid email and password',()=>
    {
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            hp.setSmuxLoginCookiesForProdHomePage()

            hp.enterInvalidValueInInlineEmailField()
            hp.enterInvalidValueInPasswordField()
            hp.clickOnConfirmtermsAndAgreeCheckBox()
            hp.clickOnInlineHomePageBannerTryItFree()
            //While entering wrong Email and Password Even the validation message will come first for email only
            hp.checkValidationForWrongEmailEntered()
            
    }) 

    
})