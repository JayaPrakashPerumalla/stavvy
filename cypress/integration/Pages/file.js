import selectors from "../Selectors/File"
export class Files{
createdFile = "";
    navigateToFiles() {
        cy.xpath(selectors.filesSection).click()
    }

    clickCreateFileButton() {
        cy.get(selectors.CreateFileButton).click()
    }

    selectPurchaseLoanType() {
        cy.get(selectors.purachaseLoanType).click()
    }

    selectLoanProcessor(loanProcessor) {
        cy.xpath(selectors.clickLoanProcessorDropDown).click()
        cy.get(selectors.searchForLoanProcessor).type(loanProcessor);
        cy.xpath('//li//span[text()="'+loanProcessor+'"]').click();
    }

    enterLoanNumber(loanNumber) {
        cy.xpath(selectors.enterLoanNumber).type(loanNumber);
    }

    enterLoanAmount(loanAmount) {
        cy.get(selectors.enterLoanAmount).type(loanAmount);
    }

    enterPurchasePrice(purchasePrice) {
        cy.get(selectors.enterPurchasePrice).type(purchasePrice);
    }

    enterPropertyAddress(address) {
        cy.xpath(selectors.propertyAddressInputField).type(address);
        cy.xpath('//div[text()="'+address+'"]').click();
        cy.wait(1000);
    }

    selectClosingDate(date) {
        cy.xpath('(//input[@placeholder="MM/DD/YYYY"])[1]').type(date);
    }

    clickContinueButton() {
        cy.xpath(selectors.continueButtion).click();
    }

    clickCreateFileButtonOnReviewOfAFile() {
        cy.xpath(selectors.createFileButtonInReviewPageOfFile).click();
    }

    verifyCreatedFile(address) {
        cy.xpath('//div[text()="'+address+'"]').click();
    }

    enterBasicInfo(loanNumber, settlementClosingDate, purchasePrice, loanProcessor, loanAmount, address) {
        this.navigateToFiles();
        this.clickCreateFileButton();
        this.enterLoanNumber(loanNumber);
        this.selectClosingDate(settlementClosingDate);
        this.enterPurchasePrice(purchasePrice);
        this.selectLoanProcessor(loanProcessor);
        this.enterLoanAmount(loanAmount);
        this.enterPropertyAddress(address);
        this.clickContinueButton();
    }

    enterBorrowerAddress(firstName, lastName, email, phoneNumber, SSN, borrowerAddress) {
        cy.get(selectors.enterBorrowerFirstName).type(firstName);
        cy.get(selectors.enterBorrowerLastName).type(lastName);
        cy.get(selectors.enterBorrowerEmail).type(email);
        cy.xpath(selectors.enterPhoneNumberOfBorrower).clear();
        cy.xpath(selectors.enterPhoneNumberOfBorrower).type(phoneNumber);
        cy.xpath(selectors.enterSSNOfBorrower).clear();
        cy.xpath(selectors.enterSSNOfBorrower).type(SSN);
        cy.get(selectors.enterBorrowerAddress).type(borrowerAddress);
        cy.xpath('//div[text()="'+borrowerAddress+'"]').click();
        this.clickContinueButton();
    }











}