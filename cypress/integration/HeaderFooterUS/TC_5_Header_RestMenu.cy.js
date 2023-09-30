/// <reference types="Cypress"/>

import HeaderFooterUS from "../../PageClasses/HeaderFooterUS";
import HomePage from "../../PageClasses/HomePage";

describe('Validate Header ContactUS, Login, TryItFree Menu',()=>{

    const hp = new HomePage()
    const hf=new HeaderFooterUS()

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      })
      
    it('Validate ContactUS Menu Landing Url',()=>
    {
        
        
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                hp.goToStaging(envUrl.stagingUrl)
                hp.clickOnRegionList()
            })
        hf.clickOnHeaderContactUsMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerContactUsMenuUrl) // => true
            })

        hp.backTohomePage()


        
    })   

    it('Validate Login Menu Landing Url',()=>
    {
        
        
        hf.clickOnHeaderLoginMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerLoginMenuUrl) // => true
            })

        hp.backTohomePage()


        
    }) 
    
    it('Validate TryItFree Menu Landing Url',()=>
    {
        
        
        hf.clickOnHeaderTryItFreeMenu()

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                    cy.url().should('eq', envUrl.headerTryItFreeMenuUrl) // => true
            })

    }) 

   
})