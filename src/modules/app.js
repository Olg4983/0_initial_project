import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';
import * as utils from '../core/utils/index'

export default class App {
    #DonateForm
    #DonateList

    constructor() {
        this.state = {
            donates: [],
            totalAmount: 0
        };
        const mockDonates = [
            { amount: 4, date: utils.getFormattedTime(new Date()) },
            { amount: 20, date: utils.getFormattedTime(new Date()) },
            { amount: 3, date: utils.getFormattedTime(new Date()) },
            { amount: 1, date: utils.getFormattedTime(new Date()) },
        ];
        this.state.donates = mockDonates;
        this.#DonateList = new DonateList(this.state.donates);
        this.#DonateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
    }

    createNewDonate(newDonate) {
        this.state.donates.push(newDonate);
        this.state.totalAmount = utils.calculateSumOfNumbers(this.state.donates.map(donate => donate.amount));
        this.#DonateList.updateDonates(this.state.donates);
        this.#DonateForm.updateTotalAmount(this.state.totalAmount);
    }

    run() {
        const donateFormHTML = this.#DonateForm.render();
        const donateListHTML = this.#DonateList.render();
        document.body.append(donateFormHTML, donateListHTML);
    }
}