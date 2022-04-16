export class Invoice {
    // readonly client : string;
    // private details: string;
    // public  amount : number;

    /* modifiers are required for this shorthand */
    constructor(
        readonly client : string,
        private  details: string,
        public   amount : number
    ) {}

    format() {
        return `${this.client} owes ₱${this.amount} for ${this.details}`;
    }
}