import selectors from "../Selectors/login"
export class Login {

    navigateToUrl(){
        cy.visit(selectors.url);
    }

    loginToApplication()
    {
        this.enterUserName();
        this.enterPassword();
        this.clickOnLogin();
    }

    enterUserName()
    {
        cy.get(selectors.usernameTxtbx).type("saikiran.cheera@qualitlabs.com");
    }

    enterPassword()
    {
        cy.get(selectors.passwordTxtbx).type("p@19051997");
    }

    clickOnLogin()
    {
        cy.get(selectors.loginBttn).click();
    }
}