/// <reference types="Cypress"/>

class ThirdBlockPage{
    constructor()
        {
            this.thirdBlockDirectBySignupEmailFeild="#email"
            this.thirdBlockDirectBySignupPasswordFeild="#password"
            this.thirdBlockDirectBySignupConfirmCheckBox="#tos-accepted"
            this.thirdBlockDirectBySignupGetStartedButton=".btn.btn-cta-green.btn-block.btn-lg.sign-up__submit"
            this.thirdBlockGetAppReviewLink="#rating-fe571d11>div>a"
            this.thirdBlockSignupWithGoogleLink=".sign-up__form>a:nth-of-type(2)"
        }

        enterthirdBlockDirectBySignupEmailFeild()
        {

            cy.get(this.thirdBlockDirectBySignupEmailFeild).scrollIntoView().should('be.visible')
            var add=((Math.floor(Math.random()*1000)+9999)).toString()
            cy.get(this.thirdBlockDirectBySignupEmailFeild).type('shailendra.rathore'+'+'+add+'@freshbooks.com')
        }

        enterthirdBlockDirectBySignupPasswordFeild()
        {
            cy.get(this.thirdBlockDirectBySignupPasswordFeild).scrollIntoView().should('be.visible')
            var num = ((Math.floor(Math.random() * 10000000)) + 99999999).toString()
            cy.get(this.thirdBlockDirectBySignupPasswordFeild).type(num)
        }

        clickthirdBlockDirectBySignupConfirmCheckBox()
        {
            cy.get(this.thirdBlockDirectBySignupConfirmCheckBox).scrollIntoView().should('be.visible')
            cy.get(this.thirdBlockDirectBySignupConfirmCheckBox).click()
        }

        clickthirdBlockDirectBySignupGetStartedButton()
        {
            cy.get(this.thirdBlockDirectBySignupGetStartedButton).scrollIntoView().should('be.visible')
            cy.get(this.thirdBlockDirectBySignupGetStartedButton).click()
        }

        clickthirdBlockGetAppReviewLink()
        {
            cy.get(this.thirdBlockGetAppReviewLink).scrollIntoView().should('be.visible')
            cy.get(this.thirdBlockGetAppReviewLink).invoke('removeAttr', 'target').click()
        }


        clickthirdBlockSignupWithGoogleLink()
        {
            cy.get(this.thirdBlockSignupWithGoogleLink).scrollIntoView().should('be.visible')
            cy.get(this.thirdBlockSignupWithGoogleLink).click()
        }
    }

    export default ThirdBlockPage