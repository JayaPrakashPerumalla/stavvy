import selectors from "../Selectors/meetings"

export class Meetings {

    clickOnCreateMeeting()
    {
        cy.get(selectors.createMeetingBttn).click();
    }

    selectPropertyAddress()
    {
        this.enterPropertyInformation();
        this.enterStreetName();
        this.enterStreetNumber();
        this.enterPostalCode();
    }

    enterPropertyInformation(address="San Francisco, CA, USA")
    {
        cy.get(selectors.propertyAddressTextbx).type("San Francisco, CA, USA");
        cy.xpath('//div[text()="'+ address +'"]').click();
    }

    enterStreetNumber(streetNumber="8"){
        cy.get(selectors.streetNumber).type(streetNumber);
    }

    enterStreetName(streetName="Baking Street"){
        cy.get(selectors.streetName).type(streetName);
    }

    enterPostalCode(postalCode="000000"){
        cy.get(selectors.postalCode).type(postalCode)
    }

    enterMeetingInfo()
    {
        this.selectMeetingDate();
        this.selectStartime();
        this.selectTimeZone();
        this.selectNotary();
    }

    selectMeetingDate(date="12/28/2021")
    {
        cy.get(selectors.meetingDate).type(date);  
    }

    selectStartime(time="5:30 PM")
    {
        cy.xpath(selectors.startTime).click();
        cy.xpath('//li//span[text()="' + time + '"]').click();
    }

    selectTimeZone(timeZone= "New York (GMT-05:00)")
    {
        cy.xpath(selectors.timeZone).click();
        cy.xpath('//li//span[text()="' + timeZone+ '"]').click();
    }

    selectNotary(notary = "Sai Kiran (saikiran.cheera@qualitlabs.com)")
    {
        cy.get(selectors.notary).click();
        cy.xpath('//span//div[text()="'+ notary +'"]').click();
    }

    enterSignerInfo()
    {
        this.enterFirstName();
        this.enterLastName();
        this.enterPhoneNumber();
        this.enterEmail();
    }

    enterFirstName()
    {
        cy.get(selectors.fisrtnameTxtbx).type("abc");
    }

    enterLastName()
    {
        cy.get(selectors.lastNameTxtbx).type("abc");
    }

    enterPhoneNumber()
    {
        cy.get(selectors.phoneNumberTxtbx).type("0000000000");
    }

    enterEmail()
    {
        cy.get(selectors.emailTxtbx).type("abc@gmail.com");
    }
    
    clickOnCreateClosing()
    {
        cy.get(selectors.createClosingBttn).click();
    }
}