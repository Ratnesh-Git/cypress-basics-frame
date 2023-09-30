/// <reference types="Cypress"/>


import HomePage from "../../PageClasses/HomePage";
import SecondBlockPage from "../../PageClasses/SecondBlockPage";
import BlockPageFirst from "../../PageClasses/BlockPageFirst";
import 'cypress-iframe'
describe('Validate Landing Url and Functionality For Second Page Block Level',()=>{

    const hp=new HomePage()
    const sbp=new SecondBlockPage()
    const bpf = new BlockPageFirst()
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      

      it('Validate the Landing Url of TryItFree Link under Vat Cat Bar For Second Page Block Level',()=>
      {
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.secondBlockPageUrl)
                hp.clickOnRegionList()
            })
          sbp.clicksecondBlockVatCatBarTryItFree()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.firstBlockPageBlueCtaBarTryItFreeUrl) // => true
  
          })
          hp.backTohomePage()
      })
  
      it.skip('Validate the Signup Functionality For Second Page Block Level',()=>
      {
          sbp.entersecondBlockSignupEmail()
          sbp.entersecondBlockSignupCreatePwd()
          sbp.selectsecondBlockSignupConfirmCheckBox()
          sbp.clicksecondBlockSignupGetStarted()
          sbp.validatesecondBlockEmailSentTextInAuthPage()
          
          hp.backTohomePage()
          
      })
  
      it('Validate the Functionality of Pardot Form For Second Page Block Level',()=>
      {
        // cy.get('iframe.pardot-form__iframe.d-block.mx-auto[src="https://www2.freshbooks.com/l/490351/2021-03-31/2bz4t6n"]')
        //     .within(fr=>{
        //         const [myIframe]=fr.get()
        //         myIframe.content
        //     })
          sbp.entersecondBlockPardotFormFirstName()
          sbp.entersecondBlockPardotFormLastName()
          sbp.entersecondBlockPardotFormCompanyName()
          sbp.entersecondBlockPardotFormEmail()
          sbp.entersecondBlockPardotFormPhone()
          sbp.clickAndSelectsecondBlockPardotFormCountry()
          sbp.clicksecondBlockPardotFormAgreeCheckbox()
          sbp.clicksecondBlockPardotFormBecomePartner()
          
      })
  
    
    })