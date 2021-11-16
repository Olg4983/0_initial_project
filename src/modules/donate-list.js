import { settings as constants } from '../core/constants/settings'

export class DonateList {
    #donatesContainer

    constructor(donates) {
        this.donates = donates;
        this.#donatesContainer = document.createElement('div');
        this.#donatesContainer.className = 'donates-container';
    }

    updateDonates = (updatedDonates) => {
        const elementDonatesContainerDonates = document.querySelector('.donates-container__donates');
        elementDonatesContainerDonates.textContent = '';
        updatedDonates.forEach(donItem => {
            const donateItem = document.createElement('div');
            donateItem.className = 'donate-item';
            donateItem.textContent = `${donItem.date} - ${donItem.amount}${constants.currency}`;
            elementDonatesContainerDonates.append(donateItem);
        });
    }

    render() {
        const donatesContainerTitle = document.createElement('h2');
        donatesContainerTitle.className = 'donates-container__title';
        donatesContainerTitle.textContent = 'Список донатов';

        const donatesContainerDonates = document.createElement('div');
        donatesContainerDonates.className = 'donates-container__donates';
        console.log('this.donates', this.donates)
        this.donates.forEach(donItem => {
            console.log("donItem", donItem);
            console.log('donItem.amount', donItem.amount)
            const donateItem = document.createElement('div');
            donateItem.className = 'donate-item';
            donateItem.textContent = `${donItem.date} - ${donItem.amount}${constants.currency}`;
            donatesContainerDonates.append(donateItem);
        });

        this.#donatesContainer.append(donatesContainerTitle, donatesContainerDonates);

        return this.#donatesContainer;
    }
}