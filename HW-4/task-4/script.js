/* Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода `Math.random()`
в диапазоне от 0 до 10.
В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести 
в консоль, это будет два массива: исходный массив и массив с четными значениями.*/



function array() {
    let arr = [];
    let newArr =[];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 10));
        if(arr[i] % 2 === 0){
            newArr.push(arr[i]);
        }
    }
    console.log(arr);
    console.log(newArr);
    
}

array();