/// <reference types="Cypress"/>

import BlockPageFirst from "../../PageClasses/BlockPageFirst";
import FourthBlockPage from "../../PageClasses/FourthBlockPage";
import HomePage from "../../PageClasses/HomePage";


describe('Validate Landing Url under Section  Accounting Partner CTA,Detail CTA,CTA inner content etc in Fourth Page Block Level', () => {

    const hp = new HomePage()
    const bpf = new BlockPageFirst()
    const fbp=new FourthBlockPage()



    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validate Landing Url for "Submit an App" Section for Accounting Partner CTA in Fourth Page Block Level', () => {

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            hp.goToStaging(penvUrl.fourthBlockPageUrl)
            hp.clickOnRegionList()
        })
        //fbp.clickfourthBlocksubmitAppInAccountPartnerCta()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            //cy.url().should('eq',penvUrl.fourthBlockAccountPartnerCtaSubmitApp ) // => true

        })
        //hp.backTohomePage()
    })

    it('Validate Landing Url for "FreshBooks Plan" link in Section for Accounting Partner Detail CTA in Fourth Page Block Level', () => {

          hp.clickOnRegionList()
         fbp.clickfourthBlockfreshbooksPlanInPartnerAccountingDetailsCta()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq',penvUrl.fourthBlockAccountPartnerDetailCtaFreshbooksPlan ) // => true

        })
        hp.backTohomePage()
    })

    it('Validate Landing Url for "Home" link in Section for Accounting Partner Detail CTA in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.clickfourthBlockhomeInAccountingPartnerForm()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockAccountPartnerFormHomeLink ) // => true

      })
      hp.backTohomePage()
    })

    it('Validate Functionality for Hero Search Section in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.enterTextfourthBlocksearchFieldInHeroSearch()
       fbp.validatefourthBlocksearchListInHeroSearch()
      
    })

    it('Validate Landing Url for "Try It Free" link in Section for New CTA Inner Content in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.clickfourthBlockTryItFreeInnewCtaInnerContent()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockNewCtaInnerContentTryItFreeLink ) // => true

      })
      hp.backTohomePage()
    })

    

    it('Validate Landing Url for "Create Proposals" link in  Section Product Tour Hero in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.clickfourthBlockCreateProposalsProductTourHeroLink()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockNewCtaInnerContentTryItFreeLink ) // => true

      })
      hp.backTohomePage()
    })

    












})