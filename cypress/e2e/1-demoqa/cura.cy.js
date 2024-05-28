import { HomePage } from "../../pageObjects/HomePage";
import { LoginPage } from "../../pageObjects/LoginPage";
import { AppointmentPage } from "../../pageObjects/AppointmentPage";
import { Navigation } from "../../pageObjects/Navigation";
import { HistoryPage } from "../../pageObjects/HistoryPage";

describe("Cura Healthcare demo", ()=> {
    context("MD2 Scenarios", ()=> {

        beforeEach(()=> {
            HomePage.visit();
            HomePage.appointmentButton.click();

            const username = LoginPage.demoUsername;
            const password = LoginPage.demoPassword;

            LoginPage.usernameField.type(username);
            LoginPage.passwordField.type(password);
            LoginPage.loginButton.click();

        });

        it("Make an appointment", ()=> {
            
            const facility = "Seoul CURA Healthcare Center";
            const healthcareProgram = "Medicaid";
            const day = "30";
            const comment = "CURA Healthcare Service";

            AppointmentPage.facilityDropdownMenu.select(facility);
            AppointmentPage.applyReadmissionCheckbox.click();
            AppointmentPage.healthcareProgramContainer.contains(healthcareProgram).click();
            AppointmentPage.calendarWidget.click();
            AppointmentPage.daysContainer.contains(day).click();
            AppointmentPage.body.click();
            AppointmentPage.commentField.type(comment);
            AppointmentPage.bookAppontmentButton.click();

            cy.wait(200);

            AppointmentPage.confirmationContainer.contains(facility);
            AppointmentPage.confirmationContainer.contains(healthcareProgram);
            AppointmentPage.confirmationContainer.contains(day);
            AppointmentPage.confirmationContainer.contains(comment);

        });

        it.only("Appointment history empty", ()=> {
            Navigation.burgerIconButton.click();
            Navigation.sidebar.should("have.class", "active");
            Navigation.historyButton.click();
            HistoryPage.container.contains("No appointment.");
        });
    });
});