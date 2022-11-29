import { AppView } from "./app-view.js";
export class MensagemView extends AppView {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
