/// <reference types="Cypress"/>

import BlockPageFirst from "../../PageClasses/BlockPageFirst";
import HomePage from "../../PageClasses/HomePage";


describe('Validate Landing Url and Functionality For First Page Block Level', () => {

    const hp = new HomePage()
    const bpf = new BlockPageFirst()



    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validate Landing Url Of TryItFree Link Under Did You Know Section For First Page Block Level', () =>
     {

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            hp.goToStaging(penvUrl.firstBlockPageUrl)
        })
        hp.clickOnRegionList()
        bpf.clickfirstBlockPageDidYouKnowTryItFree()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageBlueCtaBarTryItFreeUrl) // => true

        })
        hp.backTohomePage()
    })

    it('Validate Landing Url Of TryItFree Link Under Feature Grid Section For First Page Block Level', () => {

        bpf.clickfirstBlockPageFeatureGridTryItFree()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageBlueCtaBarTryItFreeUrl) // => true

        })
        hp.backTohomePage()
    })

    it('Validate Landing Url Of Invoicing Learn More Link Under Product Tour Section For First Page Block Level', () => {

        bpf.clickfirstBlockPageProductTourLearnMore()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageProductTourInvoicingLearnMoreUrl) // => true

        })

        hp.backTohomePage()
    })

    it('Validate Landing Url Of Expenses Learn More Link Under Product Tour Section For First Page Block Level', () => {

        bpf.clcikfirstBlockPageProductTourExpenseMenu()

        bpf.clickfirstBlockPageProductTourLearnMore()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageProductTourExpensesLearnMoreUrl) // => true

        })
        hp.backTohomePage()
    })
    it('Validate Landing Url Of Time Tracking Learn More Link Under Product Tour Section For First Page Block Level', () => {

        bpf.clickfirstBlockPageProductTourTimeTracking()

        bpf.clickfirstBlockPageProductTourLearnMore()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageProductTourTimeTrackingLearnMoreUrl) // => true

        })
        hp.backTohomePage()
    })
    it('Validate Landing Url Of Projects Learn More Link Under Product Tour Section For First Page Block Level', () => {

        bpf.clcikfirstBlockPageProductTourProjects()

        bpf.clickfirstBlockPageProductTourLearnMore()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageProductTourProjectsLearnMoreUrl) // => true

        })
        hp.backTohomePage()
    })
    it('Validate Landing Url Of Payments Learn More Link Under Product Tour Section For First Page Block Level', () => {

        bpf.clcikfirstBlockPageProductTourPayments()
        bpf.clickfirstBlockPageProductTourLearnMore()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageProductTourPaymentsLearnMoreUrl) // => true

        })
        hp.backTohomePage()
    })
    it('Validate Landing Url Of Reporting Learn More Link Under Product Tour Section For First Page Block Level', () => {

        bpf.clickfirstBlockPageProductTourReporting()

        bpf.clickfirstBlockPageProductTourLearnMore()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageProductTourReportingLearnMoreUrl) // => true

        })
        hp.backTohomePage()
    })
    it('Validate Landing Url Of Mobile Learn More Link Under Product Tour Section For First Page Block Level', () => {

        bpf.clickfirstBlockPageProductTourMobile()

        bpf.clickfirstBlockPageProductTourLearnMore()


        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageProductTourMobileLearnMoreUrl) // => true

        })
        hp.backTohomePage()
    })
    it('Validate Landing Url Of Accounting Learn More Link Under Product Tour Section For First Page Block Level', () => {

        bpf.clcikfirstBlockPageProductTourAccounting()

        bpf.clickfirstBlockPageProductTourLearnMore()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageProductTourAccountingLearnMoreUrl) // => true

        })
        hp.backTohomePage()
    })

    it('Validate Landing Url Of Try It Free Link Under Confirmation Box Section For First Page Block Level', () => {
        hp.backTohomePage()
        bpf.clickfirstBlockPageConfirmationBoxTryItFree()


        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageBlueCtaBarTryItFreeUrl) // => true

        })
        hp.backTohomePage()
    })

    it('Validate Landing Url Of Education Link Under One Column Section For First Page Block Level', () => {
        hp.backTohomePage()
        bpf.clickfirstBlockPageOneColumnEducation()


        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageProductTouroneColumnEducationUrl) // => true

        })
        hp.backTohomePage()
    })



})