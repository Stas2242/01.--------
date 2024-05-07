//todo: По массиву дат (task15) сгенерировать динамически сетку с датами на заданный месяц см. файл table.png

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

    this.drawCalendar();
  },

  drawCalendar: function () {
    let mainField = document.createElement("div");
    mainField.style.width = "90vw";
    mainField.style.height = "90vh";
    document.querySelector("body").appendChild(mainField);

    let monthNameField = document.createElement("div");
    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    let monthNumber = this.date.getMonth();
    months.forEach((month) => {
      if (monthNumber == months.indexOf(month)) {
        monthNameField.innerHTML = month + " " + this.date.getFullYear();
      }
    });
    monthNameField.style.textAlign = 'center'
    monthNameField.style.fontSize = '3rem'
    mainField.appendChild(monthNameField);

    let calendarField = document.createElement("div");
    calendarField.style.display = "grid";
    calendarField.style.gridTemplateColumns = "repeat(7, 1fr)";
    calendarField.style.gridTemplateRows = "25px";
    calendarField.style.gridAutoRows = "100px";
    calendarField.style.gap = "3px";
    mainField.appendChild(calendarField);

    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

    days.forEach((day) => {
      let daybox = document.createElement("div");
      daybox.style.backgroundColor = "SteelBlue";
      daybox.style.border = "1px solid black";
      daybox.style.textAlign = "center";
      daybox.style.fontWeight = "800";
      calendarField.appendChild(daybox);
      daybox.innerHTML = day;
    });

    this.calendar.forEach((element) => {
      let box = document.createElement("div");
      box.style.border = "1px solid black";
      box.style.backgroundColor = "Lavender";
      calendarField.appendChild(box);

      box.innerHTML = element.getDate();
    });
  },
};

Calendar.createCalendar();