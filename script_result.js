// Визиваємо об'єкт із localStorage та конвертуємо
// у числові значення
const resultWellValues = localStorage.getItem('wellValues');
const resultWellValuesPars = JSON.parse(resultWellValues);

// Розміщаємо об'єкт по полицям кожен в свій div
const result__district2 = document.getElementById('result__district2');
const result__city2 = document.getElementById('result__city2');
const result__type_well2 = document.getElementById('result__type-well2');
const result__type_burmash2 = document.getElementById('result__type-burmash2');
const result__depth2 = document.getElementById('result__depth2');
const result__volume2 = document.getElementById('result__volume2');
const result__equipment2 = document.getElementById('result__equipment2');
const result__user_name2 = document.getElementById('result__user-name2');
const result__user_phone2 = document.getElementById('result__user-phone2');

result__district2.innerHTML = resultWellValuesPars.district;
result__city2.innerHTML = resultWellValuesPars.city;
result__type_well2.innerHTML = resultWellValuesPars.typeWell;
result__type_burmash2.innerHTML = resultWellValuesPars.typeBurmash;
result__depth2.innerHTML = resultWellValuesPars.depth;
result__volume2.innerHTML = resultWellValuesPars.volume;
result__equipment2.innerHTML = resultWellValuesPars.arrangment;
result__user_name2.innerHTML = resultWellValuesPars.userName;
result__user_phone2.innerHTML = resultWellValuesPars.userPhone;

// При кліці на кнопку на головну, очищаємо сховище localStorage
const btnClear = document.getElementById('result_btn');
btnClear.addEventListener('click', function () {
    localStorage.clear();
});
const getPrice = localStorage.getItem('priceWell');
const resultGetPrice = JSON.parse(getPrice);

const dataPrice = {
    inOneColumn: 700,
    inTwoColumns: 1600,
    inThreeColumns: 3200,
};

const dataPriceArrang = {
    ital: 55000,
    ukraine: 45000,
};
