// Проверь полученную строку на наличие лишних пробелом перед началом, внутри и в конце строки, верни исправленное значение.


let dataStringFirst ='                  Sun  is shining,     the weather is fine.   ';
dataStringFirst=dataStringFirst.replaceAll(/\s+/g, " ");
dataStringFirst=dataStringFirst.trim();
console.log(dataStringFirst);


// Найди и замени все символы "+" в строках на символ пробела: hrevtsova+123@yahoo.com s.hrevtsova+2453+22@gmail.com


let emailString = 'hrevtsova+123@yahoo.com s.hrevtsova+2453+22@gmail.com';
emailString=emailString.replaceAll(/\+/g, "_");
console.log(emailString);


// Посчитай и выведи результат, сколько гласных букв в строке:
// "Есть только две бесконечные вещи: Вселенная и глупость. Хотя насчет Вселенной я не уверен."
// "Теория — это когда все известно, но ничего не работает. Практика — это когда все работает, но никто не знает почему. Мы же объединяем теорию и практику: ничего не работает… и никто не знает почему!"
// "Образование — это то, что остаётся после того, как забывается всё выученное в школе."

let dataString= 'Есть только две бесконечные вещи: Вселенная и глупость. Хотя насчет Вселенной я не уверен.';
dataString=dataString.toLowerCase();
dataString=dataString.replaceAll(".", "");
dataString=dataString.replaceAll(":", "");
dataString=dataString.replaceAll(" ", "");
dataString=dataString.replace(/б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|/g, "");
dataString=dataString.length;
console.log(dataString);

dataString = "Теория — это когда все известно, но ничего не работает. Практика — это когда все работает, но никто не знает почему. Мы же объединяем теорию и практику: ничего не работает… и никто не знает почему!"; 
dataString=dataString.toLowerCase();
dataString=dataString.replaceAll(".", "");
dataString=dataString.replaceAll(":", "");
dataString=dataString.replaceAll(" ", "");
dataString=dataString.replaceAll("—", "");
dataString=dataString.replaceAll(",", "");
dataString=dataString.replaceAll("!", "");
dataString=dataString.replaceAll("…", "");
dataString=dataString.replace(/б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|/g, "");
dataString=dataString.length;
console.log(dataString);

dataString = "Образование — это то, что остаётся после того, как забывается всё выученное в школе."; 
dataString=dataString.toLowerCase();
dataString=dataString.replaceAll(".", "");
dataString=dataString.replaceAll(":", "");
dataString=dataString.replaceAll(" ", "");
dataString=dataString.replaceAll("—", "");
dataString=dataString.replaceAll(",", "");
dataString=dataString.replaceAll("!", "");
dataString=dataString.replaceAll("…", "");
dataString=dataString.replace(/б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|/g, "");
dataString=dataString.length;
console.log(dataString);

// Попроси пользователя ввести дату рождения в формате: дд.мм.гггг
// Выведи ответ пользователю с информацией: был ли этот год високосным и через сколько лет наступит его год по Восточному календарюю. Если пользователь указал дату в неверном формате, попроси его ввести ее снова, если он нажал cancel, то не запрашивай.


// function birthday() {
//   let dateOfBirth;
//   while (!dateOfBirth) {
//     dateOfBirth = prompt(
//       'Please enter your date of birth in format dd.mm.yyyy'
//     );
//     if (dateOfBirth === 'null') {
//       return;
//     }
//   }
//   yearOfBirth = dateOfBirth.slice(6, 10);

// if (yearOfBirth % 4 !== 0) {
//   alert("Год не високосный.");
// } else {
//   alert("Год високосный.");
// }

//   const rat = 33;
//   const ox = 42;
//   const tiger = 50;
//   const rabbit = 58;
//   const dragon = 67;
//   const snake = 75;
//   const horse = 83;
//   const goat = 92;
//   const monkey = 00;
//   const rooster = 08;
//   const dog = 17;
//   const pig = 25;

//   yearMod = Number((yearOfBirth / 12).toFixed(2).slice(4, 6));
//   let yearNow = Number(2023);
//   console.log(yearNow);

//   if (yearMod === rat) {
//     alert(`Your year is Rat. Next year will be in ${yearNow + 9}`);   
//   } else if (yearMod === ox) {
//     alert(`Your year is Ox. Next year will be in ${yearNow + 10}`);
//   } else if (yearMod === tiger) {
//     alert(`Your year is Tiger. Next year will be in ${yearNow + 11}`);
//   } else if (yearMod === rabbit) {
//     alert(`Your year is Rabbit. Next year will be in ${yearNow + 12}`);
//   } else if (yearMod === dragon) {
//     alert(`Your year is Dragon. Next year will be in ${yearNow + 1}`);
//   } else if (yearMod === snake) {
//     alert(`Your year is Snake. Next year will be in ${yearNow + 2}`);
//   } else if (yearMod === horse) {
//     alert(`Your year is Horse. Next year will be in ${yearNow + 3}`);
//   } else if (yearMod === goat) {
//     alert(`Your year is Goat. Next year will be in ${yearNow + 4}`);
//   } else if (yearMod === monkey) {
//     alert(`Your year is Monkey. Next year will be in ${yearNow + 5}`);
//   } else if (yearMod === rooster) {
//     alert(`Your year is Rooster. Next year will be in ${yearNow + 6}`);
//   } else if (yearMod === dog) {
//     alert(`Your year is Dog. Next year will be in ${yearNow + 7}`);
//   } else if (yearMod === pig) {
//     alert(`Your year is Pig. Next year will be in ${yearNow + 8}`);
//   } else {
//     alert('Something went wrong, we recommend you to stay away from this JS.');
//   }
// }
// birthday();
