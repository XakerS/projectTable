// переменные глобальной видимости
const tbody = document.querySelector(".table__tbody");
const phrase = document.querySelector('.table__control');


// функции
// фунция поиска по таблице
function tableSearch() {
    const table = document.querySelector('.table');
    const regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag && phrase.value.length >= 1) {
            table.rows[i].style.display = "";
        } 
        else {
            table.rows[i].style.display = "none";
        }
    }
}

// функция, отрисовывающая строки таблицы
function render() {
    for (let k = 0; k < teachers.length; k++) {
        tbody.innerHTML += `
    <tr class="table__row">
        <th class="table__item">${teachers[k].id}</th>
        <th class="table__item">${teachers[k].fullname}</th>
        <th class="table__item">${teachers[k].date_submited}</th>
        <th class="table__item">${teachers[k].position}</th>
        <th class="table__item">${teachers[k].organization}</th>
        <th class="table__item">${teachers[k].org_type}</th>
        <th class="table__item">${teachers[k].territory}</th>
        <th class="table__item">${teachers[k].location}</th>
        <th class="table__item">${teachers[k].vid}</th>
        <th class="table__item">${teachers[k].birthdate}</th>
        <th class="table__item">${teachers[k].qualification_category}</th>
        <th class="table__item">${teachers[k].plan_attestation_year}</th>
        <th class="table__item">${teachers[k].workflow}</th>
    </tr>`
    }
}

// вызов функции, чтобы при загрузке страницы была видна вся таблица
render();

// слушатели
// при фокусе пропадает таблица, так как пустой поисковой запрос
phrase.addEventListener("focus", tableSearch )
// запускаем функцию поиска при инпуте
phrase.addEventListener("input", tableSearch )