// Cгенерировать массив 6(строк) на 7(колонок),  который должнем быть заполнен днями в текущем месяце (календарь на месяц).
// Месяц задается произвольно. Календарь должен включать дни недели предыдущего месяца и последующего.
// В решении задачи воспользоваться стандартными функциями работы с датой и временем.
//https://learn.javascript.ru/datetime

const Calendar = {
  calendar: [],
  date: new Date(),

  createCalendar: function () {
    let currentMonth = this.date.getMonth();
    let currentYear = this.date.getFullYear();

    let theFirstDay = new Date(currentYear, currentMonth, 1);
    let theSecondDay = new Date(currentYear, currentMonth, 2);
    let theLastDayPrevMonth = new Date(currentYear, currentMonth, 0);

    this.calendar[0] = theFirstDay;

    while (this.calendar[0].getDay() > 1) {
      this.calendar.unshift(new Date(theLastDayPrevMonth));
      theLastDayPrevMonth.setDate(theLastDayPrevMonth.getDate() - 1);
    }

    while (this.calendar.length < 42) {
      this.calendar.push(new Date(theSecondDay));
      theSecondDay.setDate(theSecondDay.getDate() + 1);
    }

    console.log(this.calendar);    
  },
};

Calendar.createCalendar();