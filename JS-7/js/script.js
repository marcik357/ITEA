// - Написати функцію`filterBy()`, яка прийматиме 2 аргументи.Перший аргумент - масив, який міститиме будь - які дані, другий аргумент - тип даних.
// - Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом.Тобто якщо передати масив['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив[23, null].
const arr = ['hello', {}, [], 'world', 23, undefined, '23', null];
const allTypes = ['string', 'number', 'boolean', 'null', 'undefined', 'object']

function filterBy(arr, type) {
    if (type === 'object') {
        return arr.filter(item => !(typeof item === type && item !== null));
    } else if (type === 'null') {
        return arr.filter(item => item !== null);
    } else {
        return arr.filter(item => !(typeof item === type));
    }
}

allTypes.forEach(type => console.log(filterBy(arr, type)));