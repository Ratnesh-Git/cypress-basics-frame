/// <reference types="Cypress"/>

import BlockPageFirst from "../../PageClasses/BlockPageFirst";
import FourthBlockPage from "../../PageClasses/FourthBlockPage";
import HomePage from "../../PageClasses/HomePage";


describe('Validate Functioanlity of ROI calculator and HMRC,here link Section for Two Column VAT Description in Fourth Page Block Level', () => {

    const hp = new HomePage()
    const bpf = new BlockPageFirst()
    const fbp=new FourthBlockPage()



    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validate Functionality of ROI calculator and Report in Fourth Page Block Level', () => {

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            hp.goToStaging(penvUrl.fourthBlockPageUrl)
            hp.clickOnRegionList()
        })
        
       fbp.selectfourthBlockroiCalculatorSoftwareField()
       fbp.selectfourthBlockroicalculatorIndustryField()
       fbp.enterfourthBlockroiCalculatorClientsFacingTeam()
       fbp.enterfourthBlockroiCalculatorHourlyRate()
       fbp.enterfourthBlockroiCalculatorNumberOfClients()
       fbp.enterfourthBlockroiCalculatorTransactionalValue()
       cy.wait(4000)
       fbp.validatefourthBlockroiCalculatorGivesYearlyROI()
       fbp.validatefourthBlockroiCalculatorGiveFasterPayment()
       fbp.validatefourthBlockroiCalculatorGivesDollarsPerMonth()
       fbp.enterfourthBlockfirstNameForRoiReport()
       fbp.enterfourthBlockLastNameForRoiReport()
       fbp.enterfourthBlockEmailAddressForRoiReport()
       fbp.enterfourthBlockPhoneNumberForRoiReport()
       fbp.selectfourthBlocksendMeCheckForRoiReport()
       fbp.clickfourthBlockgetRoiReport()
       fbp.clickfourthBlockroiCalculatorResetButton()

    })

    it('Validate Landing Url for "Try It Free" link in Section for Two Column CTA in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.clickfourthBlocktwoColumnsCtaTryItFree()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockNewCtaInnerContentTryItFreeLink ) // => true

      })
      hp.backTohomePage()
    })

    it('Validate Landing Url for "HMRC" link in Section for Two Column VAT Description in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.clickfourthBlockhmrcLinkTwoColumnsVatDescription()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockVatDescriptionHMRCLink ) // => true

      })
      hp.backTohomePage()
    })

    it('Validate Landing Url for "here" link in Section for Two Column VAT Description in Fourth Page Block Level', () => {

        hp.clickOnRegionList()
       fbp.clickfourthBlockhereLinkTwoColumnsVatDescription()
      cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
          cy.url().should('eq',penvUrl.fourthBlockVatDescriptionHereLink ) // => true

      })
      hp.backTohomePage()
    })

})