export class Invoice {
    // readonly client : string;
    // private details: string;
    // public  amount : number;
    /* modifiers are required for this shorthand */
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ₱${this.amount} for ${this.details}`;
    }
}
