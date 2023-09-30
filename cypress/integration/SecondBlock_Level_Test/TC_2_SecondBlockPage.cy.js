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
      
      it('Validate the Landing Url of Invoicing Link under Subnav-Product For Second Page Block Level',()=>
      {

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.secondBlockPageUrl)
                hp.clickOnRegionList()
            })
          sbp.clciksecondBlockSabnavProductInvoicingLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavProductInvoicingLinkUrl) // => true
  
          })
          hp.backTohomePage()
      })
      it('Validate the Landing Url of Expenses Link under Subnav-Product For Second Page Block Level',()=>
      {
          sbp.clicksecondBlockSabnavproductExpensesLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavproductExpensesLinkUrl) // => true
  
          })
          hp.backTohomePage()
      })
      it('Validate the Landing Url of Time-Tracking Link under Subnav-Product For Second Page Block Level',()=>
      {
          sbp.clicksecondBlockSabnavproductTimeTrackingLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavproductTimeTrackingLinkUrl) // => true
  
          })
          hp.backTohomePage()
          cy.wait(4000)
      })
      it('Validate the Landing Url of Projects Link under Subnav-Product For Second Page Block Level',()=>
      {
          sbp.clciksecondBlockSabnavproductProjectsLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavproductProjectsLinkUrl) // => true
  
          })
          hp.backTohomePage()
      })
      it('Validate the Landing Url of Estimates Link under Subnav-Product For Second Page Block Level',()=>
      {
          sbp.clicksecondBlockSabnavproductEstimatesLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavproductEstimatesLinkUrl) // => true
  
          })
          hp.backTohomePage()
      })
      it('Validate the Landing Url of Payments Link under Subnav-Product For Second Page Block Level',()=>
      {
          sbp.clicksecondBlockSabnavproductPaymentsLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavproductPaymentsLinkUrl) // => true
  
          })
          hp.backTohomePage()
      })
      it('Validate the Landing Url of Accounting Link under Subnav-Product For Second Page Block Level',()=>
      {
          sbp.clicksecondBlockSabnavproductAccountingLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavproductAccountingLinkUrl) // => true
  
          })
          hp.backTohomePage()
      })
      it('Validate the Landing Url of Reports Link under Subnav-Product For Second Page Block Level',()=>
      {
          sbp.clicksecondBlockSabnavproductReportsLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavproductReportsLinkUrl) // => true
  
          })
          hp.backTohomePage()
      })
      it('Validate the Landing Url of Mobile Link under Subnav-Product For Second Page Block Level',()=>
      {
          sbp.clicksecondBlockSabnavproductMobileLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavproductMobileLinkUrl) // => true
  
          })
          hp.backTohomePage()
      })
      it('Validate the Landing Url of Clients Link under Subnav-Product For Second Page Block Level',()=>
      {
          sbp.clicksecondBlockSabnavproductClientsLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavproductClientsLinkUrl) // => true
  
          })
          hp.backTohomePage()
      })
      it('Validate the Landing Url of Mileage Tracking Link under Subnav-Product For Second Page Block Level',()=>
      {
          sbp.clicksecondBlockSabnavproductMileageLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavproductMileageLinkUrl) // => true
  
          })
          hp.backTohomePage()
      })
      it('Validate the Landing Url of Proposals Link under Subnav-Product For Second Page Block Level',()=>
      {
          sbp.clicksecondBlockSabnavproductProposalsLink()
          cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
              cy.url().should('eq', penvUrl.secondBlockSabnavproductProposalsLinkUrl) // => true
  
          })
          hp.backTohomePage()
      })
  
      

})