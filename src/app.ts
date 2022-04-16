import { Invoice } from './classes/Invoice.js';
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type    = document.querySelector('#type') as HTMLSelectElement;
const tofrom  = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount  = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end');
});

// ENUMS
enum ResourceType {
    BOOK, AUTHOR, FILM, DIRECTOR, PERSON
}

interface Resource<T> {
    uid: number;
    resourceType: number;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: {
        title: 'name of the wind'
    }
}

const docTwo: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: {
        name: 'yoshi'
    }
}

console.log(docOne, docTwo);
