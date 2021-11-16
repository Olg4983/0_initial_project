import moment from "moment";

export const calculateSumOfNumbers = (numbers) => {
    let sum = 0;
    numbers.forEach(element => {
        sum += element;
    });
    return sum;
}

export const getFormattedTime = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}