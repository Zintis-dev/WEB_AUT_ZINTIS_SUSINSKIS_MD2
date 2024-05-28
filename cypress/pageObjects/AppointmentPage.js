import { BasePage } from "./BasePage";

export class AppointmentPage extends BasePage {
    static get url() {
        return "/#appointment";
    }

    static get body() {
        return cy.get("body");
    }

    static get facilityDropdownMenu() {
        return cy.get("[id='combo_facility']");
    }

    static get applyReadmissionCheckbox() {
        return cy.get("[id='chk_hospotal_readmission']");
    }

    static get healthcareProgramContainer() {
        return cy.get("[class='radio-inline']");
    }

    static get calendarWidget() {
        return cy.get("[class='glyphicon glyphicon-calendar']");
    }

    static get daysContainer() {
        return cy.get("[class='day']");
    }

    static get commentField() {
        return cy.get("[id='txt_comment']");
    }

    static get bookAppontmentButton() {
        return cy.get("[id='btn-book-appointment']");
    }

    static get confirmationContainer() {
        return cy.get("[class='col-xs-offset-2 col-xs-8']");
    }
}