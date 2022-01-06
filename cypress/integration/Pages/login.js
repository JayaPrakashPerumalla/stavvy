import selectors from "../Selectors/login"
export class Login {

    navigateToUrl(){
        cy.visit(selectors.url);
    }

    loginToApplication(userName, Password)
    {
        this.enterUserName(userName);
        this.enterPassword(Password);
        this.clickOnLogin();
    }

    enterUserName(userName)
    {
        cy.get(selectors.usernameTxtbx).type(userName);
    }

    enterPassword(Password)
    {
        cy.get(selectors.passwordTxtbx).type(Password);
    }

    clickOnLogin()
    {
        cy.get(selectors.loginBttn).click();
    }
}