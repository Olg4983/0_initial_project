import { settings } from '../core/constants/settings'
import * as utils from '../core/utils/index'

export class DonateForm {
    #form

    constructor(totalAmount, createNewDonate) {
        this.createNewDonate = createNewDonate;
        this.totalAmount = totalAmount;
        this.#form = document.createElement('form');
        this.#form.className = 'donate-form';
    }
    updateTotalAmount = (newAmount) => {
        const element = document.querySelector('#total-amount');
        element.textContent = `${newAmount}${settings.currency}`;
    }

    render() {
        const totalTitle = document.createElement('h1');
        totalTitle.id = 'total-amount';
        totalTitle.textContent = `28${settings.currency}`;

        const lableHTML = document.createElement('lable');
        lableHTML.className = 'donate-form__input-label';
        lableHTML.textContent = `Введите сумму в ${settings.currency}`;

        const pHTML = document.createElement('p');

        const inpuHTML = document.createElement('input');
        inpuHTML.className = 'donate-form__donate-input';
        inpuHTML.name = 'amount';
        inpuHTML.type = 'number';
        inpuHTML.max = '100';
        inpuHTML.min = '0';
        inpuHTML.required = '';
        lableHTML.append(pHTML, inpuHTML);

        const butHTML = document.createElement('button');
        butHTML.className = 'donate-form__submit-button';
        butHTML.type = 'submit';
        butHTML.textContent = 'Задонатить';

        this.#form.append(totalTitle, lableHTML, butHTML);

        this.#form.addEventListener('submit', (event) => {
            console.log('event', event)
            event.preventDefault();
            const { target } = event;
            const amoutInput = target.amount;
            const valueAmount = Number(amoutInput.value);
            const newDonat = { amount: valueAmount, date: utils.getFormattedTime(new Date()) };
            amoutInput.value = '';
            this.createNewDonate(newDonat);

        })
        return this.#form;
    }
}