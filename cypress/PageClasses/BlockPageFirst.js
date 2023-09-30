/// <reference types="Cypress"/>

class BlockPageFirst
{
    constructor(){
        //first block
        this.firstBlockPageBlueCtaBarTryItFree=".blue-cta-bar__cta-container > .btn"
        this.firstBlockPageColumnsFreelancersLearnMore=".columns > :nth-child(1) > .fp-block > .btn"
        this.firstBlockPageColumnsSelfEmployedLearnMore=":nth-child(2) > .fp-block > .btn"
        this.firstBlockPageColumnsBusinessWithContractorLearnMore=":nth-child(3) > .fp-block > .btn"
        this.firstBlockPageColumnsBusinessWithEmployeeLearnMore=":nth-child(4) > .fp-block > .btn"
        this.firstBlockPageHeroBannerBuyNow=".hero__cta-content > .btn"
        this.firstBlockPageStatTilesSupportSignup=".stat-tiles__about-body > :nth-child(4) > a"
        this.firstBlockPageStatTilesContactUs="//div[@class='stat-tiles__about-content d-flex flex-column px-2 pr-md-2 pl-md-4 pl-lg-5 mt-md-5']/a[1]"
        this.firstBlockPageStatTilesHelpCenter="//div[@class='stat-tiles__about-content d-flex flex-column px-2 pr-md-2 pl-md-4 pl-lg-5 mt-md-5']/a[2]"
        this.firstBlockPageTestimonialGetAppLink=".fp-block.rating.wp-block.wp-block-fpbk-rating.rating__wrap_1>div>a"
        this.firstBlockPageWhiteCardEmailLink=".white-card__description > :nth-child(5) > a"
        this.firstBlockPageSocialShareFbLink=".social-share__button.text-decoration-none[title='Share on Facebook']"
        this.firstBlockPageSocialShareTwitter=".social-share__button.text-decoration-none[title='Tweet']"
        this.firstBlockPageSocialShareLinkedin=".social-share__button.text-decoration-none[title='Share on LinkedIn']"
        this.firstBlockPageRatingOneLineGetApp=":nth-child(20) > .rating__description > a"
        this.firstBlockPageRatingTwoLineGetApp=".rating__wrap_2 > .rating__description > a"
        this.firstBlockPageCtaBarGetStarted=".box__cta"
        this.firstBlockPageButtonTryItFree=":nth-child(30) > .btn"
        this.firstBlockPageBoxInfoLearnMore="#fpbk-boxes-wn2w > .fp-block > .btn"
        this.firstBlockPageOldStyleFirstFAQ=".container-fluid>div:nth-of-type(18)>div>div:nth-of-type(1)"
        this.firstBlockPageOldStyleSecondFAQ=".container-fluid>div:nth-of-type(18)>div>div:nth-of-type(2)"
        this.firstBlockPageOldStyleSecondFAQLearnOnMobile=".faq__answer-content.col-md-10.col-lg-9>p>a"
        this.firstBlockPageOldStyleThirdFAQ=".container-fluid>div:nth-of-type(18)>div>div:nth-of-type(3)"
        this.firstBlockPageOldStyleFourthFAQ=".container-fluid>div:nth-of-type(18)>div>div:nth-of-type(4)"
        this.firstBlockPageNewStyleFirstFAQ=".container-fluid>div:nth-of-type(19)>div>div:nth-of-type(1)"
        this.firstBlockPageNewStyleSecondFAQ=".container-fluid>div:nth-of-type(19)>div>div:nth-of-type(2)"
        this.firstBlockPageDidYouKnowTryItFree=".did-you-know__cta"
        this.firstBlockPageFeatureGridTryItFree=".d-inline-flex > .btn"
        this.firstBlockPageProductTourLearnMore=".product-tour__item_active > .product-tour__item-text > .product-tour__item-cta"
        this.firstBlockPageProductTourExpenseMenu=".product-tour__nav-container > [data-id='expenses']"
        this.firstBlockPageProductTourTimeTracking=".product-tour__nav-container > [data-id='time-tracking']"
        this.firstBlockPageProductTourProjects=".product-tour__nav-container > [data-id='projects-']"
        this.firstBlockPageProductTourPayments=".product-tour__nav-container > [data-id='payments']"
        this.firstBlockPageProductTourReporting=".product-tour__nav-container > [data-id='reporting-']"
        this.firstBlockPageProductTourMobile=".product-tour__nav-container > [data-id='mobile']"
        this.firstBlockPageProductTourAccounting=".product-tour__nav-container > [data-id='accounting-']"
        this.firstBlockPageConfirmationBoxTryItFree=".confirmation-box__cta"
        this.firstBlockPageOneColumnEducation=".one-column__text > .btn"
    }
    
    clickOnfirstBlockPageBlueCtaBarTryItFree()
    {
        cy.get(this.firstBlockPageBlueCtaBarTryItFree).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageBlueCtaBarTryItFree).click()
    }

    clickfirstBlockPageColumnsFreelancersLearnMore()
    {
        cy.get(this.firstBlockPageColumnsFreelancersLearnMore).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageColumnsFreelancersLearnMore).click()
    }
    clickfirstBlockPageColumnsSelfEmployedLearnMore()
    {
        cy.get(this.firstBlockPageColumnsSelfEmployedLearnMore).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageColumnsSelfEmployedLearnMore).click()
    }
    clickfirstBlockPageColumnsBusinessWithContractorLearnMore()
    {
        cy.get(this.firstBlockPageColumnsBusinessWithContractorLearnMore).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageColumnsBusinessWithContractorLearnMore).click()
    }
    clickfirstBlockPageColumnsBusinessWithEmployeeLearnMore()
    {
        cy.get(this.firstBlockPageColumnsBusinessWithEmployeeLearnMore).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageColumnsBusinessWithEmployeeLearnMore).click()
    }
    clickfirstBlockPageHeroBannerBuyNow()
    {
        cy.get(this.firstBlockPageHeroBannerBuyNow).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageHeroBannerBuyNow).click()
    }

    clickfirstBlockPageStatTilesSupportSignup()
    {
        cy.get(this.firstBlockPageStatTilesSupportSignup).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageStatTilesSupportSignup).click()
    }

    clickfirstBlockPageStatTilesContactUs()
    {
        cy.xpath(this.firstBlockPageStatTilesContactUs).scrollIntoView().should('be.visible')
        cy.xpath(this.firstBlockPageStatTilesContactUs).click()
    }

    clickfirstBlockPageStatTilesHelpCenter()
    {
        cy.xpath(this.firstBlockPageStatTilesHelpCenter).scrollIntoView().should('be.visible')
        cy.xpath(this.firstBlockPageStatTilesHelpCenter).click()
    }

    clickfirstBlockPageTestimonialGetAppLink()
    {
        cy.wait(2000)
        //cy.get(this.firstBlockPageTestimonialGetAppLink).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageTestimonialGetAppLink).first().invoke('removeAttr','target').click({force:true})
        
    }

    clickfirstBlockPageSocialShareFbLink()
    {
        cy.get(this.firstBlockPageSocialShareFbLink).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageSocialShareFbLink).invoke('removeAttr', 'target').click()
        
    }

    clickfirstBlockPageSocialShareTwitter()
    {
        cy.get(this.firstBlockPageSocialShareTwitter).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageSocialShareTwitter).invoke('removeAttr', 'target').click()
        
    }

    clickfirstBlockPageSocialShareLinkedin()
    {
        cy.get(this.firstBlockPageSocialShareLinkedin).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageSocialShareLinkedin).invoke('removeAttr', 'target').click()
    }

    clickfirstBlockPageRatingOneLineGetApp()
    {
        cy.get(this.firstBlockPageRatingOneLineGetApp).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageRatingOneLineGetApp).invoke('removeAttr', 'target').click()
    }

    clickfirstBlockPageRatingTwoLineGetApp()
    {
        cy.get(this.firstBlockPageRatingTwoLineGetApp).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageRatingTwoLineGetApp).invoke('removeAttr', 'target').click()
    }

    clickfirstBlockPageCtaBarGetStarted()
    {
        cy.get(this.firstBlockPageCtaBarGetStarted).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageCtaBarGetStarted).click()
    }

    clickfirstBlockPageButtonTryItFree()
    {
        cy.get(this.firstBlockPageButtonTryItFree).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageButtonTryItFree).click()
    }

    clickfirstBlockPageBoxInfoLearnMore()
    {
        cy.get(this.firstBlockPageBoxInfoLearnMore).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageBoxInfoLearnMore).click()
    }
    clickfirstBlockPageOldStyleFirstFAQ()
    {
        cy.get(this.firstBlockPageOldStyleFirstFAQ).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageOldStyleFirstFAQ).click()
    }

    clickfirstBlockPageOldStyleSecondFAQ()
    {
        cy.get(this.firstBlockPageOldStyleSecondFAQ).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageOldStyleSecondFAQ).click()
    }

    clickfirstBlockPageOldStyleSecondFAQLearnOnMobile()
    {
        cy.get(this.firstBlockPageOldStyleSecondFAQLearnOnMobile).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageOldStyleSecondFAQLearnOnMobile).click()
    }

    clickfirstBlockPageOldStyleThirdFAQ()
    {
        cy.get(this.firstBlockPageOldStyleThirdFAQ).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageOldStyleThirdFAQ).click()
    }

    clickfirstBlockPageOldStyleFourthFAQ()
    {
        cy.get(this.firstBlockPageOldStyleFourthFAQ).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageOldStyleFourthFAQ).click()
    }

    clickfirstBlockPageNewStyleFirstFAQ()
    {
        cy.get(this.firstBlockPageNewStyleFirstFAQ).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageNewStyleFirstFAQ).click()
    }

    clickfirstBlockPageNewStyleSecondFAQ()
    {
        cy.get(this.firstBlockPageNewStyleSecondFAQ).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageNewStyleSecondFAQ).click()
    }

    clickfirstBlockPageDidYouKnowTryItFree()
    {
        cy.get(this.firstBlockPageDidYouKnowTryItFree).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageDidYouKnowTryItFree).click()
    }

    clickfirstBlockPageFeatureGridTryItFree()
    {
        cy.get(this.firstBlockPageFeatureGridTryItFree).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageFeatureGridTryItFree).click()
    }

    clickfirstBlockPageProductTourLearnMore()
    {
        cy.get(this.firstBlockPageProductTourLearnMore).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageProductTourLearnMore).click()
    }

    clcikfirstBlockPageProductTourExpenseMenu()
    {
        cy.get(this.firstBlockPageProductTourExpenseMenu).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageProductTourExpenseMenu).click()
    }

    clickfirstBlockPageProductTourTimeTracking()
    {
        cy.get(this.firstBlockPageProductTourTimeTracking).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageProductTourTimeTracking).click()
    }

    clcikfirstBlockPageProductTourProjects()
    {
        cy.get(this.firstBlockPageProductTourProjects).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageProductTourProjects).click()
    }

    clcikfirstBlockPageProductTourPayments()
    {
        cy.get(this.firstBlockPageProductTourPayments).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageProductTourPayments).click()
    }

    clickfirstBlockPageProductTourReporting()
    {
        cy.get(this.firstBlockPageProductTourReporting).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageProductTourReporting).click()
    }

    clickfirstBlockPageProductTourMobile()
    {
        cy.get(this.firstBlockPageProductTourMobile).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageProductTourMobile).click()
    }

    clcikfirstBlockPageProductTourAccounting()
    {
        cy.get(this.firstBlockPageProductTourAccounting).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageProductTourAccounting).click()
    }

    clickfirstBlockPageConfirmationBoxTryItFree()
    {
        cy.get(this.firstBlockPageConfirmationBoxTryItFree).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageConfirmationBoxTryItFree).click()
    }

    clickfirstBlockPageOneColumnEducation()
    {
        cy.get(this.firstBlockPageOneColumnEducation).scrollIntoView().should('be.visible')
        cy.get(this.firstBlockPageOneColumnEducation).click()
    }



}
export default BlockPageFirst
