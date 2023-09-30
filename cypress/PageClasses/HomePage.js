/// <reference types="Cypress"/>

class HomePage{
    constructor(){
        //Feature_invoiceing
        this.invoicing_menu="a[data-id=invoicing]"
        this.about_invoicing="a[href='/invoice']"
        this.homePage=".header__logo-image.lazyloaded"
        this.tryItFreeUnderInvoicing="div[data-id=invoicing]>div>div>a.py-2.px-3"
        this.videoUnderInvoicing="div[data-id=invoicing]>div>div>div.product-tour__watch"
        this.closeVideo=".product-tour__item-close-video.show"
        //Feature_expenses
        this.expenses_menu="a[data-id=expenses]"
        this.about_expenses="a[href='/expenses-and-receipts-tracking']"
        this.tryItFreeUnderExpenses="div[data-id=expenses]>div>div>a.py-2.px-3"
        this.videoUnderExpenses="div[data-id=expenses]>div>div>div.product-tour__watch"
        //Feature_time-tracking
        this.timeTracking_menu="a[data-id=time-tracking]"
        this.about_timeTracking="a[href='/timesheets-and-time-tracking']"
        this.tryItFreeUnderTimeTracking="div[data-id=time-tracking]>div>div>a.py-2.px-3"
        this.videoUnderTimeTracking="div[data-id=time-tracking]>div>div>div.product-tour__watch"
        //Features_projects
        this.projects_menu="a[data-id=projects]"
        this.about_projects="a[href='/projects-and-collaboration']"
        this.tryItFreeUnderProjects="div[data-id=projects]>div>div>a.py-2.px-3"
        this.videoUnderProjects="div[data-id=projects]>div>div>div.product-tour__watch"
        //Features_payments
        this.payments_menu="a[data-id=payments]"
        this.about_payments="a[href='/accept-payments']"
        this.tryItFreeUnderPayments="div[data-id=payments]>div>div>a.py-2.px-3"
        this.videoUnderPayments="div[data-id=payments]>div>div>div.product-tour__watch"
        //Features_reporting
        this.reporting_menu="a[data-id=reporting]"
        this.about_reporting="a[href='/financial-reporting']"
        this.tryItFreeUnderReporting="div[data-id=reporting]>div>div>a.py-2.px-3"
        this.videoUnderReporting="div[data-id=reporting]>div>div>div.product-tour__watch"
        //Features_accounting
        this.accounting_menu="a[data-id=accounting]"
        this.about_accounting="a[href='/accounting']"
        this.tryItFreeUnderAccounting="div[data-id=accounting]>div>div>a.py-2.px-3"
        this.videoUnderAccounting="div[data-id=accounting]>div>div>div.product-tour__watch"
        //Features_mobile
        this.mobile_menu="a[data-id=mobile]"
        this.about_mobile="a[href='/mobile-apps']"
        this.tryItFreeUnderMobile="div[data-id=mobile]>div>div>a.py-2.px-3"
        this.videoUnderMobile="div[data-id=mobile]>div>div>div.product-tour__watch"
        //Homepage_learn-more
        this.freelancersLearnMore="a[href='/for-freelancers']"
        this.selfEmployedLearnMore="a[href='/self-employed-professionals']"
        this.businessWithContractorsLearnMore="a[href='/businesses-with-contractors']"
        this.businessWithEmployeeLearnMore="a[href='/businesses-with-employees']"
        //Homepage_tryitfree_above_appstore
        this.tryItFreeAboveAppStore=".btn.px-5.px-sm-6"
        this.tryItFreeUnderAppStore=".btn.px-5.py-2.font-weight-medium.mb-3"
        this.appStore="a[href='https://appstore.freshbooks.com']"
        //HomePage_partner
        this.homePagePartner=".btn.white-btn.is-style-btn-white"
        //HomePage_customerSupport
        this.homePageContactUs=".btn.mr-3.grey-btn.is-style-btn-white"
        this.homePageHelpCenter=".btn.d-none.d-md-inline-block"
        //HomePage_FAQ
        this.homePageFirstFaq=".faq__items>div:nth-of-type(1)"
        this.freeTrialUnderFirstFaq="//a[text()='free 30-day trial']"
        this.homePageSecondFaq=".faq__items>div:nth-of-type(2)"
        this.quickBooksUnderSecondFaq="//a[text()='QuickBooks']"
        this.xeroUnderSecondFaq="//a[text()='Xero']"
        this.waveUnderSecondFaq="//a[text()='Wave']"
        this.specialistUnderSecondFaq="//a[text()='Specialists']"
        this.homePageThirdFaq=".faq__items>div:nth-of-type(3)"
        this.checkOutLinkUnderThirdFaq="//a[contains(text(),'make the most of your free 30-Day')]"
        this.homePageFourthFaq=".faq__items>div:nth-of-type(4)"
        this.reviewlinkUnderFourthFaq="//a[text()='You can review them here']"
        this.freshbookPlanInFourthFaq="//a[contains(text(),'Wondering Which FreshBooks Plan')]"
        this.homePageFifthFaq=".faq__items>div:nth-of-type(5)"
        this.learnAccountinglinkInFifthFaq="//a[contains(text(),'Learn more about our accounting')]"
        this.homePageSixthFaq=".faq__items>div:nth-of-type(6)"
        this.LearnMobileLinkInSixthFaq="//a[contains(text(),'about FreshBooks on mobile here.')]"
        this.homePageSeventhFaq=".faq__items>div:nth-of-type(7)"
        this.supportInSeventhFaq="//a[text()='Check it out here.']"
        this.homePageEighthFaq=".faq__items>div:nth-of-type(8)"
        this.pricingLinkInEighthFaq="//a[text()='Plus and Premium plans']"
        this.accountantLinkInEightFaq="//a[text()='Accounting Partner Program']"
        this.freshbookTypeformInEightFaq="//a[text()='reach out to us']"
        this.workEffectiveInEighthFaq="//a[contains(text(),'Learn more about working effectively')]"

        //region selector footer
        this.regionSelectorList="#region-selection-footer"
        this.selectUSregion="#region-selection-footer>div:nth-of-type(2)>a[data-country-code='us']"

        //Homepage Hero Banner
        this.directBuyPromotion=".promo-hero__subheader"
        //#promo-hero-c3357fdb > div > div.promo-hero__content.d-flex.flex-column.justify-content-center.align-items-center.position-relative.mx-auto.pt-5.px-4.p-md-5 > h2
        this.buyNowLinkOnHeroBanner=".promo-hero__actions_cta"
        this.getAppReviewsLink=".promo-hero__rating-getapp > a"

        //Pricing Page Hero banner
        this.directBuyPromotionOnPricing=".promo-hero__header"
        this.seeOfferDetailsOnPricingHeroBanner=".promo-hero__actions_offer-link"
        this.promotionTextOnSignUp=".directBuyUnauthenticatedDialog-promo"

        //Home Page Sticky Banner Buy Now Link 
        this.homePageStickyBannerBuyNow=".non-countdown > p > a"

        //Production HomePage Header TryItFree
        this.ProdHeaderTryItFree=".header__ctas > .px-3"

        //Production Buy Now Promotion For Sign Up
        this.buyNowPromotionInSignUp=".sign-up__promo-banner_desktop-cta"

        //Production Homepage Header TryItFree Without DirectBuy
        this.prodHeaderTryItFreewithoutDirectBuy=".header__contact_login.show-fbcustomer"

        //Production Without Direct Buy Homepage Banner Email Field and Password Field
        this.inlineHomepageEmailField="#fpbk-hero-fz4v__hero_signup_email"

        this.inlineHomepagePasswordField="#fpbk-hero-fz4v__signup_password"

        //Production without Direct Buy HomePage Banner checkbox for terms and agree

        this.checkBoxForTermsAndAgree="#tos-accepted"

        //TryItFree button on Production without Direct Buy HomePage Banner

        this.tryItFreeOfInlineHomePageBanner=".hero__signup-form-btn > .btn"

        //Validate the "Email sent to" text after clicking Inline Homepage Banner TryItFree
        
        this.validateEmailSentTextInAuthPage=".unauthenticatedDialog-instructions-first"

        this.InlineBannerGetAppLink=".hero__rating1-getapp > a"

        this.InlineBannerTermsOfServiceLink=":nth-child(3) > [href='/policies/terms-of-service']"

        this.InlineBannerPrivacyLink=".d-flex > :nth-child(3) > [href='/policies/privacy']"

        this.InlineBannerSecuritySafegaurdsLink=".d-flex > :nth-child(3) > [href='/policies/security-safeguards']"
        
        //Signup Page
        this.signupWithGoogleSignupPageLink="//a[text()='Sign up with Google				']"

        //Freshbook Sign in with google
        this.googleEmailOrUsernameField="#identifierId"
        this.NextLinkElementWithGoogleSignup="#identifierNext"

        //Validation message for home page signup without direct by
        this.validationMessageForEnterEmail="(//div[@class='invalid-tooltip py-2 px-3'])[1]"
        this.validateMessageForEnterPwd="(//div[@class='invalid-tooltip py-2 px-3'])[2]"
        this.validateMessageForCheckboxTick="(//div[@class='invalid-tooltip invalid-checkbox-tooltip py-2 px-3'])[1]"

    }

    goToStaging(value)
    {
        cy.visit(value)
        
    }

    clickInvoicing()
    {
        cy.get(this.invoicing_menu).scrollIntoView().should('be.visible')
        //cy.scrollTo(0, 500)
        cy.get(this.invoicing_menu).click()
    }

    clickAboutInvoicingLink()
    {
        cy.get(this.about_invoicing).scrollIntoView().should('be.visible')
        cy.get(this.about_invoicing).click()
    }

    backTohomePage()
    {
        //cy.scrollTo(0, -200)

        cy.go('back')
        cy.wait(2000)
        
    }

    clickInvoicingTryItFree()
    {
        
        cy.get(this.tryItFreeUnderInvoicing).scrollIntoView().should('be.visible')
        cy.get(this.tryItFreeUnderInvoicing).click()
    }

    clickInvoicingVideo()
    {
        cy.get(this.videoUnderInvoicing).scrollIntoView().should('be.visible')
        cy.get(this.videoUnderInvoicing).click()
    }

    closeFeaturesVideo()
    {
        cy.get(this.closeVideo, {
            timeout: 5000
          }).should('be.visible')

         cy.get(this.closeVideo).click()

    }

    clickExpenses()
    {
        cy.get(this.expenses_menu).scrollIntoView().should('be.visible')
        //cy.scrollTo(0, 500)
        cy.get(this.expenses_menu).click()
    }

    clickAboutExpensesLink()
    {
        cy.get(this.about_expenses).scrollIntoView().should('be.visible')
        cy.get(this.about_expenses).click()
    }

    clickExpensesTryItFree()
    {
        
        cy.get(this.tryItFreeUnderExpenses).scrollIntoView().should('be.visible')
        cy.get(this.tryItFreeUnderExpenses).click()
    }

    clickExpensesVideo()
    {
        cy.get(this.videoUnderExpenses).scrollIntoView().should('be.visible')
        cy.get(this.videoUnderExpenses).click()
    }

    //TimeTracking
    clickTimeTracking()
    {
        cy.get(this.timeTracking_menu).scrollIntoView().should('be.visible')
        //cy.scrollTo(0, 500)
        cy.get(this.timeTracking_menu).click()
    }

    clickAboutTimeTrackingLink()
    {
        cy.get(this.about_timeTracking).scrollIntoView().should('be.visible')
        cy.get(this.about_timeTracking).click()
    }

    clickTimeTrackingTryItFree()
    {
        
        cy.get(this.tryItFreeUnderTimeTracking).scrollIntoView().should('be.visible')
        cy.get(this.tryItFreeUnderTimeTracking).click()
    }

    clickTimeTrackingVideo()
    {
        cy.get(this.videoUnderTimeTracking).scrollIntoView().should('be.visible')
        cy.get(this.videoUnderTimeTracking).click()
    }
    //Projects
    clickProjects()
    {
        cy.get(this.projects_menu).scrollIntoView().should('be.visible')
        //cy.scrollTo(0, 500)
        cy.get(this.projects_menu).click()
    }

    clickAboutProjectsLink()
    {
        cy.get(this.about_projects).scrollIntoView().should('be.visible')
        cy.get(this.about_projects).click()
    }

    clickProjectsTryItFree()
    {
        
        cy.get(this.tryItFreeUnderProjects).scrollIntoView().should('be.visible')
        cy.get(this.tryItFreeUnderProjects).click()
    }

    clickProjectsVideo()
    {
        cy.get(this.videoUnderProjects).scrollIntoView().should('be.visible')
        cy.get(this.videoUnderProjects).click()
    }
    //Payments
    clickPayments()
    {
        cy.get(this.payments_menu).scrollIntoView().should('be.visible')
        //cy.scrollTo(0, 500)
        cy.get(this.payments_menu).click()
    }

    clickAboutPaymentsLink()
    {
        cy.get(this.about_payments).scrollIntoView().should('be.visible')
        cy.get(this.about_payments).click()
    }

    clickPaymentsTryItFree()
    {
        
        cy.get(this.tryItFreeUnderPayments).scrollIntoView().should('be.visible')
        cy.get(this.tryItFreeUnderPayments).click()
    }

    clickPaymentsVideo()
    {
        cy.get(this.videoUnderPayments).scrollIntoView().should('be.visible')
        cy.get(this.videoUnderPayments).click()
    }
    //Reporting
    clickReporting()
    {
        cy.get(this.reporting_menu).scrollIntoView().should('be.visible')
        //cy.scrollTo(0, 500)
        cy.get(this.reporting_menu).click()
    }

    clickAboutReportingLink()
    {
        cy.get(this.about_reporting).scrollIntoView().should('be.visible')
        cy.get(this.about_reporting).click()
    }

    clickReportingTryItFree()
    {
        
        cy.get(this.tryItFreeUnderReporting).scrollIntoView().should('be.visible')
        cy.get(this.tryItFreeUnderReporting).click()
    }

    clickReportingVideo()
    {
        cy.get(this.videoUnderReporting).scrollIntoView().should('be.visible')
        cy.get(this.videoUnderReporting).click()
    }
    //Accounting
    clickAccounting()
    {
        cy.get(this.accounting_menu).scrollIntoView().should('be.visible')
        //cy.scrollTo(0, 500)
        cy.get(this.accounting_menu).click()
    }

    clickAboutAccountingLink()
    {
        cy.get(this.about_accounting).scrollIntoView().should('be.visible')
        cy.get(this.about_accounting).click()
    }

    clickAccountingTryItFree()
    {
        
        cy.get(this.tryItFreeUnderAccounting).scrollIntoView().should('be.visible')
        cy.get(this.tryItFreeUnderAccounting).click()
    }

    clickAccountingVideo()
    {
        cy.get(this.videoUnderAccounting).scrollIntoView().should('be.visible')
        cy.get(this.videoUnderAccounting).click()
    }
    //Mobile
    clickMobile()
    {
        cy.get(this.mobile_menu).scrollIntoView().should('be.visible')
        //cy.scrollTo(0, 500)
        cy.get(this.mobile_menu).click()
    }

    clickAboutMobileLink()
    {
        cy.get(this.about_mobile).scrollIntoView().should('be.visible')
        cy.get(this.about_mobile).click()
    }

    clickMobileTryItFree()
    {
        
        cy.get(this.tryItFreeUnderMobile).scrollIntoView().should('be.visible')
        cy.get(this.tryItFreeUnderMobile).click()
    }

    clickMobileVideo()
    {
        cy.get(this.videoUnderMobile).scrollIntoView().should('be.visible')
        cy.get(this.videoUnderMobile).click()
    }

    // Learn More

    clickFreelancersLearnMore()
    {
        cy.get(this.freelancersLearnMore).scrollIntoView().should('be.visible')
        cy.get(this.freelancersLearnMore).click()

    }

    clickSelfEmployedLearnMore()
    {
        cy.get(this.selfEmployedLearnMore).scrollIntoView().should('be.visible')
        cy.get(this.selfEmployedLearnMore).click()
    }

    clickBusinessWithContractorsLearnMore()
    {
        cy.get(this.businessWithContractorsLearnMore).scrollIntoView().should('be.visible')
        cy.get(this.businessWithContractorsLearnMore).click()

    }
    clickBusinessWithEmployeeLearnMore()
    {
        cy.get(this.businessWithEmployeeLearnMore).scrollIntoView().should('be.visible')
        cy.get(this.businessWithEmployeeLearnMore).click()
        cy.wait(5000)
    }

    //TryItFree Above and Under App Store Section

    clickTryItFreeAboveAppStore()
    {
        cy.get(this.tryItFreeAboveAppStore).scrollIntoView().should('be.visible')
        cy.get(this.tryItFreeAboveAppStore).click()
    }
    clickTryItFreeUnderAppStore()
    {
        cy.get(this.tryItFreeUnderAppStore).scrollIntoView().should('be.visible')
        cy.get(this.tryItFreeUnderAppStore).click()
    }

    clickOverGreatApp()
    {
        cy.get(this.appStore).scrollIntoView().should('be.visible')
        cy.get(this.appStore).click()

    }

    //Partner With Freshbooks

    clickOnPartnerWithUs()
    {
        cy.get(this.homePagePartner).scrollIntoView().should('be.visible')
        cy.get(this.homePagePartner).click()

    }

    //Customer Support

    clickOnContactUs()
    {
        cy.get(this.homePageContactUs).scrollIntoView().should('be.visible')
        cy.get(this.homePageContactUs).click()

    }

    clickOnHelpCenter()
    {
        cy.get(this.homePageHelpCenter).scrollIntoView().should('be.visible')
        cy.get(this.homePageHelpCenter).click()
        cy.wait(5000)
    }

    //First FAQ

    clickOnFirstFaq()
    {
        cy.get(this.homePageFirstFaq).scrollIntoView().should('be.visible')
        cy.get(this.homePageFirstFaq).click()
        
    }

    clickonFreeTrialInFirstFaq()
    {
        cy.xpath(this.freeTrialUnderFirstFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.freeTrialUnderFirstFaq).click()

    }

    //Second FAQ

    clickOnSecondFaq()
    {
        cy.get(this.homePageSecondFaq).scrollIntoView().should('be.visible')
        cy.get(this.homePageSecondFaq).click()
    }

    clickOnQuickBooksLink()
    {
        cy.xpath(this.quickBooksUnderSecondFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.quickBooksUnderSecondFaq).click()
    }

    clickOnXeroLink()
    {
        cy.xpath(this.xeroUnderSecondFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.xeroUnderSecondFaq).click()
    }

    clickOnWaveLink()
    {
        cy.xpath(this.waveUnderSecondFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.waveUnderSecondFaq).click()
    }

    clickOnSpecialistsLink()
    {
        cy.xpath(this.specialistUnderSecondFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.specialistUnderSecondFaq).click()
    }

    // Third FAQ

    clickOnThirdFaq()
    {
        cy.get(this.homePageThirdFaq).scrollIntoView().should('be.visible')
        cy.get(this.homePageThirdFaq).click()
    }

    clickOnCheckOutArticle()
    {
        
        cy.xpath(this.checkOutLinkUnderThirdFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.checkOutLinkUnderThirdFaq).click()
        cy.wait(4000)
    }

    //Fourth FAQ

    clickOnFourthFaq()
    {
        cy.wait(2000)
        cy.get(this.homePageFourthFaq).scrollIntoView().should('be.visible')
        cy.get(this.homePageFourthFaq).click()

    }

    clickOnCanReviewLink()
    {
        cy.xpath(this.reviewlinkUnderFourthFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.reviewlinkUnderFourthFaq).click()

    }

    clickOnFreshbooksPlan()
    {
        cy.xpath(this.freshbookPlanInFourthFaq).scrollIntoView().should('be.visible')
        cy.xpath(this.freshbookPlanInFourthFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.freshbookPlanInFourthFaq).click()
    }

    // Fifth FAQ

    clickOnFifthFaq()
    {
        cy.get(this.homePageFifthFaq).scrollIntoView().should('be.visible')
        cy.get(this.homePageFifthFaq).click()
        
    }

    clickOnLearnAccountingInFaq()
    {
        cy.xpath(this.learnAccountinglinkInFifthFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.learnAccountinglinkInFifthFaq).click()
    }

    //Sixth FAQ

    clickOnSixthFaq()
    {
        cy.get(this.homePageSixthFaq).scrollIntoView().should('be.visible')
        cy.get(this.homePageSixthFaq).click()

    }

    clickOnLearnMobileInFaq()
    {
        cy.xpath(this.LearnMobileLinkInSixthFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.LearnMobileLinkInSixthFaq).click()
    }

    //Seventh FAQ

    clickOnSeventhFaq()
    {
        cy.get(this.homePageSeventhFaq).scrollIntoView().should('be.visible')
        cy.get(this.homePageSeventhFaq).click()

    }

    clickOnCheckItOutHereInFaq()
    {
        cy.xpath(this.supportInSeventhFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.supportInSeventhFaq).click()
    }

    //Eight FAQ

    clickOnEightFaq()
    {
        cy.get(this.homePageEighthFaq).scrollIntoView().should('be.visible')
        cy.get(this.homePageEighthFaq).click()

    }

    clickOnPlusPremiumPlanInFaq()
    {
        cy.xpath(this.pricingLinkInEighthFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.pricingLinkInEighthFaq).click()
    }

    clickOnAccouningPartnerInFaq()
    {
        cy.xpath(this.accountantLinkInEightFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.accountantLinkInEightFaq).click()
    }
    clickOnReachOutToUs()
    {
        cy.xpath(this.freshbookTypeformInEightFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.freshbookTypeformInEightFaq).invoke('removeAttr', 'target').click()
    }
    clickOnWorkEffectivelyOnFreshbookInFaq()
    {
        cy.xpath(this.workEffectiveInEighthFaq, {
            timeout: 4000
          }).should('be.visible')
        cy.xpath(this.workEffectiveInEighthFaq).click()
        cy.wait(4000)
    }

    //select US region
    clickOnRegionList()
    {
        cy.get(this.regionSelectorList).scrollIntoView().should('be.visible')
        cy.get(this.regionSelectorList).click()
        cy.get(this.selectUSregion).scrollIntoView().should('be.visible')
        cy.get(this.selectUSregion).click()

    }
    //Production Home Page Hero Banner Buy Now link
    clickOnBuyNowHeroBanner()
    {
        cy.get(this.buyNowLinkOnHeroBanner).scrollIntoView().should('be.visible')
        // cy.window().document().then(function (doc) {
        //     doc.addEventListener('click', () => {
        //       setTimeout(function () { doc.location.reload() }, 5000)
        //     })
        //     cy.get('.promo-hero__actions_cta').click()
        // })
        cy.get(this.buyNowLinkOnHeroBanner).click()
    }
    checkPromotionTextOnHeroBanner()
    {
        cy.get(this.directBuyPromotion).scrollIntoView().should('be.visible')
        cy.get(this.directBuyPromotion).contains('Off')
    }
    clickOnGetAppReviewsOnHeroBanner()
    {
        cy.get(this.getAppReviewsLink).scrollIntoView().should('be.visible')
        cy.get(this.getAppReviewsLink).invoke('removeAttr', 'target').click()
    }
    //Production Pricing Page Hero Banner
    checkPromotionTextOnPricingHeroBanner()
    {
        cy.get(this.directBuyPromotionOnPricing).scrollIntoView().should('be.visible')
        cy.get(this.directBuyPromotionOnPricing).contains('Off')
    }

    checkPromotionTextOnSingUpPage()
    {
        
        cy.get(this.promotionTextOnSignUp).scrollIntoView().should('be.visible')
        cy.get(this.promotionTextOnSignUp).contains('off')
    }

    validateHoveringTextForSeeOfferDetailsOnPricingHeroBanner()
    {
        cy.get(this.seeOfferDetailsOnPricingHeroBanner).scrollIntoView().should('be.visible')
        cy.get(this.seeOfferDetailsOnPricingHeroBanner).trigger('mouseover').wait(2000)
        cy.get(this.seeOfferDetailsOnPricingHeroBanner).invoke('show')
        .contains('See Offer').trigger('mouseover','bottom');
        
    }

    //Production Home Page Sticky banner
    clickOnStickyBannerBuyNowHomePage()
    {
        cy.get(this.homePageStickyBannerBuyNow).click()
    }

    validateTheStrickyBannnerVisible()
    {
        cy.get(this.homePageStickyBannerBuyNow).should('be.visible')
    }

    //Production Home Page header TryItFree

    clickOnProdHeaderTryItFree()
    {
        cy.get(this.ProdHeaderTryItFree).scrollIntoView().should('be.visible')
        cy.get(this.ProdHeaderTryItFree).click()
    }

    clickOnBuyNowPromotionInProdSignUp()
    {
        
        cy.get(this.buyNowPromotionInSignUp).scrollIntoView().should('be.visible')
        cy.get(this.buyNowPromotionInSignUp).click()
    }

    //Clear Smux_Login Cookies

    setSmuxLoginCookiesForProdHomePage()
    {
        cy.setCookie('smux_login', '1', { domain: 'www.freshbooks.com' })
        cy.reload()
    }
    checkPromotionWithoutDirectBuyHeroBanner()
    {
        cy.get(this.directBuyPromotion).scrollIntoView().should('not.be.visible')
    }

    checkWithoutDirectBuyStickyBannerNotShow()
    {

        cy.get(this.homePageStickyBannerBuyNow).scrollIntoView().should('not.be.visible')
    }

    checkWithoutDirectBuyPricingBannerBuyNow()
    {
        cy.get(this.buyNowLinkOnHeroBanner).scrollIntoView().should('not.be.visible')
    }
    checkWithoutDirectBuySignUpBuyNow()
    {
        cy.get(this.buyNowPromotionInSignUp).scrollIntoView().should('not.be.visible')
    }
    clickOnHeaderTryItFreeWithoutDirectBuy()
    {
        
        cy.get(this.prodHeaderTryItFreewithoutDirectBuy).scrollIntoView().should('be.visible')
        cy.get(this.prodHeaderTryItFreewithoutDirectBuy).click()

    }

    //Inline Homepage Banner 
    validatePasswordFieldShowAfterClickEmail()
    {
        cy.get(this.inlineHomepagePasswordField).should('not.be.visible')
        cy.get(this.inlineHomepageEmailField).scrollIntoView().should('be.visible')
        cy.get(this.inlineHomepageEmailField).click()
        cy.get(this.inlineHomepagePasswordField).scrollIntoView().should('be.visible')
        
    }

    enterValueInInlineEmailField()
    {
        cy.get(this.inlineHomepageEmailField).scrollIntoView().should('be.visible')
        var add=((Math.floor(Math.random()*1000)+9999)).toString()
        cy.get(this.inlineHomepageEmailField).type('shailendra.rathore'+'+'+add+'@freshbooks.com')
    }

    enterInvalidValueInInlineEmailField()
    {
        cy.get(this.inlineHomepageEmailField).scrollIntoView().should('be.visible')
        var ad=((Math.floor(Math.random()*1000)+9999)).toString()
        cy.get(this.inlineHomepageEmailField).type('shailendra.rathore'+'@'+ad+'freshbooks')
    }
    enterAlreadyExistEmail()
    {
        cy.get(this.inlineHomepageEmailField).scrollIntoView().should('be.visible')
        cy.get(this.inlineHomepageEmailField).type('shailendra.rathore@freshbooks.com')
    }
    checkValidationForWrongEmailEntered()
    {
        //this.validationMessageForEnterEmail
        cy.xpath(this.validationMessageForEnterEmail).scrollIntoView().should('be.visible')
        cy.xpath(this.validationMessageForEnterEmail).should('have.text','This field is invalid')
    }
    checkValidationTextForExistingEmailFill()
    {
        cy.xpath(this.validationMessageForEnterEmail).scrollIntoView().should('be.visible')
        cy.xpath(this.validationMessageForEnterEmail).should('have.text','Email has already been taken.')
    }


    enterValueInPasswordField()
    {
        cy.get(this.inlineHomepagePasswordField).scrollIntoView().should('be.visible')
        var num = ((Math.floor(Math.random() * 10000000)) + 99999999).toString()
        cy.get(this.inlineHomepagePasswordField).type(num)
    }
    enterInvalidValueInPasswordField()
    {
        cy.get(this.inlineHomepagePasswordField).scrollIntoView().should('be.visible')
        var pwd=((Math.floor(Math.random()*1000)+9999)).toString()
        cy.get(this.inlineHomepagePasswordField).type(pwd)
    }

    checkValidationForWrongPwdEntered()
    {
        cy.xpath(this.validateMessageForEnterPwd).scrollIntoView().should('be.visible')
        cy.xpath(this.validateMessageForEnterPwd).should('have.text','Value is too short: minimum length is 8')
    }

    clickOnConfirmtermsAndAgreeCheckBox()
    {
        cy.get(this.checkBoxForTermsAndAgree).scrollIntoView().should('be.visible')
        cy.get(this.checkBoxForTermsAndAgree).click()
    }

    checkValidationTextIfNotCheckedOnConfirmBox()
    {
        cy.xpath(this.validateMessageForCheckboxTick).scrollIntoView().should('be.visible')
        cy.xpath(this.validateMessageForCheckboxTick).should('have.text','This field is required')
    }
    clickOnInlineHomePageBannerTryItFree()
    {
        cy.get(this.tryItFreeOfInlineHomePageBanner).scrollIntoView().should('be.visible')
        cy.get(this.tryItFreeOfInlineHomePageBanner).click()
    }

    //Validate Authentication Page text of Email Snet

    validateTextOnAuthPageForInlineSignup()
    {
        cy.get(this.validateEmailSentTextInAuthPage).should('be.visible')
        cy.wait(2000);
        cy.get(this.validateEmailSentTextInAuthPage).contains('email has been sent to')
        
    }
    validateUrlOfAuthPageForInlineSignup()
    {
        cy.url().should('include', 'auth.freshbooks.com/integrations/confirm?')
        //cy.url().contains('')
    }

    //this.InlineBannerGetAppLink
    clickOnInlineHomePageBannerGetAppLink()
    {
        cy.get(this.InlineBannerGetAppLink).scrollIntoView().should('be.visible')
        cy.get(this.InlineBannerGetAppLink).invoke('removeAttr', 'target').click()
    }

    //this.InlineBannerTermsOfServiceLink
    clickOnInlineHomePageBannerTermsServicesLink()
    {
        cy.get(this.InlineBannerTermsOfServiceLink).scrollIntoView().should('be.visible')
        cy.get(this.InlineBannerTermsOfServiceLink).invoke('removeAttr', 'target').click()
    }

    //this.InlineBannerPrivacyLink
    clickOnInlineHomePageBannerPrivacyLink()
    {
        cy.get(this.InlineBannerPrivacyLink).scrollIntoView().should('be.visible')
        cy.get(this.InlineBannerPrivacyLink).invoke('removeAttr', 'target').click()
    }

    //this.InlineBannerSecuritySafegaurdsLink
    clickOnInlineHomePageBannerSecurityLink()
    {
        cy.get(this.InlineBannerSecuritySafegaurdsLink).scrollIntoView().should('be.visible')
        cy.get(this.InlineBannerSecuritySafegaurdsLink).invoke('removeAttr', 'target').click()
    }

    clickOnSignupWithGoogleSignUpPage()
    {
        cy.wait(2000)
        //cy.xpath(this.signupWithGoogleSignupPageLink).scrollIntoView().should('be.visible')
        //cy.xpath(this.signupWithGoogleSignupPageLink).click()
        
    }

    enterValidEmailOrUsername()
    {
        
        cy.get(this.googleEmailOrUsernameField).type('')

    }

    clickOnNextButton()
    {
        cy.get(this.NextLinkElementWithGoogleSignup).click()
    }

    //this.googleEmailOrUsernameField="#identifierId"
        //this.NextLinkElementWithGoogleSignup="#identifierNext"

}

export default HomePage