import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    static get url() {
        return "/profile.php#login";
    }

    static get demoUsername() {
        return "John Doe";
    }

    static get demoPassword() {
        return "ThisIsNotAPassword";
    }

    static get usernameField() {
        return cy.get("[id='txt-username']");
    }

    static get passwordField() {
        return cy.get("[id='txt-password']");
    }

    static get loginButton() {
        return cy.get("[id='btn-login']");
    }

}