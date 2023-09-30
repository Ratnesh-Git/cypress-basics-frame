/// <reference types="Cypress"/>

import BlockPageFirst from "../../PageClasses/BlockPageFirst";
import FourthBlockPage from "../../PageClasses/FourthBlockPage";
import HomePage from "../../PageClasses/HomePage";


describe('Validate Landing Url for All link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

    const hp = new HomePage()
    const bpf = new BlockPageFirst()
    const fbp=new FourthBlockPage()



    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validate Landing Url for "Accounting" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            hp.goToStaging(penvUrl.fourthBlockPageUrl)
            hp.clickOnRegionList()
        })
        
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clickfourthBlockproposalsProductTourHeroAccounting()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuAccounting ) // => true

      })
      hp.backTohomePage()
    })

    it('Validate Landing Url for "Clients" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clickfourthBlockproposalsProductTourHeroClients()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuClients ) // => true

      })
      hp.backTohomePage()
    })

    it('Validate Landing Url for "Estimates" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clickfourthBlockproposalsProductTourHeroEstimates()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuEstimates ) // => true

      })
      hp.backTohomePage()
    })

    it('Validate Landing Url for "Expenses" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clcikfourthBlockproposalsProductTourHeroExpenses()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuExpenses ) // => true

      })
      hp.backTohomePage()
    })
    it('Validate Landing Url for "Invoicing" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clickfourthBlockproposalsProductTourHeroInvoicing()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuInvoicing ) // => true

      })
      hp.backTohomePage()
    })
    it('Validate Landing Url for "Mileage Tracking" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clickfourthBlockproposalsProductTourHeroMileage()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuMileageTracking ) // => true

      })
      hp.backTohomePage()
    })
    it('Validate Landing Url for "Mobile" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clickfourthBlockproposalsProductTourHeroMobile()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuMobile ) // => true

      })
      hp.backTohomePage()
    })
    it('Validate Landing Url for "Payments" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clickfourthBlockproposalsProductTourHeroPayments()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuPayments ) // => true

      })
      hp.backTohomePage()
    })
    it('Validate Landing Url for "Projects" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clickfourthBlockproposalsProductTourHeroProjects()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuProjects ) // => true

      })
      hp.backTohomePage()
    })
    it('Validate Landing Url for "Proposals" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clickfourthBlockproposalsProductTourHeroProposals()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuProposals ) // => true

      })
      hp.backTohomePage()
    })
    it('Validate Landing Url for "Reporting" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clickfourthBlockproposalsProductTourHeroReporting()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuReporting ) // => true

      })
      hp.backTohomePage()
    })
    it('Validate Landing Url for "Time Tracking" link in Proposals for Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.hoverfourthBlockproposalsProductTourHeroHover()
       fbp.clickfourthBlockproposalsProductTourHeroTimeTracking()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockProposalsSubmenuTimeTracking ) // => true

      })
      hp.backTohomePage()
    })

})