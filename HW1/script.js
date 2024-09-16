/*1. Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки*/

arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

/*2. Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.*/

function createCounter() {
    const obj = {
        increment: (number) => ++number,
        decrement: (number) => --number       
    }
    return obj;  
}
const newObj = createCounter();
console.log(newObj.increment(8));
console.log(newObj.decrement(8));


/*3. Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);*/

function findElementByClass(rootElement, nameOfClass) {
    for (let i = 0; i < rootElement.children.length; i++) {      
        if(rootElement.children[i].classList.contains(nameOfClass)) {
            return rootElement.children[i];
        } else {
            findElementByClass(rootElement.children[i]);
        }  
    }
    
}
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'top-content__content');
console.log(targetElement);