let creditCard = prompt ('Введите номер вашей кредитной карты:');

let result = creditCard.slice (12, 16);
alert ('Номер вашей кредитной карты: ' + '************' + result);