// todo: Дан номер месяца (1 — январь, 2 — февраль, ...). 
// Вывести название соответствующего времени года("зима", "весна" и т.д.). 
// Примечание: решить задачу через конструкцию switch

let x = prompt('Введите число месяца',);

switch(x) {
    case '1':
        alert('January');
        break;
    case '2':
        alert('Febtuary');
        break;
    case '3':
        alert('March');
        break;
    case '4':
        alert('April');
        break;
    case '5':
        alert('May');
        break;
    case '6':
        alert('June');
        break;
    case '7':
        alert('July');
        break;
    case '8':
        alert('August');
        break;
    case '9':
        alert('September');
        break;
    case '10':
        alert('October');
        break;
    case '11':
        alert('November');
        break;
    case '12':
        alert('December');
        break;
    default:
        alert('THERE ARE ONLY 12 MONTHS');
        break;
}