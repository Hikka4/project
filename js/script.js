// .getMonth() выводит месяц от 0 до 11
// .getDate() выводит число от 1 до 31
// .getDay() выводит номер дня недели от 0 до 6, где 0 - Воскресенье, а 6 -суббота
// let d1 = new Date(nowDate.getYear(), nowDate.getMonth() + 1, 0) - выводит количество дней в месяце



let weekDayName = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
let nowDate = new Date(); 
let calenadrBody = document.querySelector('.calendar__body');
let isDay = nowDate.getDate();
let burgerButton = document.querySelector('.burger__button');

// открытие окна опций
burgerButton.addEventListener('click', function(e) {
    burgerButton.classList.toggle('active');
    
})

// функция показывает месяц в календаре
function generationMonthName() {
    let calendarHeader = document.querySelector('.calendar__header');
    let monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let nowDate = new Date();
    calendarHeader.textContent = monthName[nowDate.getMonth()];
}



// функция генерации дней в календаре
function generationDayToCalendar() {
    maxDays = new Date(nowDate.getYear(), nowDate.getMonth() + 1, 0);
    rows = Math.ceil(maxDays.getDate()/7);

    for(let i = 0; i < rows; i++ ) {
        calenadrBody.appendChild(generationCalendarRows()) // Добавляем нужное количество строк для дней
    }
    // заполняем дни в календарь
    addDayCalendar(maxDays.getDate());
    
}
// функция отвечает за добавление дней в календарь
function addDayCalendar(maxDay) {

    // Получаем с какого дня недели начаниется месяц
    // new Date(nowDate.getFullYear(), nowDate.getMonth(), 1).getDay();
    let startMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1).getDay();
    let row = document.querySelectorAll('.calendar__rows');
    
    let k = 0; // Счетчик строки в которую вносим ячейки
    // Цикл заполняет пустыми ячейками те дни, которые идут до начала месяца
    for(let i = 0; i < startMonth-1; i++) {
        row[k].appendChild(createEmpty());
    }
    // Заполняем сами дни в месяц
    for(let i = 1; i <= maxDay; i++) {
        if(row[k].children.length < 7) {
            row[k].appendChild(create(i));
        } else {
            k++;
            row[k].appendChild(create(i));
        }
    }
}



function create(index) {
    let spanNumberDay = document.createElement('span');
    if(index == isDay) {
        spanNumberDay.className = 'number__day numberDayActive';
    } else {
        spanNumberDay.className = 'number__day';
    }
    spanNumberDay.textContent = index;
    // console.log(spanNumberDay)
    return spanNumberDay;
    
}

function createEmpty() {
    let spanNumberDayEmpty = document.createElement('span');
    spanNumberDayEmpty.className = 'number__day__empty';
    return spanNumberDayEmpty;
}


// функция генерирует одну строку в calendar__rows
function generationCalendarRows() {
    let row = document.createElement('div');
    row.className = 'calendar__rows';
    return row;
}

generationMonthName();
generationDayToCalendar()