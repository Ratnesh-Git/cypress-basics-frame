/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate The Signup with Google Link on Signup Page',()=>{

    const hp=new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('First Click On TryItFree Link On Header and Validate The Landing Url Of SignUp Page Signup with Google Link on Signup Page ',()=>
    {
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.productionUrl)
                hp.clickOnRegionList()
            })

            //hp.setSmuxLoginCookiesForProdHomePage()
            //hp.clickOnHeaderTryItFreeWithoutDirectBuy()
            hp.clickOnProdHeaderTryItFree()

            cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
                {
                            cy.url().should('eq', penvUrl.prodSignUpUrlForTryItFree) // => true
            
                })

            cy.wait(2000)
            
    }) 

    it('Validate the Signup with Google Link on Signup Page ',()=>
    {
        
        hp.clickOnConfirmtermsAndAgreeCheckBox()

        hp.clickOnSignupWithGoogleSignUpPage()
        
        //hp.enterValidEmailOrUsername()

        //hp.clickOnNextButton()





       
    }) 




    
})