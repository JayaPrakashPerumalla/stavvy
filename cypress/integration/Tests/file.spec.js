/// <reference types="cypress" />
import { Files } from "../Pages/file";
import { Login } from "../Pages/login";
import { Orders } from "../Pages/orders";

const files = new Files();
const login = new Login();
const orders = new Orders();


describe("stavvy application" , ()=>{

    before("Login",()=>{
        login.navigateToUrl();
        login.loginToApplication("prakash.perumalla+1@qualitlabs.com", "Qualitlabs123");
    });
    
    it.only("Create File", ()=> {
        files.enterBasicInfo("23","1/30/2022","150","jaya Prakash     perumalla ","100","23700 West Bluff Road, Channahon, IL, USA");
        files.enterBorrowerAddress("jaya", "prakash", "prakash.perumalla+2@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
        orders.addOrderOfSettlementType("1/31/2022", "qualitlabs.");
        files.clickCreateFileButtonOnReviewOfAFile();
    })

    

})