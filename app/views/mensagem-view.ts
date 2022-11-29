import { AppView } from "./app-view.js";

export class MensagemView extends AppView<string> {
    template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }    
}