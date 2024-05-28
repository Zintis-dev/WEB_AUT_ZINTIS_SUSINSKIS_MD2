import { BasePage } from "./BasePage";

export class HistoryPage extends BasePage {
    static get url() {
        return "/history.php#history";
    }

    static get container() {
        return cy.get("[class='col-sm-12 text-center']");
    }
}