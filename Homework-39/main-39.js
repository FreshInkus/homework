// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

// Задача 1.

const person = {
  myName: "Дима",
  age: "17",
  student: true,
};

/* for (const key in person) {
  console.log(person[key]);
} */

// Задача 2.

function isEmpty(textTest) {
  prompt("Введите данные");
  return textTest == "";
}

/* console.log (isEmpty()) */

// Задача 3.

const task = {
  title: "Дойти до фриланса",
  description: "Пройти уроки до модуля фриланс",
  isCompleted: false,
};

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}
console.log(cloneAndModify(task, { title: "Дойти до вордпресса" }));

// Задача 4.

function callAllMethods(obj) {
  for (let key in obj) {
    typeof obj[key] === "function" ? obj[key]() : false
  }
}

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};
callAllMethods(myObject);





// Было честно говоря сложно, пришлось подумать над 4 задачей а остальные вроде как сделал хорошо