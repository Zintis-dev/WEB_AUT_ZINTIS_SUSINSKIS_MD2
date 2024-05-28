import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    static get url() {
        return "/";
    }

    static get appointmentButton() {
        return cy.get("[id='btn-make-appointment']");
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