import { BasePage } from "./BasePage";

export class Navigation extends BasePage {
    static get url() {
        return "/";
    }

    static get burgerIconButton() {
        return cy.get("[id='menu-toggle']");
    }

    static get sidebar() {
        return cy.get("[id='sidebar-wrapper']");
    }

    static get historyButton() {
        return cy.get("[href='history.php#history']");
    }
}