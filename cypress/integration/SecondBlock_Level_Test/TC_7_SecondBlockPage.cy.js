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
      
      it('Validate the Landing Url of Comparison Chart TryItFree Link For Second Page Block Level',()=>
      {
        cy.clearCookies()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.secondBlockPageUrl)
                hp.clickOnRegionList()
            })
          sbp.clicksecondBlockComparisonTableTryItFree()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.firstBlockPageBlueCtaBarTryItFreeUrl) // => true
  
          })
          hp.backTohomePage()
  
        sbp.clicksecondBlockComparisonTableBuyNowEach()
      })
      
    })