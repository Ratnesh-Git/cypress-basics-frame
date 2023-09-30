/// <reference types="Cypress"/>

class HeaderFooterUS
{
    constructor(){
        //Header Feature Menu
        this.headerFeaturesMenu="#menu-primary-navigation-1>li:nth-of-type(1)>a"
        //#menu-primary-navigation-1>li:nth-of-type(1)>a
        //div.header__nav.pl-5>ul>li.menu-item-1302>a>span
        this.headerFeaturesSubMenu="div.header__nav.pl-5>ul>li.menu-item-1302>ul"
        this.headerFeaturesSubMenuAcconting="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:first-of-type>a>span"
        this.headerFeaturesSubMenuApps="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(3)>a>span"
        this.headerFeaturesSubMenuClients="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(5)>a>span"
        this.headerFeaturesSubMenuEstimates="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(7)>a>span"
        this.headerFeaturesSubMenuProposals="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(10)>a>span"
        this.headerFeaturesSubMenuReports="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(12)>a>span"
        this.headerFeaturesSubMenuTimeTracking="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(14)>a>span"
        this.headerFeaturesSubMenuMobile="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(2)>a>span"
        this.headerFeaturesSubMenuPayments="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(4)>a>span"
        this.headerFeaturesSubMenuProjects="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(8)>a>span"
        this.headerFeaturesSubMenuPayroll="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(6)>a>span"
        this.headerFeaturesSubMenuExpenses="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(9)>a>span"
        this.headerFeaturesSubMenuInvoicing="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(11)>a>span"
        this.headerFeaturesSubMenuMileageTracking="div.header__nav.pl-5>ul>li.menu-item-1302>ul>li:nth-of-type(13)>a>span"

        //Who It's For

        this.headerWhoItsForMenu="div.header__nav.pl-5>ul>li.menu-item-1313>a>span"
        this.headerWhoItsForSubMenu="div.header__nav.pl-5>ul>li.menu-item-1313>ul"
        this.headerWhoItsForSubMenuFreelancers="//div[@id='header__nav']/ul/li[2]/ul/li[1]/a/span[text()='Freelancers']"
        this.headerWhoItsForSubMenuSelfEmployedProfessionals="div.header__nav.pl-5>ul>li.menu-item-1313>ul>li:nth-of-type(2)"
        this.headerWhoItsForSubMenuBusinessesWithContractors="div.header__nav.pl-5>ul>li.menu-item-1313>ul>li:nth-of-type(3)"
        this.headerWhoItsForSubMenuBusinessWithEmployee="div.header__nav.pl-5>ul>li.menu-item-1313>ul>li:nth-of-type(4)"
        this.headerWhoItsForSubMenuAccountants="//div[@id='header__nav']/ul/li[2]/ul/li/a/span[text()='Accountants']"

        // Header Resources Menu

        this.headerResourcesMenu="div.header__nav.pl-5>ul>li.menu-item-1314>a>span"
        this.headerResourcesSubMenu="div.header__nav.pl-5>ul>li.menu-item-1314>ul"
        this.headerResourcesSubMenuReportsLibrary="//div[@id='header__nav']/ul/li/ul/li[1]/a/span[text()='Reports Library']"
        this.headerResourcesSubMenuSupports="//div[@id='header__nav']/ul/li/ul/li/a/span[text()='Support']"
        this.headerResourcesSubMenuWebinars="//div[@id='header__nav']/ul/li/ul/li/a/span[text()='Webinars']"
        this.headerResourcesSubMenuBlog="//div[@id='header__nav']/ul/li/ul/li/a/span[text()='Blog']"
        this.headerResourcesSubMenuCovid="//div[@id='header__nav']/ul/li/ul/li/a/span[text()='COVID-19']"
        this.headerResourcesSubMenuPartners="//div[@id='header__nav']/ul/li/ul/li/a/span[text()='Partners']"

        //Header Pricing Menu

        this.headerPricingMenu="div.header__nav.pl-5>ul>li.menu-item-1901"

        //Header ContactUS, Login, TryItFree

        this.headerContactUsMenu="div.header__ctas>a.header__contact_page.mr-3"
        this.headerLoginMenu="div.header__ctas>a.header__contact_login.mr-3.show-fbprospect"
        this.headreTryItFreeMenu="div.header__ctas>a.header__try-cta-2.py-2.px-3"

        //Footer Company Menu

        this.footerCompanyMenu=""
        this.footerCompanySubMenuAboutUs="//li[@id='menu-item-1838']/ul/li/a/span[text()='About Us']"
        this.footerCompanySubMenuBlog="//li[@id='menu-item-1838']/ul/li/a/span[text()='Blog']"
        this.footerCompanySubMenuCareers="//li[@id='menu-item-1838']/ul/li/a/span[text()='Careers']"
        this.footerCompanySubMenuContact="//li[@id='menu-item-1838']/ul/li/a/span[text()='Contact']"
        this.footerCompanySubMenuOurStory="//li[@id='menu-item-1838']/ul/li/a/span[text()='Our Story']"
        this.footerCompanySubMenuPressCenter="//li[@id='menu-item-1838']/ul/li/a/span[text()='Press Center']"

        //Footer Features Menu

        this.footerFeaturesMenu=""
        this.footerFeaturesSubMenuAllFeatures="li#menu-item-1839>ul>li:nth-of-type(1)"
        this.footerFeaturesSubMenuEstimatingSoftware="li#menu-item-1839>ul>li:nth-of-type(2)"
        this.footerFeaturesSubMenuExpensesReceipts="li#menu-item-1839>ul>li:nth-of-type(3)"
        this.footerFeaturesSubMenuFinancialsReports="li#menu-item-1839>ul>li:nth-of-type(4)"
        this.footerFeaturesSubMenuHighBilling="li#menu-item-1839>ul>li:nth-of-type(5)"
        this.footerFeaturesSubMenuInvoiceSoftware="li#menu-item-1839>ul>li:nth-of-type(6)"
        this.footerFeaturesSubMenuManagingProjects="li#menu-item-1839>ul>li:nth-of-type(7)"
        this.footerFeaturesSubMenuMobileApps="//li[@id='menu-item-1839']/ul/li/a/span[text()='Mobile Apps']"
        this.footerFeaturesSubMenuOnlinePayments="li#menu-item-1839>ul>li:nth-of-type(9)"
        this.footerFeaturesSubMenuPayroll="//li[@id='menu-item-1839']/ul/li/a/span[text()='Payroll']"
        this.footerFeaturesSubMenuPricing="//li[@id='menu-item-1839']/ul/li/a/span[text()='Pricing']"
        this.footerFeaturesSubMenuTimeTracking="li#menu-item-1839>ul>li:nth-of-type(12)"

        //Footer Who It's For

        this.footerWhoItsForMenu=""
        this.footerWhoItsForSubMenuFreelancers="//li[@id='menu-item-1840']/ul/li/a/span[text()='Freelancers']"
        this.footerWhoItsForSubMenuSelfEmployedProfessionals="//li[@id='menu-item-1840']/ul/li/a/span[text()='Self-Employed Professionals']"
        this.footerWhoItsForSubMenuBusinessesWithContractors="//li[@id='menu-item-1840']/ul/li/a/span[text()='Businesses With Contractors']"
        this.footerWhoItsForSubMenuBusinessWithEmployee="//li[@id='menu-item-1840']/ul/li/a/span[text()='Businesses With Employees']"
        this.footerWhoItsForSubMenuAccountants="//li[@id='menu-item-1840']/ul/li/a/span[text()='Accountants']"
        //"li#menu-item-1840>ul>li:nth-of-type(5)"

        //Footer Partner Menu

        this.footerPartnersMenu=""
        this.footerPartnersSubMenuAffiliateProgram="li#menu-item-1841>ul>li:nth-of-type(1)"
        this.footerPartnersSubMenuApps="//li[@id='menu-item-1841']/ul/li/a/span[text()='Apps']"
        this.footerPartnersSubMenuDevelopers="//li[@id='menu-item-1841']/ul/li/a/span[text()='Developers']"
        this.footerPartnersSubMenuEducation="//li[@id='menu-item-1841']/ul/li/a/span[text()='Education']"
        this.footerPartnersSubMenuReferralProgram="li#menu-item-1841>ul>li:nth-of-type(5)"
        this.footerPartnersSubMenuResellerProgram="li#menu-item-1841>ul>li:nth-of-type(6)"

        //Footer HelpFul links

        this.footerHelpfulLinksMenu=""
        this.footerHelpfulLinksSubMenuAccountingSoftware="li#menu-item-1842>ul>li:nth-of-type()"
        this.footerHelpfulLinksSubMenuAccountingTemplates="li#menu-item-1842>ul>li:nth-of-type(5)"
        this.footerHelpfulLinksSubMenuInvoiceTemplate="li#menu-item-1842>ul>li:nth-of-type(4)"
        this.footerHelpfulLinksSubMenuLogin="//li[@id='menu-item-1842']/ul/li/a/span[text()='Login']"
        //"li#menu-item-1842>ul>li:nth-of-type(4)"
        this.footerHelpfulLinksSubMenuQuickbooksAlternative="li#menu-item-1842>ul>li:nth-of-type(5)"
        this.footerHelpfulLinksSubMenuResourceHub="li#menu-item-1842>ul>li:nth-of-type(7)"
        this.footerHelpfulLinksSubMenuSitemap="//li[@id='menu-item-1842']/ul/li/a/span[text()='Sitemap']"
        this.footerHelpfulLinksSubMenuHelpCenter="li#menu-item-1842>ul>li:nth-of-type(2)"
        this.footerHelpfulLinksSubMenuSupportWebinars="li#menu-item-1842>ul>li:nth-of-type(3)"
        this.footerHelpfulLinksSubMenuTools="//li[@id='menu-item-1842']/ul/li/a/span[text()='Tools']"


        //Footer Policies

        this.footerPoliciesMenu=""
        this.footerPoliciesSubMenuAccessibility="//li[@id='menu-item-1843']/ul/li/a/span[text()='Accessibility']"
        this.footerPoliciesSubMenuprivacyPolicy="li#menu-item-1843>ul>li:nth-of-type(2)"
        this.footerPoliciesSubMenuSecuritySafegaurds="li#menu-item-1843>ul>li:nth-of-type(3)"
        this.footerPoliciesSubMenuTermsOfService="li#menu-item-1843>ul>li:nth-of-type(4)"

        //Without DirectBuy Home Page Header Pricing Menu
        this.WithoutDirectBuyHeaderPricing="#header__nav > #header__nav-menu > .menu-item-1901 > a > span"
        
    }

        hoverAndClickOnHeaderAccountingSubMenu()
        {
            
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            cy.get(this.headerFeaturesSubMenuAcconting).should('be.visible')
            cy.get(this.headerFeaturesSubMenuAcconting).click()

        }

        hoverAndClickOnHeaderMobileSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            cy.get(this.headerFeaturesSubMenuMobile).should('be.visible')
            cy.get(this.headerFeaturesSubMenuMobile).click()
        }

        hoverAndClickOnHeaderAppsSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            cy.get(this.headerFeaturesSubMenuApps).should('be.visible')
            cy.get(this.headerFeaturesSubMenuApps).click()
        }

        hoverAndClickOnHeaderPaymentsSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            cy.get(this.headerFeaturesSubMenuPayments).should('be.visible')
            cy.get(this.headerFeaturesSubMenuPayments).click()
        }

        hoverAndClickOnHeaderClientsSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            cy.get(this.headerFeaturesSubMenuClients).should('be.visible')
            cy.get(this.headerFeaturesSubMenuClients).click()
        }

        hoverAndClickOnHeaderProjectsSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            cy.get(this.headerFeaturesSubMenuProjects).should('be.visible')
            cy.get(this.headerFeaturesSubMenuProjects).click()
        }

        hoverAndClickOnHeaderEstimatesSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            cy.get(this.headerFeaturesSubMenuEstimates).should('be.visible')
            cy.get(this.headerFeaturesSubMenuEstimates).click()
        }

        hoverAndClickOnHeaderPayrollSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            cy.get(this.headerFeaturesSubMenuPayroll).should('be.visible')
            cy.get(this.headerFeaturesSubMenuPayroll).click()
        }

        hoverAndClickOnHeaderProposalsSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            cy.get(this.headerFeaturesSubMenuProposals).should('be.visible')
            cy.get(this.headerFeaturesSubMenuProposals).click()
        }

        hoverAndClickOnHeaderExpensesSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            cy.get(this.headerFeaturesSubMenuExpenses).should('be.visible')
            cy.get(this.headerFeaturesSubMenuExpenses).click()
        }

        hoverAndClickOnHeaderReportsSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            //cy.get(this.headerFeaturesSubMenuReports).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesSubMenuReports).click({ force: true })

        }

        hoverAndClickOnHeaderInvoicingSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            cy.get(this.headerFeaturesSubMenuInvoicing).should('be.visible')
            cy.get(this.headerFeaturesSubMenuInvoicing).click()
        }

        hoverAndClickOnHeaderTimeTrackingSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            //cy.get(this.headerFeaturesSubMenuTimeTracking).should('be.visible')
            cy.get(this.headerFeaturesSubMenuTimeTracking).click({ force: true })
        }

        hoverAndClickOnHeaderMileageTrackingSubMenu()
        {
            cy.get(this.headerFeaturesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerFeaturesMenu).trigger('mouseover')
            cy.get(this.headerFeaturesSubMenu).invoke('show')
            //cy.get(this.headerFeaturesSubMenuMileageTracking).should('be.visible')
            cy.get(this.headerFeaturesSubMenuMileageTracking).click({ force: true })
        }

        //header WhoItsFor

        hoverAndClickOnHeaderFreelancersSubMenu()
        {
            cy.get(this.headerWhoItsForMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerWhoItsForMenu).trigger('mouseover')
            cy.get(this.headerWhoItsForSubMenu).invoke('show')
            cy.xpath(this.headerWhoItsForSubMenuFreelancers).should('be.visible')
            cy.xpath(this.headerWhoItsForSubMenuFreelancers).click()
        }

        hoverAndClickOnHeaderSelfEmployedSubMenu()
        {
            cy.get(this.headerWhoItsForMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerWhoItsForMenu).trigger('mouseover')
            cy.get(this.headerWhoItsForSubMenu).invoke('show')
            cy.get(this.headerWhoItsForSubMenuSelfEmployedProfessionals).should('be.visible')
            cy.get(this.headerWhoItsForSubMenuSelfEmployedProfessionals).click()
        }

        hoverAndClickOnHeaderBusinessWithContractorsSubMenu()
        {
            cy.get(this.headerWhoItsForMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerWhoItsForMenu).trigger('mouseover')
            cy.get(this.headerWhoItsForSubMenu).invoke('show')
            cy.get(this.headerWhoItsForSubMenuBusinessesWithContractors).should('be.visible')
            cy.get(this.headerWhoItsForSubMenuBusinessesWithContractors).click()
        }

        hoverAndClickOnHeaderBusinessWithEmployeesSubMenu()
        {
            cy.get(this.headerWhoItsForMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerWhoItsForMenu).trigger('mouseover')
            cy.get(this.headerWhoItsForSubMenu).invoke('show')
            cy.get(this.headerWhoItsForSubMenuBusinessWithEmployee).should('be.visible')
            cy.get(this.headerWhoItsForSubMenuBusinessWithEmployee).click()
        }

        hoverAndClickOnHeaderAccountantsSubMenu()
        {
            cy.get(this.headerWhoItsForMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerWhoItsForMenu).trigger('mouseover')
            cy.get(this.headerWhoItsForSubMenu).invoke('show')
            cy.xpath(this.headerWhoItsForSubMenuAccountants).should('be.visible')
            cy.xpath(this.headerWhoItsForSubMenuAccountants).click()
        }

        // Header Resources

        hoverAndClickOnHeaderReportsLibrarySubMenu()
        {
            cy.get(this.headerResourcesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerResourcesMenu).trigger('mouseover')
            cy.get(this.headerResourcesSubMenu).invoke('show')
            cy.xpath(this.headerResourcesSubMenuReportsLibrary).should('be.visible')
            cy.xpath(this.headerResourcesSubMenuReportsLibrary).click()
        }

        hoverAndClickOnHeaderBlogSubMenu()
        {
            cy.get(this.headerResourcesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerResourcesMenu).trigger('mouseover')
            cy.get(this.headerResourcesSubMenu).invoke('show')
            cy.xpath(this.headerResourcesSubMenuBlog).should('be.visible')
            cy.xpath(this.headerResourcesSubMenuBlog).click()
        }

        hoverAndClickOnHeaderSupportSubMenu()
        {
            cy.get(this.headerResourcesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerResourcesMenu).trigger('mouseover')
            cy.get(this.headerResourcesSubMenu).invoke('show')
            cy.xpath(this.headerResourcesSubMenuSupports).should('be.visible')
            cy.xpath(this.headerResourcesSubMenuSupports).click()
        }

        hoverAndClickOnHeaderCovidSubMenu()
        {
            cy.get(this.headerResourcesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerResourcesMenu).trigger('mouseover')
            cy.get(this.headerResourcesSubMenu).invoke('show')
            cy.xpath(this.headerResourcesSubMenuCovid).should('be.visible')
            cy.xpath(this.headerResourcesSubMenuCovid).click()
        }

        hoverAndClickOnHeaderWebinarsSubMenu()
        {
            cy.get(this.headerResourcesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerResourcesMenu).trigger('mouseover')
            cy.get(this.headerResourcesSubMenu).invoke('show')
            cy.xpath(this.headerResourcesSubMenuWebinars).should('be.visible')
            cy.xpath(this.headerResourcesSubMenuWebinars).click()
        }

        hoverAndClickOnHeaderPartnersSubMenu()
        {
            cy.get(this.headerResourcesMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerResourcesMenu).trigger('mouseover')
            cy.get(this.headerResourcesSubMenu).invoke('show')
            cy.xpath(this.headerResourcesSubMenuPartners).should('be.visible')
            cy.xpath(this.headerResourcesSubMenuPartners).click()
        }

        //Header Pricing

        clickOnHeaderPricingMenu()
        {
            cy.get(this.headerPricingMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerPricingMenu).click()
        }

        clickOnHeaderContactUsMenu()
        {
            cy.get(this.headerContactUsMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerContactUsMenu).click()
        }

        clickOnHeaderLoginMenu()
        {
            cy.get(this.headerLoginMenu).scrollIntoView().should('be.visible')
            cy.get(this.headerLoginMenu).click()

        }

        clickOnHeaderTryItFreeMenu()
        {
            cy.get(this.headreTryItFreeMenu).scrollIntoView().should('be.visible')
            cy.get(this.headreTryItFreeMenu).click()
        }

        // Footer Methods

        clickOnFooterAboutUsSubMenu()
        {
            cy.xpath(this.footerCompanySubMenuAboutUs).scrollIntoView().should('be.visible')
            cy.xpath(this.footerCompanySubMenuAboutUs).click()
        }

        clickOnFooterBlogSubMenu()
        {
            cy.xpath(this.footerCompanySubMenuBlog).scrollIntoView().should('be.visible')
            cy.xpath(this.footerCompanySubMenuBlog).click()
        }

        clickOnFooterCareersSubMenu()
        {
            cy.xpath(this.footerCompanySubMenuCareers).scrollIntoView().should('be.visible')
            cy.xpath(this.footerCompanySubMenuCareers).click()
        }

        clickOnFooterContactSubMenu()
        {
            cy.xpath(this.footerCompanySubMenuContact).scrollIntoView().should('be.visible')
            cy.xpath(this.footerCompanySubMenuContact).click()
        }

        clickOnFooterOurStorySubMenu()
        {
            cy.xpath(this.footerCompanySubMenuOurStory).scrollIntoView().should('be.visible')
            cy.xpath(this.footerCompanySubMenuOurStory).click()
        }

        clickOnFooterPressCenterSubMenu()
        {
            cy.xpath(this.footerCompanySubMenuPressCenter).scrollIntoView().should('be.visible')
            cy.xpath(this.footerCompanySubMenuPressCenter).click()
        }

        // Footer Features

        clickOnFooterAllFeaturesSubMenu()
        {
            cy.get(this.footerFeaturesSubMenuAllFeatures).scrollIntoView().should('be.visible')
            cy.get(this.footerFeaturesSubMenuAllFeatures).click()
        }

        clickOnFooterEstimatingSoftwareSubMenu()
        {
            cy.get(this.footerFeaturesSubMenuEstimatingSoftware).scrollIntoView().should('be.visible')
            cy.get(this.footerFeaturesSubMenuEstimatingSoftware).click()
        }

        clickOnFooterExpenseReceiptsSubMenu()
        {
            cy.get(this.footerFeaturesSubMenuExpensesReceipts).scrollIntoView().should('be.visible')
            cy.get(this.footerFeaturesSubMenuExpensesReceipts).click()
        }

        clickOnFooterFinancialsReportsSubMenu()
        {
            cy.get(this.footerFeaturesSubMenuFinancialsReports).scrollIntoView().should('be.visible')
            cy.get(this.footerFeaturesSubMenuFinancialsReports).click()
        }

        clickOnFooterHighBillingSubMenu()
        {
            cy.get(this.footerFeaturesSubMenuHighBilling).scrollIntoView().should('be.visible')
            cy.get(this.footerFeaturesSubMenuHighBilling).click()
        }

        clickOnFooterInvoiceSoftwareSubMenu()
        {
            cy.get(this.footerFeaturesSubMenuInvoiceSoftware).scrollIntoView().should('be.visible')
            cy.get(this.footerFeaturesSubMenuInvoiceSoftware).click()
        }

        clickOnFooterManagingProjectsSubMenu()
        {
            cy.get(this.footerFeaturesSubMenuManagingProjects).scrollIntoView().should('be.visible')
            cy.get(this.footerFeaturesSubMenuManagingProjects).click()
        }

        clickOnFooterMobileAppsSubMenu()
        {
            cy.xpath(this.footerFeaturesSubMenuMobileApps).scrollIntoView().should('be.visible')
            cy.xpath(this.footerFeaturesSubMenuMobileApps).click()
        }

        clickOnFooterOnlinePaymentsSubMenu()
        {
            cy.get(this.footerFeaturesSubMenuOnlinePayments).scrollIntoView().should('be.visible')
            cy.get(this.footerFeaturesSubMenuOnlinePayments).click()
        }

        clickOnFooterPayrollSubMenu()
        {
            cy.xpath(this.footerFeaturesSubMenuPayroll).scrollIntoView().should('be.visible')
            cy.xpath(this.footerFeaturesSubMenuPayroll).click()
        }

        clickOnFooterPricingSubMenu()
        {
            cy.xpath(this.footerFeaturesSubMenuPricing).scrollIntoView().should('be.visible')
            cy.xpath(this.footerFeaturesSubMenuPricing).click()
        }

        clickOnFooterTimeTrackingSubMenu()
        {
            cy.get(this.footerFeaturesSubMenuTimeTracking).scrollIntoView().should('be.visible')
            cy.get(this.footerFeaturesSubMenuTimeTracking).click()
        }

        //Footer WhoItsFor
        clickOnFooterFreelancersSubMenu()
        {
            cy.xpath(this.footerWhoItsForSubMenuFreelancers).scrollIntoView().should('be.visible')
            cy.xpath(this.footerWhoItsForSubMenuFreelancers).click()
        }

        clickOnFooterSelfEmployedSubMenu()
        {
            cy.xpath(this.footerWhoItsForSubMenuSelfEmployedProfessionals).scrollIntoView().should('be.visible')
            cy.xpath(this.footerWhoItsForSubMenuSelfEmployedProfessionals).click()

        }

        clickOnFooterBusinessWithContractorsSubMenu()
        {
            cy.xpath(this.footerWhoItsForSubMenuBusinessesWithContractors).scrollIntoView().should('be.visible')
            cy.xpath(this.footerWhoItsForSubMenuBusinessesWithContractors).click()
        }

        clickOnFooterBusinessWithEmployeesSubMenu()
        {
            cy.xpath(this.footerWhoItsForSubMenuBusinessWithEmployee).scrollIntoView().should('be.visible')
            cy.xpath(this.footerWhoItsForSubMenuBusinessWithEmployee).click()
        }

        clickOnFooterAccountantsSubMenu()
        {
            cy.xpath(this.footerWhoItsForSubMenuAccountants).scrollIntoView().should('be.visible')
            cy.xpath(this.footerWhoItsForSubMenuAccountants).click()
        }
        // Footer Partners

        clickOnFooterAffiliateProgramSubMenu()
        {
            cy.get(this.footerPartnersSubMenuAffiliateProgram).scrollIntoView().should('be.visible')
            cy.get(this.footerPartnersSubMenuAffiliateProgram).click()
        }

        clickOnFooterAppsSubMenu()
        {
            cy.xpath(this.footerPartnersSubMenuApps).scrollIntoView().should('be.visible')
            cy.xpath(this.footerPartnersSubMenuApps).click()
        }

        clickOnFooterDevelopersSubMenu()
        {
            cy.xpath(this.footerPartnersSubMenuDevelopers).scrollIntoView().should('be.visible')
            cy.xpath(this.footerPartnersSubMenuDevelopers).click()

        }

        clickOnFooterEducationSubMenu()
        {
            cy.xpath(this.footerPartnersSubMenuEducation).scrollIntoView().should('be.visible')
            cy.xpath(this.footerPartnersSubMenuEducation).click()
        
        }

        clickOnFooterReferralProgramSubMenu()
        {
            cy.get(this.footerPartnersSubMenuReferralProgram).scrollIntoView().should('be.visible')
            cy.get(this.footerPartnersSubMenuReferralProgram).click()
        }

        clickOnFooterResellerProgramSubMenu()
        {
            cy.get(this.footerPartnersSubMenuResellerProgram).scrollIntoView().should('be.visible')
            cy.get(this.footerPartnersSubMenuResellerProgram).click()
        }

        //Footer Helpful Links

        clickOnFooterAccountingSoftwareSubMenu()
        {
            cy.get(this.footerHelpfulLinksSubMenuAccountingSoftware).scrollIntoView().should('be.visible')
            cy.get(this.footerHelpfulLinksSubMenuAccountingSoftware).click()
        }

        clickOnFooterAccountingTemplatesSubMenu()
        {
            cy.get(this.footerHelpfulLinksSubMenuAccountingTemplates).scrollIntoView().should('be.visible')
            cy.get(this.footerHelpfulLinksSubMenuAccountingTemplates).click()
        }

        clickOnFooterInvoiceTemplateSubMenu()
        {
            cy.get(this.footerHelpfulLinksSubMenuInvoiceTemplate).scrollIntoView().should('be.visible')
            cy.get(this.footerHelpfulLinksSubMenuInvoiceTemplate).click()
        }

        clickOnFooterLoginSubMenu()
        {
            cy.xpath(this.footerHelpfulLinksSubMenuLogin).scrollIntoView().should('be.visible')
            cy.xpath(this.footerHelpfulLinksSubMenuLogin).click()
            
        }

        clickOnFooterQuickBooksAlternativeSubMenu()
        {
            cy.get(this.footerHelpfulLinksSubMenuQuickbooksAlternative).scrollIntoView().should('be.visible')
            cy.get(this.footerHelpfulLinksSubMenuQuickbooksAlternative).click()
        }

        clickOnFooterResourceHubSubMenu()
        {
            cy.get(this.footerHelpfulLinksSubMenuResourceHub).scrollIntoView().should('be.visible')
            cy.get(this.footerHelpfulLinksSubMenuResourceHub).click()
        }

        clickOnFooterSitemapSubMenu()
        {
            cy.xpath(this.footerHelpfulLinksSubMenuSitemap).scrollIntoView().should('be.visible')
            cy.xpath(this.footerHelpfulLinksSubMenuSitemap).click()
        }

        clickOnFooterHelpCenterSubMenu()
        {
            cy.xpath(this.footerHelpfulLinksSubMenuHelpCenter).scrollIntoView().should('be.visible')
            cy.xpath(this.footerHelpfulLinksSubMenuHelpCenter).click()
        }

        clickOnFooterSupportWebinarsSubMenu()
        {
            cy.get(this.footerHelpfulLinksSubMenuSupportWebinars).scrollIntoView().should('be.visible')
            cy.get(this.footerHelpfulLinksSubMenuSupportWebinars).click()
        }

        clickOnFooterToolsSubMenu()
        {
            cy.xpath(this.footerHelpfulLinksSubMenuTools).scrollIntoView().should('be.visible')
            cy.xpath(this.footerHelpfulLinksSubMenuTools).click()
        }

        // Footer Policies
        clickOnFooterAccessibilitySubMenu()
        {
            cy.xpath(this.footerPoliciesSubMenuAccessibility).scrollIntoView().should('be.visible')
            cy.xpath(this.footerPoliciesSubMenuAccessibility).click()
        }

        clickOnFooterPrivacyPolicySubMenu()
        {
            cy.get(this.footerPoliciesSubMenuprivacyPolicy).scrollIntoView().should('be.visible')
            cy.get(this.footerPoliciesSubMenuprivacyPolicy).click()
        }

        clickOnFooterSecuritySafegaurdsSubMenu()
        {
            cy.get(this.footerPoliciesSubMenuSecuritySafegaurds).scrollIntoView().should('be.visible')
            cy.get(this.footerPoliciesSubMenuSecuritySafegaurds).click()
        }

        clickOnFooterTermsOfServiceSubMneu()
        {
            cy.get(this.footerPoliciesSubMenuTermsOfService).scrollIntoView().should('be.visible')
            cy.get(this.footerPoliciesSubMenuTermsOfService).click()
        }
        clickOnHeaderDirectBuyPricingMenu()
        {
            cy.get(this.WithoutDirectBuyHeaderPricing).scrollIntoView().should('be.visible')
            cy.get(this.WithoutDirectBuyHeaderPricing).click()
        }


}

export default HeaderFooterUS