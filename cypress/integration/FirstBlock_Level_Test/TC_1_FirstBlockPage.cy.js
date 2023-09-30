/// <reference types="Cypress"/>

import BlockPageFirst from "../../PageClasses/BlockPageFirst";
import HomePage from "../../PageClasses/HomePage";


describe('Validate Landing Url and Functionality For First Page Block Level', () => {

    const hp = new HomePage()
    const bpf = new BlockPageFirst()



    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Validate Landing Url Of TryItFree of Blue CTA Bar For First Page Block Level', () => {

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            hp.goToStaging(penvUrl.firstBlockPageUrl)
        })
        hp.clickOnRegionList()
        bpf.clickOnfirstBlockPageBlueCtaBarTryItFree()


        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageBlueCtaBarTryItFreeUrl) // => true

        })

        hp.backTohomePage()

    })

    it('Validate Landing Url Of Freelancers Learm More Of Four Column In First Block Page', () => {


        hp.clickOnRegionList()
        bpf.clickfirstBlockPageColumnsFreelancersLearnMore()


        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageColumnsFreelancersLearnMoreUrl) // => true

        })

        hp.backTohomePage()

    })

    it('Validate Landing Url Of SelfEmployed Learm More Of Four Column In First Block Page', () => {

        hp.clickOnRegionList()
        bpf.clickfirstBlockPageColumnsSelfEmployedLearnMore()


        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageColumnsSelfEmployedLearnMoreUrl) // => true

        })

        hp.backTohomePage()

    })
    it('Validate Landing Url Of BusinessWithContractor Learm More Of Four Column In First Block Page', () => {

        hp.clickOnRegionList()
        bpf.clickfirstBlockPageColumnsBusinessWithContractorLearnMore()


        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageColumnsBusinessWithContractorLearnMoreUrl) // => true

        })

        hp.backTohomePage()

    })
    it('Validate Landing Url Of BusinessWithEmployee Learm More Of Four Column In First Block Page', () => {

        hp.clickOnRegionList()
        bpf.clickfirstBlockPageColumnsBusinessWithEmployeeLearnMore()


        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageColumnsBusinessWithEmployeeLearnMoreUrl) // => true

        })
        hp.backTohomePage()



    })
    it('Validate Landing Url Of Hero Buy Now For First Page Block Level', () => {

        hp.clickOnRegionList()
        bpf.clickfirstBlockPageHeroBannerBuyNow()


        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageHeroBannerBuyNowUrl) // => true

        })

        hp.backTohomePage()
    })

    it('Validate Landing Url Of Stat Tiles Signup Links For First Page Block Level', () => {

        hp.clickOnRegionList()
        bpf.clickfirstBlockPageStatTilesSupportSignup()

        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageStatTilesSupportSignupUrl) // => true

        })

        hp.backTohomePage()

    })
    it('Validate Landing Url Of Stat Tiles Contact Us Links For First Page Block Level', () => {
        hp.clickOnRegionList()
        bpf.clickfirstBlockPageStatTilesContactUs()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageStatTilesContactUsUrl) // => true

        })
        


    })
    it('Validate Landing Url Of Stat Tiles Help Center Links For First Page Block Level', () => {
        hp.backTohomePage()
        bpf.clickfirstBlockPageStatTilesHelpCenter()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageStatTilesHelpCenterUrl) // => true

        })

        
    })

    it('Validate Landing Url Of GetApp Link Under Testimonial Quote For First Page Block Level', () => {

        hp.backTohomePage()
        bpf.clickfirstBlockPageTestimonialGetAppLink()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageTestimonialGetAppLinkurl) // => true

        })
        hp.backTohomePage()
    })
    it('Validate Landing Url Of Facebook Link Under Social Share For First Page Block Level', () => {
        hp.clickOnRegionList()
        bpf.clickfirstBlockPageSocialShareFbLink()

        cy.url().should('include', 'https://www.facebook.com/')
        hp.backTohomePage()

    })

    it('Validate Landing Url Of Twitter Link Under Social Share For First Page Block Level', () => {
        
        bpf.clickfirstBlockPageSocialShareTwitter()

        cy.url().should('include', 'https://twitter.com/')
        hp.backTohomePage()

    })

    it('Validate Landing Url Of Linkedin Link Under Social Share For First Page Block Level', () => {
        
        bpf.clickfirstBlockPageSocialShareLinkedin()

        cy.url().should('include', 'https://www.linkedin.com/')
        hp.backTohomePage()

    })

    it('Validate Landing Url Of GetApp Link Under Rating One Line For First Page Block Level', () => {
        hp.clickOnRegionList()
        bpf.clickfirstBlockPageRatingOneLineGetApp()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageTestimonialGetAppLinkurl) // => true

        })
        hp.backTohomePage()

    })

    it('Validate Landing Url Of GetApp Link Under Rating Two Line For First Page Block Level', () => {
        hp.backTohomePage()
        bpf.clickfirstBlockPageRatingTwoLineGetApp()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageTestimonialGetAppLinkurl) // => true

        })
        hp.backTohomePage()

    })

    it('Validate Landing Url Of Get Started Link Under CTA Bar For First Page Block Level', () => {
        hp.backTohomePage()
        bpf.clickfirstBlockPageCtaBarGetStarted()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageBlueCtaBarTryItFreeUrl) // => true

        })
        hp.backTohomePage()
    })

    it('Validate Landing Url Of Try It Free Link Under Button Section For First Page Block Level', () => {
        hp.backTohomePage()
        bpf.clickfirstBlockPageButtonTryItFree()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageBlueCtaBarTryItFreeUrl) // => true

        })
        hp.backTohomePage()
    })

    it('Validate Landing Url Of Learn More Link Under Box-Info Section For First Page Block Level', () => {
        hp.backTohomePage()
        bpf.clickfirstBlockPageBoxInfoLearnMore()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageBoxInfoLearnMoreUrl) // => true

        })
        hp.backTohomePage()
    })

    //
    it('Validate Old Layout First FAQ Open On Click For First Page Block Level', () => {

        bpf.clickfirstBlockPageOldStyleFirstFAQ()


    })

    it('Validate Old Layout Second FAQ Open On Click And Link Correct Navigate For First Page Block Level', () => {

        bpf.clickfirstBlockPageOldStyleSecondFAQ()

        bpf.clickfirstBlockPageOldStyleSecondFAQLearnOnMobile()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageProductTourMobileLearnMoreUrl) // => true

        })
        hp.backTohomePage()
    })

    it('Validate Old Layout Third FAQ Open On Click For First Page Block Level', () => {

        bpf.clickfirstBlockPageOldStyleThirdFAQ()

    })

    it('Validate Old Layout Fourth FAQ Open On Click For First Page Block Level', () => {

        bpf.clickfirstBlockPageOldStyleFourthFAQ()

    })

    it('Validate New Layout First FAQ Open On Click For First Page Block Level', () => {

        bpf.clickfirstBlockPageNewStyleFirstFAQ()

    })

    it('Validate New Layout Second FAQ Open On Click For First Page Block Level', () => {

        bpf.clickfirstBlockPageNewStyleSecondFAQ()

    })

    

})