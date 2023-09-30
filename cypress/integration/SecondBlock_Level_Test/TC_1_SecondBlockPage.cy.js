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
      
    it('Validate the working of Gallary Carousal For Second Page Block Level',()=>
    {
        
        
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl =>
            {
                hp.goToStaging(penvUrl.secondBlockPageUrl)
                hp.clickOnRegionList()
            })
        //cy.get('a').invoke('attr', 'href').should('eq', 'https://docs.cypress.io')
        sbp.clicksecondBlockSecondCarousalRadio()

        sbp.clicksecondBlockFirstCarousalRadio()

  
    })   

    it('Validate the Landing Url Of Read More Under Article Card For Second Page Block Level',()=>
    {
        
       
        sbp.clicksecondBlockArticleCardReadMore()

        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.secondBlockArticleCardReadMoreUrl) // => true

        })
        hp.backTohomePage()

  
    })  

    it('Validate the Functionality Of Business Loan Calculator For Second Page Block Level',()=>
    {
        
        
        sbp.entersecondBlockBusinessCalculatorLoanAmount()

        sbp.entersecondBlockBusinessCalculatorInterest()

        sbp.clicksecondBlockBusinessLoanCalculateButton()

        sbp.validatesecondBlockBusinessCalculatorResult()

        sbp.clicksecondBlockBusinessCalculatorRefreshButton()

  
    })  
    //.................
    
    it('Validate the Functionality Of Feature Row Payments And Its Content For Second Page Block Level',()=>
    {
        
        sbp.clicksecondBlockFeatureRowPaymentButton()
        sbp.validatesecondBlockFeatureRowPaymentContentImage()

  
    })  
    it('Validate the Functionality Of Feature Row Stripe And Its Content For Second Page Block Level',()=>
    {
        
        sbp.clicksecondBlockFeatureRowStripeButton()
        sbp.validatesecondBlockFeatureRowStripeContentImg()

  
    }) 
    it('Validate the Functionality Of File Download Of Excel For Second Page Block Level',()=>
    {
        
        sbp.clicksecondBlockFileDownloadExcelLink()
        sbp.validatesecondBlockFileDownloadExcel()

  
    }) 

    it('Validate the Functionality Of File Download Of Word For Second Page Block Level',()=>
    {
        
        sbp.clicksecondBlockFileDownloadWordLink()
        sbp.validatesecondBlockFileDownloadWord()

  
    }) 

    it('Validate the Functionality Of File Download Of Pdf For Second Page Block Level',()=>
    {
        
        sbp.clicksecondBlockFileDownloadPdfLink()
        sbp.validatesecondBlockFileDownloadPdf()

  
    }) 

    it('Validate the Functionality Of Freshbooks Careers For Second Page Block Level',()=>
    {
        
        sbp.selectCareerDepartmentsFromDropdown()
        sbp.selectCareerLocationFromDropdown()
        sbp.validateCareerDropdownSearchResult()

    }) 

    it('Validate the Functionality of Info tooltip For Second Page Block Level',()=>
    {
        sbp.clicksecondBlockInfoTooltip()
        sbp.validatesecondBlockInfoTooltipText()
    })

    it('Validate the Markup Calculator For Second Page Block Level',()=>
    {
        sbp.entersecondBlockMarkupCalculatorCost()
        sbp.entersecondBlockMarkupCalculatorMarkup()
        sbp.validatesecondBlockMarkupCalculatorMarginText()
        sbp.validatesecondBlockMarkupCalculatorRevenue()
        sbp.validatesecondBlockMarkupCalculatorProfit()
        sbp.checkclicksecondBlockMarkupCalulatorRefresh()
    })

    it('Validate the Landing Url of Sticky Banner TryItFree For Second Page Block Level',()=>
    {
        hp.clickOnRegionList()
        sbp.clicksecondBlockStickyFooterTryItFree()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.firstBlockPageBlueCtaBarTryItFreeUrl) // => true

        })
        hp.backTohomePage()
        
    })

    it('Validate the Landing Url of Sticky Banner Compare Price For Second Page Block Level',()=>
    {
        sbp.clicksecondblockStickyFooterComparePrice()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.productionPricingUrl) // => true

        })
        hp.backTohomePage()
    })

    it('Validate the Landing Url of Overview Link under Subnav-About For Second Page Block Level',()=>
    {
        sbp.clicksecondBlockSabnavAboutOverviewLink()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.secondBlockSabnavAboutOverviewLinkUrl) // => true

        })
        hp.backTohomePage()
    })
    it('Validate the Landing Url of FreshBooks Story Link under Subnav-About For Second Page Block Level',()=>
    {
        sbp.clicksecondBlockSabnavAboutFreshbookStoryLink()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.secondBlockSabnavAboutFreshbookStoryLinkUrl) // => true

        })
        hp.backTohomePage()
    })
    it('Validate the Landing Url of Philosophy Link under Subnav-About For Second Page Block Level',()=>
    {
        sbp.clicksecondBlockSabnavAboutPhilosophyLink()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.econdBlockSabnavAboutPhilosophyLinkUrl) // => true

        })
        hp.backTohomePage()
    })
    //............................................................................
    it('Validate the Landing Url of Team Link under Subnav-About For Second Page Block Level',()=>
    {
        sbp.clicksecondBlockSabnavAboutTeamLink()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.secondBlockSabnavAboutTeamLinkUrl) // => true

        })
        hp.backTohomePage()
    })
    it('Validate the Landing Url of Careers Link under Subnav-About For Second Page Block Level',()=>
    {
        sbp.clicksecondBlockSabnavAboutCareersLink()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.secondBlockSabnavAboutCareersLinkUrl) // => true

        })
        hp.backTohomePage()
    })
    it('Validate the Landing Url of Press Link under Subnav-About For Second Page Block Level',()=>
    {
        sbp.clicksecondBlockSabnavAboutPressLink()
        cy.fixture('ProductionEnvironmentPath.json').then(penvUrl => {
            cy.url().should('eq', penvUrl.secondBlockSabnavAboutPressLinkUrl) // => true

        })
        hp.backTohomePage()
    })
    //..................
    

})