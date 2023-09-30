/// <reference types="Cypress"/>

class SecondBlockPage{
    constructor(){
        this.secondBlockFirstCarousalRadio=".gallery-carousel__pagination > :nth-child(1)"
        this.secondBlockSecondCarousalRadio=".swiper-pagination-bullet-active"
        this.secondBlockArticleCardReadMore=".article-card__cta > .btn"
        this.secondBlockBusinessCalculatorLoanAmount="#fbtoolsBlcLoanAmount"
        this.secondBlockBusinessCalculatorInterest="#fbtoolsBlcLoanRate"
        this.secondBlockBusinessCalculatorLoanCalculateButton=".business-loan-calculator--form-container > [type='submit']"
        this.secondBlockBusinessCalculatorResult="#fbtoolsBlcResultTotalCost"
        this.secondBlockBusinessCalculatorRefreshButton="#fbtoolsBlcRefresh"
        this.secondBlockFeatureRowPaymentButton="#card-0-tab"
        this.secondBlockFeatureRowPaymentContentImage="#card-0>p:nth-of-type(1)>img"
        this.secondBlockFeatureRowStripeContentImg="#card-1>p:nth-of-type(1)>img"
        this.secondBlockFeatureRowStripeButton="#card-1-tab"
        this.secondBlockFileDownloadExcelLink="div.fp-block.file-download>a:nth-of-type(1)"
        this.secondBlockFileDownloadWordLink="div.fp-block.file-download>a:nth-of-type(2)"
        this.secondBlockFileDownloadPdfLink="div.fp-block.file-download>a:nth-of-type(3)"
        this.secondBlockCareersDepartmentLink="#departments"
        this.secondBlockCareersLocationLink="#locations"
        this.secondBlockCareerstList=".freshbooks-careers__list"
        this.secondBlockInfoTooltip=".ID > .info-tooltip__button > .info-tooltip__icon"
        this.secondBlockInfoTooltipText=".tooltip-inner"
        this.secondBlockMarkupCalculatorCost="#fbtoolsMcCost"
        this.secondBlockMarkupCalculatorMarkup="#fbtoolsMcMarkup"
        this.secondBlockMarkupCalculatorMargin="#fbtoolsMcMarkup"
        this.secondBlockMarkupCalculatorRevenue="#fbtoolsMcRevenue"
        this.secondBlockMarkupCalculatorProfit="#fbtoolsMcProfit"
        this.secondBlockMarkupCalulatorRefresh="#fbtoolsMcRefresh"
        this.secondBlockStickyFooterTryItFree=".sticky-footer__cta"
        this.secondblockStickyFooterComparePrice=".sticky-footer__link.ml-2.ml-md-0"
        this.secondBlockSabnavAboutOverviewLink="#menu-item-1247 > .text-decoration-none > span"
        this.secondBlockSabnavAboutFreshbookStoryLink="#menu-item-2221 > .text-decoration-none > span"
        this.secondBlockSabnavAboutPhilosophyLink="#menu-item-2222 > .text-decoration-none > span"
        this.secondBlockSabnavAboutTeamLink="#menu-item-1249 > .text-decoration-none > span"
        this.secondBlockSabnavAboutCareersLink="#menu-item-1598 > .text-decoration-none > span"
        this.secondBlockSabnavAboutPressLink="#menu-item-1599 > .text-decoration-none > span"
        this.secondBlockSabnavProductInvoicingLink="#menu-item-191 > .text-decoration-none > span"
        this.secondBlockSabnavproductExpensesLink="#menu-item-192 > .text-decoration-none > span"
        this.secondBlockSabnavproductTimeTrackingLink="#menu-item-969 > .text-decoration-none > span"
        this.secondBlockSabnavproductProjectsLink="#menu-item-194 > .text-decoration-none > span"
        this.secondBlockSabnavproductEstimatesLink="#menu-item-709 > .text-decoration-none > span"
        this.secondBlockSabnavproductPaymentsLink="#menu-item-967 > .text-decoration-none > span"
        this.secondBlockSabnavproductAccountingLink="#menu-item-196 > .text-decoration-none > span"
        this.secondBlockSabnavproductReportsLink="#menu-item-822 > .text-decoration-none > span"
        this.secondBlockSabnavproductMobileLink="#menu-item-198 > .text-decoration-none > span"
        this.secondBlockSabnavproductClientsLink="#menu-item-109577 > .text-decoration-none > span"
        this.secondBlockSabnavproductMileageLink="#menu-item-109578 > .text-decoration-none > span"
        this.secondBlockSabnavproductProposalsLink="#menu-item-109579 > .text-decoration-none > span"
        this.secondBlockVatCatBarTryItFree=".fp-animate > .btn"

        this.secondBlockSignupEmail="#block_en-us_607fee1fbe57d__hero_signup_email"
        this.secondBlockSignupCreatePwd="#block_en-us_607fee1fbe57d__signup_password"
        this.secondBlockSignupGetStarted=".hero__signup-form-btn > .btn"
        this.secondBlockSignupConfirmCheckBox="#tos-accepted"
        this.secondBlockEmailSentTextInAuthPage=".unauthenticatedDialog-instructions-first"

        this.secondBlockPardotFormFirstName="input[placeholder='First Name*']"
        this.secondBlockPardotFormLastName="(//form[@id='pardot-form']/p/input)[2]"
        this.secondBlockPardotFormCompanyName=".form-field.company.pd-text.required>input"
        this.secondBlockPardotFormEmail=".form-field.email.pd-text.required>input.text>input"
        this.secondBlockPardotFormPhone=".form-field.phone.pd-text.required>input"
        this.secondBlockPardotFormCountry=".form-field.country.pd-select.required"
        this.secondBlockPardotFormAgreeCheckbox="//input[@type='checkbox'][@value=610819]"
        this.secondBlockPardotFormBecomePartner="//input[@type='submit'][@value='Become a Partner']"
        this.secondBlockPardotFormPrivacyPolicy="//span[text()='privacy policy']"

        this.secondBlockSearchSwiftype=".search-swiftype__input"
        this.secondBlockFlexibleTryItFree=".fp-block > .btn"
        this.secondBlockPriceTableSelectMonthyYearly=".pricing-table_term-switch__slider"
        this.secondBlockPriceTableCheckPerMonthDisplay=":nth-child(1) > .pricing-table_column-price > .pricing-table_column-price__value > .promo > .monthly > .pricing-table_column-price__term"
        this.secondBlockPriceTableCheckPerYearDisplay=":nth-child(1) > .pricing-table_column-price > .pricing-table_column-price__value > .promo > .yearly > .pricing-table_column-price__term"
        //List will use
        this.secondBlockPricingTableTryItFree="//div[@class='pricing-table_column-secondary-link promo']/a[text()='Try It Free']"//6
        this.secondBlockPricingTableLearnMore="//div[@class='pricing-table_column-secondary-link promo']/a[text()='Learn More']"//2
        this.secondBlockPricingTableRequestDemo="(//a[text()='Request a Demo'][@class='btn mb-2 px-1 promo btn-outline-grey'])"//2
        this.secondBlockPricingTableBuyNow=".btn.mb-2.promo.px-0.btn-outline-grey"//6

        this.secondBlockComparisonTableTryItFree="a.btn.btn-outline-grey.ml-1"
        this.secondBlockComparisonTableBuyNow="div.promo>a.comparison-table__header-row_cell-cta"//4

    }

    clicksecondBlockSecondCarousalRadio()
    {
        cy.get(this.secondBlockSecondCarousalRadio).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSecondCarousalRadio).click()
        cy.wait(2000)
    }

    clicksecondBlockFirstCarousalRadio()
    {
        cy.get(this.secondBlockFirstCarousalRadio).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockFirstCarousalRadio).click()
    }

    clicksecondBlockArticleCardReadMore()
    {
        cy.get(this.secondBlockArticleCardReadMore).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockArticleCardReadMore).click()
    }

    entersecondBlockBusinessCalculatorLoanAmount()
    {
        cy.get(this.secondBlockBusinessCalculatorLoanAmount).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockBusinessCalculatorLoanAmount).type('1000')
    }

    entersecondBlockBusinessCalculatorInterest()
    {
        //cy.get(this.secondBlockBusinessCalculatorInterest).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockBusinessCalculatorInterest).type('10')
    }

    clicksecondBlockBusinessLoanCalculateButton()
    {
        //cy.get(this.secondBlockBusinessCalculatorLoanCalculateButton).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockBusinessCalculatorLoanCalculateButton).click()
    }

    validatesecondBlockBusinessCalculatorResult()
    {
        cy.get(this.secondBlockBusinessCalculatorResult).scrollIntoView().should('be.visible')
    }

    clicksecondBlockBusinessCalculatorRefreshButton()
    {
        //cy.get(this.secondBlockBusinessCalculatorRefreshButton).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockBusinessCalculatorRefreshButton).click()
    }

    clicksecondBlockFeatureRowPaymentButton()
    {
        cy.get(this.secondBlockFeatureRowPaymentButton).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockFeatureRowPaymentButton).click()
    }

    validatesecondBlockFeatureRowPaymentContentImage()
    {
        cy.get(this.secondBlockFeatureRowPaymentContentImage).invoke('attr','alt').should('eq','FreshBooks Payments')
    }


    clicksecondBlockFeatureRowStripeButton()
    {
        cy.get(this.secondBlockFeatureRowStripeButton).click()
    }

    validatesecondBlockFeatureRowStripeContentImg()
    {
        cy.get(this.secondBlockFeatureRowStripeContentImg).invoke('attr','alt').should('eq','Stripe')
    }

    clicksecondBlockFileDownloadExcelLink()
    {
        cy.get(this.secondBlockFileDownloadExcelLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockFileDownloadExcelLink).click()
    }
    validatesecondBlockFileDownloadExcel()
    {
        cy.get(this.secondBlockFileDownloadExcelLink).invoke('attr','href').should('eq','https://www.freshbooks.com/wp-content/uploads/contractor-Excel-Invoice3-1-1.xlsx')
    }

    clicksecondBlockFileDownloadWordLink()
    {
        cy.get(this.secondBlockFileDownloadWordLink).click()
    }

    validatesecondBlockFileDownloadWord()
    {
        cy.get(this.secondBlockFileDownloadWordLink).invoke('attr','href').should('eq','https://www.freshbooks.com/wp-content/uploads/contractor-Word-Invoice3-2-1.docx')
    }

    clicksecondBlockFileDownloadPdfLink()
    {
        cy.get(this.secondBlockFileDownloadPdfLink).click()
    }

    validatesecondBlockFileDownloadPdf()
    {
        cy.get(this.secondBlockFileDownloadPdfLink).invoke('attr','href').should('eq','https://www.freshbooks.com/wp-content/uploads/work-PDF-Invoice1.pdf')
    }

    selectCareerDepartmentsFromDropdown()
    {
        cy.get(this.secondBlockCareersDepartmentLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockCareersDepartmentLink).select(1)
    }

    selectCareerLocationFromDropdown()
    {
        cy.get(this.secondBlockCareersLocationLink).select(4)
    }
    validateCareerDropdownSearchResult()
    {
        cy.get(this.secondBlockCareerstList).its('length').should('be.gt',0)
    }

    clicksecondBlockInfoTooltip()
    {
        cy.get(this.secondBlockInfoTooltip).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockInfoTooltip).trigger('mouseover')
        cy.wait(4000)
    }

    validatesecondBlockInfoTooltipText()
    {
        //Payroll offered through Gusto, with an integration to FreshBooks to make keeping track of payroll expenses easy.
        //cy.get(this.secondBlockInfoTooltipText).should('include','Payroll offered through Gusto')
        cy.get(this.secondBlockInfoTooltipText).should('be.visible')

    }

    entersecondBlockMarkupCalculatorCost()
    {
        cy.get(this.secondBlockMarkupCalculatorCost).type('100')
    }

    entersecondBlockMarkupCalculatorMarkup()
    {
        cy.get(this.secondBlockMarkupCalculatorMarkup).type('10')
    }

    validatesecondBlockMarkupCalculatorMarginText()
    {
        cy.get(this.secondBlockMarkupCalculatorMargin)
    }
    validatesecondBlockMarkupCalculatorRevenue()
    {
        cy.get(this.secondBlockMarkupCalculatorRevenue)
    }
    validatesecondBlockMarkupCalculatorProfit()
    {
        cy.get(this.secondBlockMarkupCalculatorProfit)
    }

    checkclicksecondBlockMarkupCalulatorRefresh()
    {
        cy.wait(4000)
        cy.get(this.secondBlockMarkupCalulatorRefresh).click()
    }

    clicksecondBlockStickyFooterTryItFree()
    {
        cy.get(this.secondBlockStickyFooterTryItFree).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockStickyFooterTryItFree).click()
    }

    clicksecondblockStickyFooterComparePrice()
    {
        cy.get(this.secondblockStickyFooterComparePrice).scrollIntoView().should('be.visible')
        cy.get(this.secondblockStickyFooterComparePrice).click()
    }
    clicksecondBlockSabnavAboutOverviewLink()
    {
        cy.get(this.secondBlockSabnavAboutOverviewLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavAboutOverviewLink).click()
    }
    //........................
    clicksecondBlockSabnavAboutFreshbookStoryLink()
    {
        cy.get(this.secondBlockSabnavAboutFreshbookStoryLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavAboutFreshbookStoryLink).click()
    }
    clicksecondBlockSabnavAboutPhilosophyLink()
    {
        cy.get(this.secondBlockSabnavAboutPhilosophyLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavAboutPhilosophyLink).click()
    }
    clicksecondBlockSabnavAboutTeamLink()
    {
        cy.get(this.secondBlockSabnavAboutTeamLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavAboutTeamLink).click()
    }
    clicksecondBlockSabnavAboutCareersLink()
    {
        cy.get(this.secondBlockSabnavAboutCareersLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavAboutCareersLink).click()
    }
    clicksecondBlockSabnavAboutPressLink()
    {
        cy.get(this.secondBlockSabnavAboutPressLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavAboutPressLink).click()
    }

    clciksecondBlockSabnavProductInvoicingLink()
    {
        cy.get(this.secondBlockSabnavProductInvoicingLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavProductInvoicingLink).click()
    }

    clicksecondBlockSabnavproductExpensesLink()
    {
        cy.get(this.secondBlockSabnavproductExpensesLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavproductExpensesLink).click()
    }
    clicksecondBlockSabnavproductTimeTrackingLink()
    {
        cy.get(this.secondBlockSabnavproductTimeTrackingLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavproductTimeTrackingLink).click()
    }
    clciksecondBlockSabnavproductProjectsLink()
    {
        cy.get(this.secondBlockSabnavproductProjectsLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavproductProjectsLink).click()
    }
    clicksecondBlockSabnavproductEstimatesLink()
    {
        cy.get(this.secondBlockSabnavproductEstimatesLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavproductEstimatesLink).click()
    }
    clicksecondBlockSabnavproductPaymentsLink()
    {
        cy.get(this.secondBlockSabnavproductPaymentsLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavproductPaymentsLink).click()
    }
    clicksecondBlockSabnavproductAccountingLink()
    {
        cy.get(this.secondBlockSabnavproductAccountingLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavproductAccountingLink).click()
    }
    clicksecondBlockSabnavproductReportsLink()
    {
        cy.get(this.secondBlockSabnavproductReportsLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavproductReportsLink).click()
    }
    clicksecondBlockSabnavproductMobileLink()
    {
        cy.get(this.secondBlockSabnavproductMobileLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavproductMobileLink).click()
    }
    clicksecondBlockSabnavproductClientsLink()
    {
        cy.get(this.secondBlockSabnavproductClientsLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavproductClientsLink).click()
    }
    clicksecondBlockSabnavproductMileageLink()
    {
        cy.get(this.secondBlockSabnavproductMileageLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavproductMileageLink).click()
    }
    clicksecondBlockSabnavproductProposalsLink()
    {
        cy.get(this.secondBlockSabnavproductProposalsLink).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockSabnavproductProposalsLink).click()
    }

    clicksecondBlockVatCatBarTryItFree()
    {
        cy.get(this.secondBlockVatCatBarTryItFree).scrollIntoView().should('be.visible')
        cy.get(this.secondBlockVatCatBarTryItFree).click()
    }

    entersecondBlockSignupEmail()
    {
        cy.get(this.secondBlockSignupEmail).scrollIntoView().should('be.visible')
        var add=((Math.floor(Math.random()*1000)+9999)).toString()
        cy.get(this.secondBlockSignupEmail).type('shailendra.rathore'+'+'+add+'@freshbooks.com')
    }

    entersecondBlockSignupCreatePwd()
    {
        var num = ((Math.floor(Math.random() * 10000000)) + 99999999).toString()
        cy.get(this.secondBlockSignupCreatePwd).type(num)
    }

    selectsecondBlockSignupConfirmCheckBox()
    {
        cy.get(this.secondBlockSignupConfirmCheckBox).click()
    }

    clicksecondBlockSignupGetStarted()
    {
        cy.get(this.secondBlockSignupGetStarted).click()
    }
    validatesecondBlockEmailSentTextInAuthPage()
    {
        cy.get(this.secondBlockEmailSentTextInAuthPage).should('be.visible')
        cy.wait(2000);
        cy.get(this.secondBlockEmailSentTextInAuthPage).contains('email has been sent to')
    }


        entersecondBlockPardotFormFirstName()
        {

            
            // cy.get('.pardot-form__iframe.d-block.mx-auto[src="https://www2.freshbooks.com/l/490351/2021-03-31/2bz4t6n"]')
            // .its('0.contentDocument.body').find('input[placeholder="First Name*"]').type('Ram Ji')

            cy.get('iframe').then(($iframe)=>
            {
                const $iframeTwoBody= $iframe.contents().find('#pardot-form').contents()
             //const $IframeContent=$iFrame.contents().find('input[placeholder="First Name*"]')
             cy.wrap($iframeTwoBody).find('input[placeholder="First Name*"]')
             .click({force: true})
             .type('Shailendra', { force: true })
             
    })
//     //.should("not.be.empty")
//     .then((body) => {
//       cy.wrap(FormData)
//         .get('#490351_129533pi_490351_129533')
//         .type("6011111111111117", { force: true });
//    });


            //cy.get('form').within({},$form=>{
                //cy.get('#pardot-form>p>input[placeholder="First Name*"]').type('Shaliendra')
            //     cy.xpath('//form[@id="pardot-form"]/p/input[@placeholder="First Name*"]').type('shailendrS')
            // })
                
                //cy.get('#pardot-form')
                // .should(iframe => expect(iframe.contents().find('body').to.exist))
                // .then(iframe => cy.wrap(iframe.contents().find('body')))
                // .within({}, $iframe => {
                //cy.get(this.secondBlockPardotFormFirstName).type('')
  //})
            //cy.get(this.secondBlockPardotFormFirstName).scrollIntoView().should('be.visible')
            //cy.get(this.secondBlockPardotFormFirstName).type('Shaliendra')
}
        entersecondBlockPardotFormLastName()
        {
            //cy.get(this.secondBlockPardotFormLastName).scrollIntoView().should('be.visible')
            cy.xpath(this.secondBlockPardotFormLastName).type('Singh')
        }
        entersecondBlockPardotFormCompanyName()
        {
            cy.get(this.secondBlockPardotFormCompanyName).type('Freshbooks')
        }
        entersecondBlockPardotFormEmail()
        {
            cy.get(this.secondBlockPardotFormEmail).type('Shailendra.rathore@freshbooks.com')
        }
        entersecondBlockPardotFormPhone()
        {
            cy.get(this.secondBlockPardotFormPhone).type('9876543219')
        }
        clickAndSelectsecondBlockPardotFormCountry()
        {
            cy.get(this.secondBlockPardotFormCountry).click()
            cy.wait(2000)
            cy.get(this.secondBlockPardotSelectCountry).click()
        }

        clicksecondBlockPardotFormAgreeCheckbox()
        {
            cy.xpath(this.secondBlockPardotFormAgreeCheckbox).click()
        }
        clicksecondBlockPardotFormBecomePartner()
        {
            cy.xpath(this.secondBlockPardotFormBecomePartner).click()
        }

        clicksecondBlockFlexibleTryItFree()
        {
            cy.get(this.secondBlockFlexibleTryItFree).scrollIntoView().should('be.visible')
            cy.get(this.secondBlockFlexibleTryItFree).click()

        }

        validatePricingTableDefaultPerMonth()
        {
            cy.get(this.secondBlockPriceTableCheckPerMonthDisplay).should('have.text','\n\t\t\t\t\t\t\t\t\t\t\t\t/mo\n\t\t\t\t\t\t\t\t\t\t\t')
        }

        validatePricingTableChangeWhenClickPerYear()
        {
            cy.get(this.secondBlockPriceTableSelectMonthyYearly).click()
            cy.get(this.secondBlockPriceTableCheckPerYearDisplay).should('have.text','\n\t\t\t\t\t\t\t\t\t\t\t\t/yr\n\t\t\t\t\t\t\t\t\t\t\t')
        }

        clickEachsecondBlockPricingTableTryItFree()
        {
            ////div[@class='pricing-table_column-secondary-link promo']/a[text()='Try It Free']
            for (let i = 1; i <= 6; i += 1) {    // nth-child is 1-based not 0-based
                cy.xpath('(//div[@class="pricing-table_column-secondary-link promo"]/a)['+i+']').scrollIntoView().should('be.visible')
                cy.xpath('(//div[@class="pricing-table_column-secondary-link promo"]/a)['+i+']') .click()
                cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
                    cy.url().should('eq', penvUrl.firstBlockPageBlueCtaBarTryItFreeUrl) // => true
                })
                cy.go('back')
                
              }
        }

        clickSecondBlockPricingTableFirstThreeBuyNow()
        {
            for (let i = 1; i <= 3; i += 1) {    // nth-child is 1-based not 0-based
                cy.xpath('(//a[@class="btn mb-2 px-1 promo btn-outline-grey"])['+i+']').scrollIntoView().should('be.visible')
                cy.xpath('(//a[@class="btn mb-2 px-1 promo btn-outline-grey"])['+i+']').click()
                cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
                    cy.url().should('include', penvUrl.secondBlockPricingTableBuyNowUrl) // => true
                })
                cy.go('back')
                
              }
        }

        clickSecondBlockPricingTableLastThreeBuyNow()
        {
            for (let i = 4; i <= 6; i += 1) {    // nth-child is 1-based not 0-based
                cy.xpath('(//a[@class="btn mb-2 px-1 promo btn-outline-grey"])['+i+']').scrollIntoView().should('be.visible')
                cy.xpath('(//a[@class="btn mb-2 px-1 promo btn-outline-grey"])['+i+']').click()
                cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
                    cy.url().should('include', penvUrl.secondBlockPricingTableBuyNowUrl) // => true
                })
                cy.go('back')
                
              }
        }


        clicksecondBlockComparisonTableTryItFree()
        {
            cy.get(this.secondBlockComparisonTableTryItFree).scrollIntoView().should('be.visible')
            cy.get(this.secondBlockComparisonTableTryItFree).click()
        }

        clicksecondBlockComparisonTableBuyNowEach()
        {
            for (let i = 1; i <= 3; i += 1) {    // nth-child is 1-based not 0-based
                cy.xpath('(//div[@class="promo"]/a)['+i+']').scrollIntoView().should('be.visible')
                cy.xpath('(//div[@class="promo"]/a)['+i+']').click()
                cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
                    cy.url().should('include', penvUrl.secondBlockPricingTableBuyNowUrl) // => true
                })
                cy.go('back')
              }
        }














    
    



}

export default SecondBlockPage