// Алгоритм працювання вибору типу бурової.
// МГБУ можно вибрати тількі в разі вибору типу свердловини в одну колону
document.getElementById('type__input2').addEventListener('click', function () {
    document
        .getElementById('type-burmash2')
        .setAttribute('disabled', 'disabled');
});
document.getElementById('type__input3').addEventListener('click', function () {
    document
        .getElementById('type-burmash2')
        .setAttribute('disabled', 'disabled');
});
document.getElementById('type__input1').addEventListener('click', function () {
    document
        .getElementById('type-burmash2')
        .removeAttribute('disabled', 'disabled');
});

// Перевірка заповнення обов'язкових полів
// Після заповненя полів Населений пункт, Им'я, Телефон
// стан кнопки перестає бути disabled
function openButton() {
    const inputCity = document.getElementById('input-city').value;
    const inputName = document.getElementById('user-name').value;
    const inputPhone = document.getElementById('user-phone').value;

    const invalidText = document.getElementById('invalid-text');

    const submitButton = document.getElementById('btnsubmit');

    if (inputCity.length > 2 && inputName.length > 2 && inputPhone.length > 2) {
        submitButton.removeAttribute('disabled');
        invalidText.style.display = 'none';
    }
}

// Валідація даних Населений пункт
const inputCity2 = document.getElementById('input-city');

inputCity2.addEventListener('change', () => {
    if (inputCity2.value.length < 1) {
        inputCity2.style.border = '2px solid red';
        inputCity2.placeholder = 'Ви не ввели населенний пункт';
    } else {
        inputCity2.style.border = 'none';
        // inputCity2.style.color = 'inherit';
    }
});

// Відправка даних
const form = document.getElementById('form');

form.addEventListener('submit', getFormValue);

function getFormValue(event) {
    const data = {
        district: '',
        city: '',
        typeWell: '',
        typeBurmash: '',
        depth: '',
        volume: '',
        arrangment: '',
        userName: '',
        userPhone: '',
    };

    const district = document.getElementById('select-district');
    data.district = district.value;

    const city = document.getElementById('input-city');
    data.city = city.value;

    const typeWellItem = form.querySelectorAll('.type-well__input');
    for (let i = 0; i < typeWellItem.length; i++) {
        if (typeWellItem[i].checked) {
            data.typeWell = typeWellItem[i].value;
        }
    }

    const typeBurmash = document.querySelectorAll('.type-burmash__input');
    for (let i = 0; i < typeBurmash.length; i++) {
        if (typeBurmash[i].checked) {
            data.typeBurmash = typeBurmash[i].value;
        }
    }

    const depth = document.getElementById('depth-volume');
    data.depth = depth.value;

    const volumeItem = form.querySelectorAll('.volume__input');
    for (let i = 0; i < volumeItem.length; i++) {
        if (volumeItem[i].checked) {
            data.volume = volumeItem[i].value;
        }
    }

    const arrangment = form.querySelectorAll('.arrangement__input ');
    for (let i = 0; i < arrangment.length; i++) {
        if (arrangment[i].checked) {
            data.arrangment = arrangment[i].value;
        }
    }

    const userNameValue = document.getElementById('user-name');
    data.userName = userNameValue.value;

    const userPhoneValue = document.getElementById('user-phone');
    data.userPhone = userPhoneValue.value;

    return data;
}
const btnsubmit = document.getElementById('btnsubmit');
btnsubmit.addEventListener('click', function () {
    localStorage.setItem('wellValues', JSON.stringify(getFormValue()));
});
