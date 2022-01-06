import selector from '../Selectors/orders';
import { Files } from '../Pages/file';

const files = new Files();
export class Orders {
    enterSettlementDueDate(date) {
        var dateSplitted = date.split('/');
        cy.xpath(selector.enterSettlementDueDate).click();
        cy.xpath('//div[text()="'+dateSplitted[1]+'"]').click();
    }

    selectSettlementVendor(vendorName) {
        cy.xpath(selector.settlementVendorDropDown).click();
        cy.xpath('//li//span[text()="'+vendorName+'"]').click();
    }

    addOrderOfSettlementType(date, vendorName) {
        cy.xpath(selector.selectSettlementOrderType).click();
        this.selectSettlementVendor(vendorName);
        files.clickContinueButton();
    }
}