/// <reference types="cypress" />

import { Login } from "../Pages/login";
import { Meetings } from "../Pages/meetings";
import { Files } from "../Pages/file";
import { Orders } from "../Pages/orders";

const login = new Login();
const meetings = new Meetings();
const files = new Files();
const orders = new Orders();


describe("stavvy application" , ()=>{

    before("Login",()=>{
        login.navigateToUrl();
        login.loginToApplication();
    });

    it("Create New Meeting ", ()=>{
        meetings.clickOnCreateMeeting();
        meetings.selectPropertyAddress();
        meetings.enterMeetingInfo();
        meetings.enterSignerInfo();
        meetings.clickOnCreateClosing();
    } );

    it.only("Create File", ()=> {
        files.enterBasicInfo("23","12/29/2021","150","7 day verification user","100","23700 West Bluff Road, Channahon, IL, USA");
        files.enterBorrowerAddress("jaya", "prakash", "prakash.perumalla+2@qualitlabs.com","1234567890", "345676879", "90 Bedford Street, New York, NY, USA");
        orders.addOrderOfSettlementType("12/31/2021", "Qualitlabs123");
        files.clickCreateFileButtonOnReviewOfAFile();
    })

    

})