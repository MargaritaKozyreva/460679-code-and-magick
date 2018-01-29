window.renderStatistics = function(ctx, names, times) {
    var cloud_x = 100;
    var cloud_y = 10;
    var cloud_weight = 420;
    var cloud_height = 270;
    var font_text = "16px PT Mono";

    ctx.fillStyle = "rgba(0, 0, 0, 0.7)"; //рисуем тень области
    ctx.fillRect(cloud_x + 10, cloud_y + 10, cloud_weight, cloud_height); //рисуем смещение тени области
    ctx.fillStyle = "white"; //рисуем background области
    ctx.fillRect(cloud_x, cloud_y, cloud_weight, cloud_height); //выводим область

    var max_pers = 0; //находим максимальное значение баллов
    for (var k = 0; k < times.length; k++) {
        if (times[k] > max_pers) {
            max_pers = times[k];
        }
    }

    var max_persent = 100; // 100 - максимальный процент, от которого будем отталкиваться при выводе шкал гистограммы;
    var top_result = false; //маркер, с помощью которого будем менять текст результата в зависимости набрала ли я макс. балл или нет;

    for (var i = 0; i < names.length; i++) { //циклом выводим имена в область
        ctx.fillStyle = "black";
        ctx.font = font_text;
        ctx.fillText(names[i], cloud_x + 35 + (i * 90), 265);

    }
    for (var j = 0; j < times.length; j++) { //  делаем расчеты для отрисовки гистограммы
        var max_pers_length = ((times[j] * max_persent) / max_pers);
        ctx.fillStyle = "rgba(0, 0, 255," + Math.random() + ")";
        if (names[j] === 'Вы') { // проверка на себя и окрашивание в определенный цвет
            ctx.fillStyle = "rgba(255, 0, 0, 1)";

            if (times[j] === max_pers) {
               top_result = true;
            }
        }

        ctx.fillRect(cloud_x + 35 + (j * 90), 240 - (max_pers_length * 1.5), 40, max_pers_length * 1.5); // задаем параметры гистограммы
        ctx.fillText(Math.round(times[j]), cloud_x + 35 + (j * 90), 230 - (max_pers_length * 1.5)) // выводим кол-во баллов сверху шкалы
    }

    ctx.fillStyle = "black";
    ctx.font = font_text;
    if (top_result) {
        ctx.fillText("Ура вы победили! У вас максимум!", 130, 40);
    } else {
        ctx.fillText("Ура вы победили! Но максимум не ваш", 130, 40);
    }
    ctx.fillText("Список результатов:", 130, 55);
}