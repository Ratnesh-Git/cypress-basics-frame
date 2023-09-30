/// <reference types="Cypress"/>

class FourthBlockPage{
    constructor()
        {
            this.fourthBlocksubmitAppInAccountPartnerCta=".accounting-partners-cta__content>a"
            this.fourthBlockfreshbooksPlanInPartnerAccountingDetailsCta=".accounting-partners-detail-cta__top>a"
            this.fourthBlockhomeInAccountingPartnerForm=".accounting-partners-form__breadcrumbs>div>a"
            this.fourthBlocksearchFieldInHeroSearch=".st-default-search-input.form-control.hero-search__input"
            this.fourthBlocksearchListInHeroSearch=".st-default-autocomplete>div>.st-query-present>a"
            this.fourthBlockTryItFreeInnewCtaInnerContent="#new-cta-inner-content-block_en-us_62b4e9c4e6864>a"
            this.fourthBlockproposalsProductTourHeroHover='.product-tour-hero__dropdown-label'

            this.fourthBlockproposalsProductTourHeroAccounting=".product-tour-hero__dropdown-list>li:nth-of-type(1)>a"
            this.fourthBlockproposalsProductTourHeroClients=".product-tour-hero__dropdown-list>li:nth-of-type(2)>a"
            this.fourthBlockproposalsProductTourHeroEstimates=".product-tour-hero__dropdown-list>li:nth-of-type(3)>a"
            this.fourthBlockproposalsProductTourHeroExpenses=".product-tour-hero__dropdown-list>li:nth-of-type(4)>a"
            this.fourthBlockproposalsProductTourHeroInvoicing=".product-tour-hero__dropdown-list>li:nth-of-type(5)>a"
            this.fourthBlockproposalsProductTourHeroMileage=".product-tour-hero__dropdown-list>li:nth-of-type(6)>a"
            this.fourthBlockproposalsProductTourHeroMobile=".product-tour-hero__dropdown-list>li:nth-of-type(7)>a"
            this.fourthBlockproposalsProductTourHeroPayments=".product-tour-hero__dropdown-list>li:nth-of-type(8)>a"
            this.fourthBlockproposalsProductTourHeroProjects=".product-tour-hero__dropdown-list>li:nth-of-type(9)>a"
            this.fourthBlockproposalsProductTourHeroProposals=".product-tour-hero__dropdown-list>li:nth-of-type(10)>a"
            this.fourthBlockproposalsProductTourHeroReporting=".product-tour-hero__dropdown-list>li:nth-of-type(11)>a"
            this.fourthBlockproposalsProductTourHeroTimeTracking=".product-tour-hero__dropdown-list>li:nth-of-type(12)>a"

            this.fourthBlockCreateProposalsProductTourHeroLink=".btn.btn-cta-green.product-tour-hero__cta-button"
            this.fourthBlockroiCalculatorSoftwareField="#software"
            this.fourthBlockroicalculatorIndustryField="#industry"
            this.fourthBlockroiCalculatorClientsFacingTeam="#staff_count"
            this.fourthBlockroiCalculatorHourlyRate="#cost_hour"
            this.fourthBlockroiCalculatorNumberOfClients="#client_count"
            this.fourthBlockroiCalculatorTransactionalValue="#average_revenue"
            this.fourthBlockroiCalculatorResetButton="#roi-calculator-reset"
            this.fourthBlockroiCalculatorGivesYearlyROI="#yearly-roi"
            this.fourthBlockroiCalculatorGivesHoursMonths="#hours-month>span"
            this.fourthBlockroiCalculatorGiveFasterPayment="#faster-payments"
            this.fourthBlockroiCalculatorGivesDollarsPerMonth="#dollars-month"
            this.fourthBlockfirstNameForRoiReport="#first_name"
            this.fourthBlockLastNameForRoiReport="#last_name"
            this.fourthBlockPhoneNumberForRoiReport="#phone_number"
            this.fourthBlockEmailAddressForRoiReport="#email"
            this.fourthBlocksendMeCheckForRoiReport="#consent"
            this.fourthBlockgetRoiReport="#generate-report-btn"
            this.fourthBlocktwoColumnsCtaTryItFree=".two-columns-cta__cta>a"
            this.fourthBlockhmrcLinkTwoColumnsVatDescription=".two-columns-vat-description__description_1>p>a:nth-of-type(1)"
            this.fourthBlockhereLinkTwoColumnsVatDescription=".two-columns-vat-description__description_1>p>a:nth-of-type(2)"
            this.fourthBlockvatCalculatorDownloadVatGuide=".vat-calculator__content.text-center>a"
            this.fourthBlockvatCalculatorToolshover=".vat-calculator__tools-arrow"
            this.fourthBlockvatCalculatorToolsRoiLink=".vat-calculator__tools-container>div>div>a:nth-of-type(2)"
            this.fourthBlockvatCalculatorToolsMarkupLink=".vat-calculator__tools-container>div>div>a:nth-of-type(3)"
            this.fourthBlockvatCalculatorToolsBusinessLink=".vat-calculator__tools-container>div>div>a:nth-of-type(4)"
            this.fourthBlockvatCalculatorClickAddVat="(//a[@id='vat-calculator__add-tab'])[2]"
            this.fourthBlockvatCalculatorClickRemoveVat="(//a[@id='vat-calculator__remove-tab'])[2]"

        }
        clickfourthBlocksubmitAppInAccountPartnerCta(){

            cy.get(this.fourthBlocksubmitAppInAccountPartnerCta).scrollIntoView().should('be.visible')
             cy.get(this.fourthBlocksubmitAppInAccountPartnerCta).invoke('removeAttr', 'target').click()
        }

        clickfourthBlockfreshbooksPlanInPartnerAccountingDetailsCta()
        {
            cy.get(this.fourthBlockfreshbooksPlanInPartnerAccountingDetailsCta).scrollIntoView().should('be.visible')
             cy.get(this.fourthBlockfreshbooksPlanInPartnerAccountingDetailsCta).click()
        }

        clickfourthBlockhomeInAccountingPartnerForm()
        {
            cy.get(this.fourthBlockhomeInAccountingPartnerForm).scrollIntoView().should('be.visible')
             cy.get(this.fourthBlockhomeInAccountingPartnerForm).click()
        }

        enterTextfourthBlocksearchFieldInHeroSearch()
        {
            cy.get(this.fourthBlocksearchFieldInHeroSearch).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlocksearchFieldInHeroSearch).click()
            cy.wait(2000)
             cy.get(this.fourthBlocksearchFieldInHeroSearch).type('Fresh')
             
        }

        validatefourthBlocksearchListInHeroSearch()
        {
             cy.get(this.fourthBlocksearchListInHeroSearch).its('length').should('be.gt',0)
        }

        clickfourthBlockTryItFreeInnewCtaInnerContent()
        {
            cy.get(this.fourthBlockTryItFreeInnewCtaInnerContent).scrollIntoView().should('be.visible')
             cy.get(this.fourthBlockTryItFreeInnewCtaInnerContent).click()
        }

        hoverfourthBlockproposalsProductTourHeroHover()
        {
            //
            cy.get('#product-tour-hero-block_en-us_62b4eb6de6866>div>div>span').scrollIntoView().should('be.visible')
            cy.get('#product-tour-hero-block_en-us_62b4eb6de6866>div>div>span').trigger('mouseover').click()
            //.....
            // cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            // cy.get(this.headerFeaturesMenu).trigger('mouseover')
            // cy.get(this.headerFeaturesSubMenu).invoke('show')
            // cy.get(this.headerFeaturesSubMenuAcconting).should('be.visible')
            // cy.get(this.headerFeaturesSubMenuAcconting).click()
        }

        clickfourthBlockproposalsProductTourHeroAccounting()
        {
            //cy.wait(4000)
            //cy.get(this.fourthBlockproposalsProductTourHeroAccounting).should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroAccounting).click({force:true})

            
        }

        clickfourthBlockproposalsProductTourHeroClients()
        {
            //cy.get(this.fourthBlockproposalsProductTourHeroClients).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroClients).click({force:true})
        }

        clickfourthBlockproposalsProductTourHeroEstimates()
        {
            //cy.get(this.fourthBlockproposalsProductTourHeroEstimates).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroEstimates).click({force:true})
        }
        clcikfourthBlockproposalsProductTourHeroExpenses()
        {
            //cy.get(this.fourthBlockproposalsProductTourHeroExpenses).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroExpenses).click({force:true})
        }

        clickfourthBlockproposalsProductTourHeroInvoicing()
        {
            //cy.get(this.fourthBlockproposalsProductTourHeroInvoicing).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroInvoicing).click({force:true})
        }

        clickfourthBlockproposalsProductTourHeroMileage()
        {
            //cy.get(this.fourthBlockproposalsProductTourHeroMileage).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroMileage).click({force:true})
        }

        clickfourthBlockproposalsProductTourHeroMobile()
        {
            //cy.get(this.fourthBlockproposalsProductTourHeroMobile).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroMobile).click({force:true})
        }

        clickfourthBlockproposalsProductTourHeroPayments()
        {
            //cy.get(this.fourthBlockproposalsProductTourHeroPayments).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroPayments).click({force:true})
        }

        clickfourthBlockproposalsProductTourHeroProjects()
        {
            //cy.get(this.fourthBlockproposalsProductTourHeroProjects).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroProjects).click({force:true})
        }
        clickfourthBlockproposalsProductTourHeroProposals()
        {
            //cy.get(this.fourthBlockproposalsProductTourHeroProposals).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroProposals).click({force:true})
        }

        clickfourthBlockproposalsProductTourHeroReporting()
        {
            //cy.get(this.fourthBlockproposalsProductTourHeroReporting).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroReporting).click({force:true})
        }

        clickfourthBlockproposalsProductTourHeroTimeTracking()
        {
            //cy.get(this.fourthBlockproposalsProductTourHeroTimeTracking).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockproposalsProductTourHeroTimeTracking).click({force:true})
        }

        clickfourthBlockCreateProposalsProductTourHeroLink()
        {
            cy.get(this.fourthBlockCreateProposalsProductTourHeroLink).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockCreateProposalsProductTourHeroLink).click()
        }

        selectfourthBlockroiCalculatorSoftwareField()
        {
            cy.get('.roi-calculator__left-column__input:nth-of-type(1)').scrollIntoView().should('be.visible')
            cy.get('.roi-calculator__left-column__input:nth-of-type(1)').click({force:true})
            cy.get('.roi-calculator__left-column__inputs>.roi-calculator__left-column__input:nth-of-type(1)').click()
            cy.get('.roi-calculator__left-column__inputs>.roi-calculator__left-column__input:nth-of-type(1)>div.roi-calculator__fancy-select__options>span:nth-of-type(2)').click({force:true})
        }

        selectfourthBlockroicalculatorIndustryField()
        {
            cy.get('.roi-calculator__left-column__input:nth-of-type(1)').scrollIntoView().should('be.visible')
            cy.get('.roi-calculator__left-column__input:nth-of-type(1)').click({force:true})
            cy.get('.roi-calculator__left-column__inputs>.roi-calculator__left-column__input:nth-of-type(2)').click()
            cy.get('.roi-calculator__left-column__inputs>.roi-calculator__left-column__input:nth-of-type(2)>div.roi-calculator__fancy-select__options>span:nth-of-type(2)').click({force:true})
        }

        enterfourthBlockroiCalculatorClientsFacingTeam()
        {
            cy.get(this.fourthBlockroiCalculatorClientsFacingTeam).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorClientsFacingTeam).type(4)
        }

        enterfourthBlockroiCalculatorHourlyRate()
        {
            cy.get(this.fourthBlockroiCalculatorHourlyRate).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorHourlyRate).type(50)
        }

        enterfourthBlockroiCalculatorNumberOfClients()
        {
            cy.get(this.fourthBlockroiCalculatorNumberOfClients).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorNumberOfClients).type(4)
        }

        enterfourthBlockroiCalculatorTransactionalValue()
        {
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).type(1000)
        }

        validatefourthBlockroiCalculatorGivesYearlyROI()
        {
            cy.get(this.fourthBlockroiCalculatorGivesYearlyROI).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorGivesYearlyROI).should('contain.text','%')
        }

        validatefourthBlockroiCalculatorGiveFasterPayment()
        {
            cy.get(this.fourthBlockroiCalculatorGiveFasterPayment).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorGiveFasterPayment).should('contain.text','x')
        }

        validatefourthBlockroiCalculatorGivesDollarsPerMonth()
        {
            cy.get(this.fourthBlockroiCalculatorGivesDollarsPerMonth).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorGivesDollarsPerMonth).should('contain.text','$')
        }


        enterfourthBlockfirstNameForRoiReport()
        {
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).type('Shailendra')
        }
        enterfourthBlockLastNameForRoiReport()
        {
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).type('Singh')
        }
        enterfourthBlockEmailAddressForRoiReport()
        {
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).type('shailendra.rathore@freshbooks.com')
        }
        enterfourthBlockPhoneNumberForRoiReport()
        {
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).type('1234567890')
        }
        selectfourthBlocksendMeCheckForRoiReport()
        {
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).click()
        }
        clickfourthBlockgetRoiReport()
        {
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorTransactionalValue).click()
        }

        clickfourthBlockroiCalculatorResetButton()
        {
            cy.get(this.fourthBlockroiCalculatorResetButton).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockroiCalculatorResetButton).click()
        }

        clickfourthBlocktwoColumnsCtaTryItFree()
        {
            cy.get(this.fourthBlocktwoColumnsCtaTryItFree).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlocktwoColumnsCtaTryItFree).click()
        }

        clickfourthBlockhmrcLinkTwoColumnsVatDescription()
        {
            cy.get(this.fourthBlockhmrcLinkTwoColumnsVatDescription).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockhmrcLinkTwoColumnsVatDescription).invoke('removeAttr', 'target').click()
        }

        clickfourthBlockhereLinkTwoColumnsVatDescription()
        {
            cy.get(this.fourthBlockhereLinkTwoColumnsVatDescription).scrollIntoView().should('be.visible')
            cy.get(this.fourthBlockhereLinkTwoColumnsVatDescription).click()
        }






































    }

    export default FourthBlockPage
