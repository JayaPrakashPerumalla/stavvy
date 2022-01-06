/// <reference types="cypress" />
import { Files } from "../Pages/file";

const files = new Files();


describe("stavvy application" , ()=>{

    before("Login",()=>{
        login.navigateToUrl();
        login.loginToApplication();
    });
    
    it.only("Create File", ()=> {
        files.enterBasicInfo("23","12/29/2021","150","7 day verification user","100","23700 West Bluff Road, Channahon, IL, USA");
        files.enterBorrowerAddress("jaya", "prakash", "prakash.perumalla+2@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
        orders.addOrderOfSettlementType("12/31/2021", "Qualitlabs123");
        files.clickCreateFileButtonOnReviewOfAFile();
    })

    

})