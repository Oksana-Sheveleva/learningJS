// Задание №1. Дайте ответ, что будет в результате выполнения данных ниже примеров. С объяснением, почему это так.
console.log("кот" > "код"); // true, т.к. по юникоду т>д
console.log("2" + 2 * "2"); // 24, т.к. сначала выполняется умножение потом строки складываются
console.log(undefined == null); // true, т.к. при нестрогом равенстве они равны (это спец. правило языка)
console.log(undefined != null);  // false, т.к. они равны
console.log(null == 0 ); // false, так null может быть равен только undefined
console.log(2 > "3" ); //false, т.к. строка при стравнение преобразовывается в число.
console.log(null - false + true); //1, т.к. 0-0+1
console.log(1 / "l");//NaN
console.log("2" * "3");//6, т.к. оператор умножения преобразовывает в цифры
console.log(4 + 5 + "O");// 90, т.к. сначала выполняется 1действие 4+5, затем присоединяется 0
console.log("l" + 4 + 5); //145 последовательная конкатенация (соединение/склеивание строк)
console.log("4" - 2); //2 "-"преобразовал строку в число
console.log("4" - "4x"); // NaN второй аргумент не преобразуется в число
console.log("23" == 23);// true, нестрогое сравнение . строка становится числом
console.log(null == false); // false, спец правило про null
console.log(" -4 "/ 0 + 1); //infinity, правило деления на ноль
console.log(null + 1 ); //1 "+" преобразует null в 0
console.log(undefined + null); //NaN
console.log(1 === "1"); //false, т.к. при строгом равенстве сравниваются типы
console.log("2" > 10); // false, т.к. при сравнении строка преобразуется в число
console.log(NaN == undefined); //false, т.к. undefined при нестрогом равенстве равен только null