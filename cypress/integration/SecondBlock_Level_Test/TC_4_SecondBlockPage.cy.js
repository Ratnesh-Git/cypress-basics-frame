/// <reference types="Cypress"/>


import HomePage from "../../PageClasses/HomePage";
import SecondBlockPage from "../../PageClasses/SecondBlockPage";
import BlockPageFirst from "../../PageClasses/BlockPageFirst";

describe('Validate Landing Url and Functionality For Second Page Block Level',()=>{

    const hp=new HomePage()
    const sbp=new SecondBlockPage()
    const bpf = new BlockPageFirst()
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
      it('Validate the Landing Url of Flexible colour background TryItFree Link For Second Page Block Level',()=>
      {
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.secondBlockPageUrl)
                hp.clickOnRegionList()
            })
          sbp.clicksecondBlockFlexibleTryItFree()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.firstBlockPageBlueCtaBarTryItFreeUrl) // => true
  
          })
          hp.backTohomePage()
      })
  
      it('Validate the Landing Url of Pricing Table All TryItFree For Second Page Block Level',()=>
      {
          sbp.validatePricingTableDefaultPerMonth()
         sbp.validatePricingTableChangeWhenClickPerYear()
         hp.clickOnRegionList()
         sbp.clickEachsecondBlockPricingTableTryItFree()
         
      })

      
    })